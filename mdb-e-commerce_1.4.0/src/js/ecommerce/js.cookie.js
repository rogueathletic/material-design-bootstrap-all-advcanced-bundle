/* !
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
jQuery(($) => {
  function extend() {
    let i = 0;
    const result = {};
    for (; i < arguments.length; i++) {
      const attributes = arguments[i];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }

  function decode(s) {
    return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }

  function serialize(obj) {
    return JSON.stringify(obj)
  }

  function deserialize(strVal, defaultVal) {
    if (!strVal) {
      return defaultVal;
    }

    let val = '';

    try {
      val = JSON.parse(strVal);
    } catch (e) {
      val = strVal;
    }

    return val !== undefined ? val : defaultVal;
  }


  function init(converter) {
    function api() {}

    // expires in minutes e.g. 1min 60 000, 1h = 60 * 1min
    function setStorage(key, value, expires) {

      if (typeof document === 'undefined') {
        return;
      }

      // check expiry when storage is setting
      checkExpiry();

      let expiry;

      if (expires) {
        const now = new Date();
        expiry = now.getTime() + expires * 60000;

        const list = getStorage('expiryList') !== undefined ? getStorage('expiryList') : [];
        const newItem = { [key]: expiry };
        list.push(newItem);
        localStorage.setItem(key, serialize(value));
        localStorage.setItem('expiryList', serialize(list));
      } else {
        localStorage.setItem(key, serialize(value));
      }

      return value;
    }

    function checkExpiry() {

      const expiryList = deserialize(localStorage.getItem('expiryList')) || [];
      const now = new Date();
      const newList = expiryList.filter( el => {

        const elKey = Object.keys(el);

        if (now > el[elKey]) {

          localStorage.removeItem(elKey);
        }

        return el[elKey] >= now;

      });

      localStorage.setItem('expiryList', serialize(newList));
    }

    // Periodic Expire Checking - period in minutes
    // Switcher true to start, false to stop
    function periodicCheck(period, switcher) {

      let intervalID;
      period *= 60000;

      if (switcher === true) {

        intervalID = setInterval(() => {
          checkExpiry();
        }, period);
      } else {
        clearInterval(intervalID);
      }
    }

    function getStorage(key, optionalDefaultValue) {

      if (typeof document === 'undefined') {
        return;
      }

      // check expiry when storage is getting
      checkExpiry();

      const item = localStorage.getItem(key);
      const result = deserialize(item, optionalDefaultValue);

      return result;
    }

    function removeStorage(key) {

      if (typeof document === 'undefined') {
        return;
      }

      // check expiry when storage is removing
      checkExpiry();

      localStorage.removeItem(key);

      return key;
    }

    // Show modal for new user on page - modal = modal ID
    function showModalNewUser(modal) {

      // Check if user saw the modal
      const key = 'hadModal';
      const hadModal = getStorage(key);

      // Show the modal only if new user
      if (!hadModal) {
        $(modal).modal('show');
      }

      // If modal is displayed, store that in localStorage
      $(modal).on('shown.bs.modal', () => {
        setStorage(key, true);
      });

    }

    // modal = modal ID,
    function showModalScoring(modal, times) {

      const hasShown = getStorage('hasShown') !== undefined ? getStorage('hasShown') : false;
      const counter = getStorage('Counter') !== undefined ? getStorage('Counter') : 0;
      const newCounter = counter + 1;
      setStorage('Counter', newCounter);

      if (newCounter >= times && !hasShown) {

        $(modal).modal('show');
        setStorage('hasShown', true);
      }
    }

    function set(key, value, attributes) {
      if (typeof document === 'undefined') {
        return;
      }

      attributes = extend({
        path: '/'
      }, api.defaults, attributes);

      if (typeof attributes.expires === 'number') {
        attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
      }

      // We're using "expires" because "max-age" is not supported by IE
      attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

      try {
        const result = JSON.stringify(value);
        if (/^[\{\[]/.test(result)) {
          value = result;
        }
      } catch (e) { }

      value = converter.write ?
        converter.write(value, key) :
        encodeURIComponent(String(value))
          .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

      key = encodeURIComponent(String(key))
        .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
        .replace(/[\(\)]/g, escape);

      let stringifiedAttributes = '';
      for (const attributeName in attributes) {
        if (!attributes[attributeName]) {
          continue;
        }
        stringifiedAttributes += '; ' + attributeName;
        if (attributes[attributeName] === true) {
          continue;
        }

        // Considers RFC 6265 section 5.2:
        // ...
        // 3.  If the remaining unparsed-attributes contains a %x3B (";")
        //     character:
        // Consume the characters of the unparsed-attributes up to,
        // not including, the first %x3B (";") character.
        // ...
        stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
      }

      return (document.cookie = key + '=' + value + stringifiedAttributes);
    }

    function get(key, json) {
      if (typeof document === 'undefined') {
        return;
      }

      const jar = {};
      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      const cookies = document.cookie ? document.cookie.split('; ') : [];
      let i = 0;

      for (; i < cookies.length; i++) {
        const parts = cookies[i].split('=');
        let cookie = parts.slice(1).join('=');

        if (!json && cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          const name = decode(parts[0]);
          cookie = (converter.read || converter)(cookie, name) ||
            decode(cookie);

          if (json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) { }
          }

          jar[name] = cookie;

          if (key === name) {
            break;
          }
        } catch (e) {}
      }

      return key ? jar[key] : jar;
    }

    api.setStorage = setStorage;
    api.checkExpiry = checkExpiry;
    api.periodicCheck = periodicCheck;
    api.set = set;
    api.getStorage = getStorage;
    api.showModalNewUser = showModalNewUser;
    api.showModalScoring = showModalScoring;
    api.get = function (key) {
      return get(key, false /* read as raw */);
    };
    api.getJSON = function (key) {
      return get(key, true /* read as json */);
    };
    api.remove = function (key, attributes) {
      set(key, '', extend(attributes, {
        expires: -1
      }));
    };

    api.removeStorage = removeStorage;

    api.defaults = {};

    api.withConverter = init;

    window.Cookies = api;
  }

  return init(() => { });
});
