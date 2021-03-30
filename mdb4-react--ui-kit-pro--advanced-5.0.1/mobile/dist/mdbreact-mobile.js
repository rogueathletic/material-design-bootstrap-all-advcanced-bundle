(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('react-native'), require('react-native-linear-gradient'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/react-native-fontawesome'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/free-brands-svg-icons'), require('@fortawesome/free-regular-svg-icons'), require('react-native-tooltips')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'react-native', 'react-native-linear-gradient', '@fortawesome/fontawesome-svg-core', '@fortawesome/react-native-fontawesome', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-regular-svg-icons', 'react-native-tooltips'], factory) :
  (global = global || self, factory(global.soundcloud = {}, global.React, global.PropTypes, global.reactNative, global.LinearGradient, global.fontawesomeSvgCore, global.reactNativeFontawesome, global.freeSolidSvgIcons, global.freeBrandsSvgIcons, global.freeRegularSvgIcons, global.Tooltips));
}(this, (function (exports, React, PropTypes, reactNative, LinearGradient, fontawesomeSvgCore, reactNativeFontawesome, freeSolidSvgIcons, freeBrandsSvgIcons, freeRegularSvgIcons, Tooltips) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  LinearGradient = LinearGradient && LinearGradient.hasOwnProperty('default') ? LinearGradient['default'] : LinearGradient;
  Tooltips = Tooltips && Tooltips.hasOwnProperty('default') ? Tooltips['default'] : Tooltips;

  var shadow = {
    borderStyle: 'solid',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 8
  };

  var basicColors = [{
    name: "primary",
    color: "#4285f4"
  }, {
    name: "secondary",
    color: "#aa66cc"
  }, {
    name: "defaultColor",
    color: "#2bbbad"
  }, {
    name: "danger",
    color: "#ff4444"
  }, {
    name: "warning",
    color: "#ffbb33"
  }, {
    name: "success",
    color: "#00C851"
  }, {
    name: "info",
    color: "#33b5e5"
  }, {
    name: "dark",
    color: "#000"
  }, {
    name: "light",
    color: "#fff"
  }];
  var gradients = [{
    name: "purple",
    color: "#ff6ec4, #7873f5"
  }, {
    name: "peach",
    color: "#FFD86F, #FC6262"
  }, {
    name: "aqua",
    color: "#2096ff, #05ffa3"
  }, {
    name: "blue",
    color: "#45cafc, #303f9f"
  }];

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var screenWidth = reactNative.Dimensions.get('window').width;
  var screenHeight = reactNative.Dimensions.get('window').height;
  var isIOS = Platform.OS === 'ios';
  var dynamicStyles = function dynamicStyles(stateArr, objStyle) {
    if (stateArr.length > 0) {
      var thisarr = stateArr.map(function (e) {
        return e.split('-');
      });
      var toUpper = thisarr[0].slice(1, thisarr[0].length).map(function (e) {
        return e.charAt(0).toUpperCase() + e.substr(1);
      });
      var nameStyle = [].concat(thisarr[0].slice(0, 1)).concat([].concat(toUpper)).join('');
      return objStyle[nameStyle];
    } else {
      return;
    }
  };
  var fc = function fc(selectedColor, objWtihColors) {
    var objWC = objWtihColors.filter(function (e, i) {
      return e.name === selectedColor;
    });

    if (!objWC.length) {
      return selectedColor;
    } else {
      return objWC[0].color;
    }
  };
  var scs = function scs(selectedColor, objWtihColors, isObject, stylesMap) {
    if (isObject === void 0) {
      isObject = false;
    }

    var emp;
    var obj = {};

    if (isObject && stylesMap.length > 0) {
      stylesMap.map(function (e) {
        if (!Array.isArray(selectedColor)) {
          var newArray = [selectedColor];
          var arrSplited = [].concat(newArray).map(function (e) {
            return e.split(',');
          })[0].map(function (e) {
            return e.trim();
          });

          if (!!fc(selectedColor, objWtihColors)) {
            obj[e] = fc(selectedColor, objWtihColors);
            emp = obj;
          } else {
            emp = arrSplited;
          }
        } else {
          var colorObj = obj[e] = !!fc(selectedColor, objWtihColors) ? fc(selectedColor, objWtihColors) : selectedColor;
          emp = colorObj;
        }
      });
    } else {
      if (!Array.isArray(selectedColor)) {
        var func = fc(selectedColor, objWtihColors);
        var newArray = [func];
        var arrSplited = [].concat(newArray).map(function (e) {
          return e.split(',');
        })[0].map(function (e) {
          return e.trim();
        });
        emp = arrSplited;
      } else {
        emp = selectedColor;
      }
    }

    return emp;
  };
  function pick(t, a) {
    if (t === void 0) {
      t = {};
    }

    if (a === void 0) {
      a = [];
    }

    return a.reduce(function (m, k) {
      var _extends2;

      return _extends({}, m, (_extends2 = {}, _extends2[k] = t[k], _extends2));
    }, {});
  }

  var Badge = function Badge(_ref) {
    var title = _ref.title,
        style = _ref.style,
        color = _ref.color,
        pill = _ref.pill,
        icon = _ref.icon;
    var header = defaultStyle.header,
        text = defaultStyle.text;
    var bPill = pill ? badgeStyles.pill : null;
    var styles = scs(color, basicColors, true, ["backgroundColor", "borderColor"]);
    var shadow$1 = shadow;
    return React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([header, styles, bPill, shadow$1, style])
    }, icon ? null : React__default.createElement(reactNative.Text, {
      numberOfLines: 1,
      style: text
    }, title), React__default.createElement(reactNative.View, null, icon));
  };

  var defaultStyle = reactNative.StyleSheet.create({
    header: {
      padding: 2,
      margin: 5,
      justifyContent: "center"
    },
    text: {
      textAlign: "center",
      textAlignVertical: "center",
      color: "#Fff",
      paddingLeft: 3,
      paddingRight: 3
    }
  });
  var badgeStyles = reactNative.StyleSheet.create({
    pill: {
      borderRadius: 100,
      paddingRight: 4,
      paddingLeft: 4
    }
  });
  Badge.propTypes = {
    title: PropTypes.string,
    style: PropTypes.string,
    color: PropTypes.string,
    pill: PropTypes.bool
  };
  Badge.defaultProps = {
    title: "",
    style: "",
    color: basicColors[0].color,
    pill: false,
    icon: null
  };

  var Button =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Button, _Component);

    function Button() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "state", {});

      return _this;
    }

    var _proto = Button.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          title = _this$props.title,
          size = _this$props.size,
          color = _this$props.color,
          outline = _this$props.outline,
          gradient = _this$props.gradient,
          start = _this$props.start,
          noShadow = _this$props.noShadow,
          end = _this$props.end,
          style = _this$props.style,
          disabled = _this$props.disabled,
          onPressed = _this$props.onPressed,
          children = _this$props.children,
          textColor = _this$props.textColor,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["title", "size", "color", "outline", "gradient", "start", "noShadow", "end", "style", "disabled", "onPressed", "children", "textColor"]);

      var defaultBG = btnStyle.defaultBG,
          mainText = btnStyle.mainText,
          defaultSize = btnStyle.defaultSize,
          small = btnStyle.small,
          large = btnStyle.large,
          outlineBtn = btnStyle.outlineBtn,
          noBorder = btnStyle.noBorder,
          changedOpacity = btnStyle.changedOpacity;
      var isSmall = size === "sm" ? small : null;
      var isLarge = size === "lg" ? large : null;
      var isDisabled = disabled ? disabled : false;
      var addOpacityIsDisabled = disabled ? changedOpacity : null;
      var isOutline = outline ? outlineBtn : null;
      var isOutlineAddText = outline ? scs(color, basicColors, true, ["color"]) : null;
      var shadow$1 = !noShadow && shadow;
      var defaultStartGradient = {
        x: 0,
        y: 0
      };
      var defaultEndGradient = {
        x: 1,
        y: 0
      };
      var checkTitle = typeof title === "string" ? title.toUpperCase() : title;
      var button;

      if (gradient) {
        return button = React__default.createElement(LinearGradient, {
          colors: scs(gradient, gradients, false),
          style: [defaultBG, defaultSize, isSmall, isLarge, shadow$1, noBorder, style, addOpacityIsDisabled],
          start: start ? start : defaultStartGradient,
          end: end ? end : defaultEndGradient
        }, React__default.createElement(reactNative.TouchableOpacity, _extends({
          disabled: isDisabled
        }, attributes), React__default.createElement(reactNative.Text, {
          style: reactNative.StyleSheet.flatten([mainText, {
            color: textColor ? textColor : "#fff"
          }])
        }, checkTitle, " ", children)));
      } else {
        return button = React__default.createElement(reactNative.TouchableOpacity, _extends({
          style: [defaultBG, defaultSize, isSmall, isLarge, scs(color, basicColors, true, ["backgroundColor", "borderColor"]), shadow$1, isOutline, style, addOpacityIsDisabled],
          disabled: isDisabled,
          onPress: onPressed
        }, attributes), React__default.createElement(reactNative.Text, {
          style: reactNative.StyleSheet.flatten([mainText, {
            color: textColor ? textColor : "#fff"
          }, isOutlineAddText])
        }, checkTitle, children));
      }
    };

    return Button;
  }(React.Component);

  var btnStyle = reactNative.StyleSheet.create({
    defaultBG: {
      backgroundColor: basicColors[2].color,
      borderRadius: 1
    },
    mainText: {
      textAlign: "center",
      color: "#fff"
    },
    defaultSize: {
      alignItems: "center",
      justifyContent: "center",
      height: 40,
      paddingLeft: 15,
      paddingRight: 15
    },
    small: {
      alignItems: "center",
      justifyContent: "center",
      height: 30
    },
    large: {
      alignItems: "center",
      justifyContent: "center",
      height: 50
    },
    outlineBtn: {
      backgroundColor: "#fff"
    },
    noBorder: {
      borderWidth: 0
    },
    changedOpacity: {
      opacity: 0.5
    }
  });
  Button.propTypes = {
    title: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    outline: PropTypes.bool,
    gradient: PropTypes.oneOfType(PropTypes.string, PropTypes.array),
    start: PropTypes.object,
    end: PropTypes.object,
    onPress: PropTypes.func,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    noShadow: PropTypes.bool
  };
  Button.defaultProps = {
    title: "",
    size: "",
    color: basicColors[0].color,
    outline: false,
    gradient: "",
    start: {
      x: 0,
      y: 0
    },
    end: {
      x: 1,
      y: 0
    },
    disabled: false,
    noShadow: false
  };

  var ButtonGroup = function ButtonGroup(props) {
    var direction = props.direction,
        alignSelf = props.alignSelf,
        buttons = props.buttons,
        justify = props.justify,
        alignItem = props.alignItem,
        children = props.children,
        attributes = _objectWithoutPropertiesLoose(props, ["direction", "alignSelf", "buttons", "justify", "alignItem", "children"]);

    var isDirection = direction ? direction : "row";
    var isAlignSelf = alignSelf ? alignSelf : "center";
    var isJustify = justify ? justify : "flex-start";
    var isAlignItem = alignItem ? alignItem : "flex-start";
    var mapButton = buttons.map(function (e, i) {
      return React__default.createElement(Button, _extends({
        style: styles.button,
        key: i,
        title: e.text,
        size: e.size,
        color: e.color,
        disabled: e.disabled,
        gradient: e.gradient
      }, attributes), children);
    });
    return React__default.createElement(reactNative.View, {
      style: {
        display: "flex",
        flexDirection: isDirection,
        alignSelf: isAlignSelf,
        justifyContent: isJustify,
        alignItems: isAlignItem,
        width: "100%"
      }
    }, mapButton);
  };

  var styles = reactNative.StyleSheet.create({
    button: {
      margin: 0
    }
  });
  ButtonGroup.propTypes = {
    direction: PropTypes.string.isRequired,
    alignSelf: PropTypes.string.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      size: PropTypes.string,
      color: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired
    })).isRequired
  };
  ButtonGroup.defaultProps = {
    direction: "row",
    alignSelf: "center",
    buttons: [{
      text: "MDB RN",
      color: "primary",
      size: "",
      disabled: false,
      gradient: null
    }, {
      text: "MDB RN",
      color: "primary",
      size: "",
      disabled: false,
      gradient: null
    }, {
      text: "MDB RN",
      color: "primary",
      size: "",
      disabled: false,
      gradient: null
    }]
  };

  var Card = function Card(_ref) {
    var children = _ref.children;
    return React__default.createElement(reactNative.View, {
      style: styles$1.card
    }, children);
  };

  var styles$1 = reactNative.StyleSheet.create({
    card: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fff",
      borderRadius: 4,
      borderColor: "#efefef",
      borderStyle: "solid",
      borderWidth: 1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      margin: 8
    }
  });

  var MDBCardBody = function MDBCardBody(props) {
    return React__default.createElement(reactNative.View, {
      style: styles$2.cardBody
    }, props.children);
  };

  var styles$2 = reactNative.StyleSheet.create({
    cardBody: {
      padding: 18
    }
  });

  var MDBCardFooter = function MDBCardFooter(props) {
    var align = props.align;
    var computedStyles = {
      textAlign: align === 'right' ? align : 'left'
    };
    return React__default.createElement(reactNative.View, {
      style: _extends({}, styles$3.cardFooter, {}, computedStyles)
    }, props.children);
  };

  var styles$3 = reactNative.StyleSheet.create({
    cardFooter: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 10
    }
  });

  var MDBCardImgTop = function MDBCardImgTop(props) {
    return React__default.createElement(reactNative.Image, {
      source: {
        uri: props.src
      }
    }, props.children);
  };

  var styles$4 = reactNative.StyleSheet.create({// cardImgTop: {
    //   flex: 1
    // }
  });

  var MDBCardLink = function MDBCardLink(props) {
    return React__default.createElement(reactNative.TouchableOpacity, {
      style: styles$5.cardLink
    }, React__default.createElement(reactNative.Text, {
      style: styles$5.cardLinkText
    }, props.children));
  };

  var styles$5 = reactNative.StyleSheet.create({
    cardLink: {
      marginRight: 12
    },
    cardLinkText: {
      color: '#000'
    }
  });

  var MDBCardText = function MDBCardText(props) {
    return React__default.createElement(reactNative.Text, {
      style: styles$6.cardText
    }, props.children);
  };

  var styles$6 = reactNative.StyleSheet.create({
    cardText: {
      fontSize: 14.4,
      color: '#747373',
      marginBottom: 16
    }
  });

  var MDBCardTitle = function MDBCardTitle(_ref) {
    var children = _ref.children,
        style = _ref.style,
        attributes = _objectWithoutPropertiesLoose(_ref, ["children", "style"]);

    return React__default.createElement(reactNative.Text, _extends({
      style: reactNative.StyleSheet.flatten([styles$7.cardTitle, style])
    }, attributes), children);
  };

  var styles$7 = reactNative.StyleSheet.create({
    cardTitle: {
      fontSize: 20,
      color: '#212529',
      marginBottom: 12
    }
  });

  var MDBImage =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MDBImage, _Component);

    function MDBImage() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "state", {
        arr: []
      });

      return _this;
    }

    var _proto = MDBImage.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this2 = this;

      this.setState(function (prev) {
        return {
          arr: [].concat(prev.arr, [_this2.props.styleName ? _this2.props.styleName : 'featured'])
        };
      });
    };

    _proto.render = function render() {
      var _this$props = this.props,
          style = _this$props.style,
          styleName = _this$props.styleName,
          attributies = _objectWithoutPropertiesLoose(_this$props, ["style", "styleName"]);

      return React__default.createElement(reactNative.View, null, React__default.createElement(reactNative.Image, _extends({
        style: [dynamicStyles(this.state.arr, imgStyles), style],
        styleName: styleName
      }, attributies)));
    };

    return MDBImage;
  }(React.Component);
  var imgStyles = reactNative.StyleSheet.create({
    featured: {
      width: 365 / 375 * screenWidth,
      height: 345 / 375 * screenWidth
    },
    cardTop: {
      width: 365 / 375 * screenWidth - 8,
      height: 345 / 375 * screenWidth - 8
    },
    small: {
      width: 65,
      height: 65
    },
    large: {
      width: screenWidth,
      height: 280 / 375 * screenWidth
    },
    largePortrait: {
      width: screenWidth,
      height: 280 / 375 * screenWidth
    },
    largeBanner: {
      width: screenWidth,
      height: 200 / 375 * screenWidth
    },
    largeSquare: {
      width: screenWidth,
      height: window.height
    },
    largeWide: {
      width: screenWidth,
      height: 238 / 375 * screenWidth
    },
    largeUltraWide: {
      width: screenWidth,
      height: 130 / 375 * screenWidth
    },
    mediumAvatar: {
      borderRadius: 72.5
    },
    medium: {
      width: 145,
      height: 92
    },
    mediumWide: {
      width: 180 / 375,
      height: screenWidth * 85
    },
    mediumPortrait: {
      width: 209 / 375,
      height: 139
    },
    smallAvatar: {
      width: 25,
      height: 25,
      borderRadius: 100
    }
  });

  var MDBCarousel =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MDBCarousel, _Component);

    function MDBCarousel() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "scrollRef", React__default.createRef());

      _defineProperty(_assertThisInitialized(_this), "state", {
        selectedIndex: 0
      });

      _defineProperty(_assertThisInitialized(_this), "setSelectedIndex", function (e) {
        var viewSize = e.nativeEvent.layoutMeasurement.width;
        var contentOffset = e.nativeEvent.contentOffset.x;
        var selectedIndex = Math.floor(contentOffset / viewSize);

        _this.setState({
          selectedIndex: selectedIndex
        });
      });

      return _this;
    }

    var _proto = MDBCarousel.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          auto = _this$props.auto,
          interval = _this$props.interval,
          images = _this$props.images;

      if (auto) {
        setInterval(function () {
          _this2.setState(function (prev) {
            return {
              selectedIndex: prev.selectedIndex === images.length - 1 ? 0 : prev.selectedIndex + 1
            };
          }, function () {
            _this2.scrollRef.current.scrollTo({
              animated: true,
              y: 0,
              x: screenWidth * _this2.state.selectedIndex
            });
          });
        }, interval ? interval : 3000);
      }
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
          images = _this$props2.images,
          imgStyle = _this$props2.imgStyle,
          fullBackground = _this$props2.fullBackground,
          auto = _this$props2.auto;
      var selectedIndex = this.state.selectedIndex;
      var mapImg = images.map(function (e, i) {
        return React__default.createElement(MDBImage, {
          key: i,
          source: {
            uri: e
          },
          style: fullBackground ? styles$8.backgroundImage : imgStyle ? imgStyle : {
            width: screenWidth
          }
        });
      });
      var mapIndex = images.map(function (e, i) {
        return React__default.createElement(reactNative.View, {
          key: i,
          style: [styles$8.whiteCircle, {
            opacity: i === selectedIndex ? 0.5 : 1
          }],
          active: i === selectedIndex
        });
      });
      return React__default.createElement(reactNative.View, {
        style: {
          height: '100%',
          width: '100%'
        },
        pointerEvents: auto ? 'none' : 'auto'
      }, React__default.createElement(reactNative.ScrollView, {
        horizontal: true,
        pagingEnabled: true,
        onMomentumScrollEnd: this.setSelectedIndex,
        ref: this.scrollRef
      }, mapImg), React__default.createElement(reactNative.View, {
        style: [styles$8.circleDiv]
      }, mapIndex));
    };

    return MDBCarousel;
  }(React.Component);
  var styles$8 = reactNative.StyleSheet.create({
    backgroundImage: {
      flex: 1,
      height: screenHeight,
      width: screenWidth
    },
    circleDiv: {
      position: 'absolute',
      bottom: 20,
      height: 10,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    whiteCircle: {
      width: 6,
      height: 6,
      borderRadius: 3,
      margin: 5,
      backgroundColor: '#fff'
    }
  });
  MDBCarousel.propTypes = {
    images: PropTypes.array,
    fullBackground: PropTypes.bool,
    auto: PropTypes.bool
  };
  MDBCarousel.defaultProps = {
    fullBackground: false,
    auto: true
  };

  fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas, freeBrandsSvgIcons.fab, freeRegularSvgIcons.far);

  var Icon = function Icon(props) {
    var attributes = _extends({}, props);

    return React__default.createElement(reactNative.View, null, React__default.createElement(reactNativeFontawesome.FontAwesomeIcon, attributes));
  };

  Icon.propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    size: PropTypes.number,
    color: PropTypes.string
  };

  var MDBCheckbox =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MDBCheckbox, _Component);

    function MDBCheckbox() {
      var _this2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this2 = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this2), "state", {
        checked: null
      });

      _defineProperty(_assertThisInitialized(_this2), "getSelectedItems", function () {
        var selectedArrayObject = _this2.props.selectedArrayObject;

        if (selectedArrayObject.getArray().length == 0) ; else {
          _this2.setState(function () {
            return {
              selectedItems: selectedArrayObject.getArray().map(function (item) {
                return item.value;
              }).join()
            };
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this2), "toggleState", function (key, label, value) {
        var selectedArrayObject = _this2.props.selectedArrayObject;
        var checked = _this2.state.checked;

        _this2.setState({
          checked: !checked
        }, function () {
          if (checked) {
            selectedArrayObject.pushItem({
              key: key,
              label: label,
              value: value
            });
          } else {
            selectedArrayObject.getArray().splice(selectedArrayObject.getArray().findIndex(function (x) {
              return x.key == key;
            }), 1);
          }
        });
      });

      return _this2;
    }

    var _proto = MDBCheckbox.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this$props = this.props,
          checked = _this$props.checked,
          selectedArrayObject = _this$props.selectedArrayObject,
          keyValue = _this$props.keyValue,
          label = _this$props.label,
          value = _this$props.value;

      if (checked) {
        this.setState({
          checked: true
        }, function () {
          selectedArrayObject.pushItem({
            key: keyValue,
            label: label,
            value: value
          });
        });
      } else {
        this.setState({
          checked: false
        });
      }
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
          keyValue = _this$props2.keyValue,
          label = _this$props2.label,
          labelColor = _this$props2.labelColor,
          value = _this$props2.value,
          size = _this$props2.size,
          color = _this$props2.color,
          rounded = _this$props2.rounded,
          icon = _this$props2.icon,
          iconColor = _this$props2.iconColor,
          attributes = _objectWithoutPropertiesLoose(_this$props2, ["keyValue", "label", "labelColor", "value", "size", "color", "rounded", "icon", "iconColor"]);

      return React__default.createElement(reactNative.View, {
        style: styles$9.MainContainer
      }, React__default.createElement(reactNative.TouchableHighlight, _extends({}, attributes, {
        onPress: this.toggleState,
        underlayColor: "transparent",
        style: {
          marginVertical: 10
        }
      }), React__default.createElement(reactNative.View, {
        style: {
          flexDirection: 'row',
          alignItems: 'center'
        }
      }, React__default.createElement(reactNative.View, {
        style: reactNative.StyleSheet.flatten([{
          width: size,
          height: size,
          borderRadius: rounded ? 100 : 0,
          padding: 3
        }, scs(color, basicColors, true, ['backgroundColor'])])
      }, this.state.checked ? React__default.createElement(reactNative.View, {
        style: styles$9.checkedView
      }, React__default.createElement(Icon, {
        icon: icon,
        style: styles$9.checkBoxImage,
        color: iconColor
      })) : React__default.createElement(reactNative.View, {
        style: [styles$9.uncheckedView, {
          borderRadius: rounded ? 100 : 0
        }]
      })), React__default.createElement(reactNative.Text, {
        style: reactNative.StyleSheet.flatten([styles$9.checkBoxLabelText, scs(labelColor, basicColors, true, ['color'])])
      }, label))));
    };

    return MDBCheckbox;
  }(React.Component);
  var styles$9 = reactNative.StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    selectedItemsButton: {
      marginTop: 25,
      padding: 8,
      backgroundColor: '#2962FF',
      alignSelf: 'stretch'
    },
    selectedItemsButton_Text: {
      color: 'white',
      textAlign: 'center',
      alignSelf: 'stretch',
      fontSize: 18
    },
    checkedView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    checkBoxImage: {
      height: '80%',
      width: '80%',
      tintColor: 'white',
      resizeMode: 'contain'
    },
    uncheckedView: {
      flex: 1,
      backgroundColor: 'white'
    },
    checkBoxLabelText: {
      fontSize: 16,
      paddingLeft: 10
    }
  });
  MDBCheckbox.propTypes = {
    size: PropTypes.number,
    keyValue: PropTypes.number.isRequired,
    selectedArrayObject: PropTypes.object.isRequired,
    color: PropTypes.string,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    iconColor: PropTypes.string
  };
  MDBCheckbox.defaultProps = {
    size: 25,
    color: basicColors[0].color,
    labelColor: 'transparent',
    label: ' ',
    checked: false,
    value: 'default',
    icon: 'check',
    iconColor: '#fff'
  };

  var MDBCollapse =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MDBCollapse, _Component);

    function MDBCollapse(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _defineProperty(_assertThisInitialized(_this), "changeLayout", function () {
        reactNative.LayoutAnimation.configureNext(reactNative.LayoutAnimation.Presets.easeInEaseOut);

        _this.setState({
          expanded: !_this.state.expanded
        });
      });

      _this.state = {
        expanded: false
      };

      if (reactNative.Platform.OS === 'android') {
        reactNative.UIManager.setLayoutAnimationEnabledExperimental(true);
      }

      return _this;
    }

    var _proto = MDBCollapse.prototype;

    _proto.render = function render() {
      return React__default.createElement(React__default.Fragment, null, React__default.createElement(Button, {
        title: this.props.btnTitle,
        onPressed: this.changeLayout
      }), React__default.createElement(reactNative.View, {
        style: {
          height: this.state.expanded ? null : 0,
          overflow: 'hidden',
          padding: 10,
          paddingTop: 0,
          paddingBottom: 0
        }
      }, React__default.createElement(reactNative.Text, null, this.props.children)));
    };

    return MDBCollapse;
  }(React.Component);

  var MDBContainer = function MDBContainer(props) {
    var style = props.style;
    return React__default.createElement(reactNative.View, {
      style: _extends({}, styles$a.container, {}, style)
    }, props.children);
  };

  var styles$a = reactNative.StyleSheet.create({
    container: {
      paddingLeft: 16,
      paddingRight: 16
    }
  });

  var primary = '#4285f4';
  var secondary = '#aa66cc';
  var defaultColor = '#2bbbad';
  var danger = '#ff4444';
  var warning = '#ffbb33';
  var success = '#00C851';
  var info = '#33b5e5';
  var dark = '#000';
  var light = '#fff';

  var Colors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    primary: primary,
    secondary: secondary,
    defaultColor: defaultColor,
    danger: danger,
    warning: warning,
    success: success,
    info: info,
    dark: dark,
    light: light
  });

  var MDBFooter = function MDBFooter(props) {
    var color = props.color;
    var computedStyles = {
      backgroundColor: color ? Colors[color] : primary
    };
    return React__default.createElement(reactNative.View, {
      style: _extends({}, styles$b.footer, {}, computedStyles)
    }, props.children);
  };

  var styles$b = reactNative.StyleSheet.create({
    footer: {
      paddingTop: 15,
      marginTop: 10
    }
  });

  var MDBFooterCopyright = function MDBFooterCopyright(_ref) {
    var children = _ref.children,
        style = _ref.style,
        color = _ref.color,
        textColor = _ref.textColor,
        attributes = _objectWithoutPropertiesLoose(_ref, ["children", "style", "color", "textColor"]);

    return React__default.createElement(reactNative.View, _extends({
      style: reactNative.StyleSheet.flatten([_extends({}, styles$c.copyright), style, scs(color, basicColors, true, ['backgroundColor', 'borderColor'])])
    }, attributes), React__default.createElement(reactNative.Text, {
      style: reactNative.StyleSheet.flatten([styles$c.copyrightText, scs(textColor ? textColor : 'light', basicColors, true, ['color', 'borderColor'])])
    }, children));
  };

  var styles$c = reactNative.StyleSheet.create({
    copyright: {
      backgroundColor: 'rgba(0, 0, 0, .2)',
      padding: 16,
      width: '100%'
    },
    copyrightText: {
      color: 'rgba(255, 255, 255, .6)',
      textAlign: 'center'
    }
  });

  var MDBImageOverlay = function MDBImageOverlay(_ref) {
    var icon = _ref.icon,
        title = _ref.title,
        titleColor = _ref.titleColor,
        description = _ref.description,
        btnColor = _ref.btnColor,
        imgBGsrc = _ref.imgBGsrc,
        onPressed = _ref.onPressed,
        attributes = _objectWithoutPropertiesLoose(_ref, ["icon", "title", "titleColor", "description", "btnColor", "imgBGsrc", "onPressed"]);

    return React__default.createElement(reactNative.ImageBackground, {
      style: reactNative.StyleSheet.flatten([{
        width: screenWidth - 30,
        marginTop: 10,
        marginBottom: 10,
        height: 200,
        position: 'relative',
        zIndex: 1,
        borderRadius: 100
      }, {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 5,
        borderRadius: 100
      }]),
      source: {
        uri: imgBGsrc
      }
    }, React__default.createElement(reactNative.View, {
      style: reactNative.StyleSheet.flatten([{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 100
      }])
    }, React__default.createElement(reactNative.View, {
      style: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 3
      }
    }, React__default.createElement(reactNative.View, {
      style: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
      }
    }, icon, React__default.createElement(reactNative.Text, {
      style: {
        color: titleColor,
        fontSize: 32,
        marginLeft: 8,
        fontWeight: 'bold'
      }
    }, title)), React__default.createElement(reactNative.Text, {
      style: {
        color: '#fff',
        textAlign: 'center',
        padding: 10
      }
    }, description, ' ')), React__default.createElement(Button, {
      color: btnColor,
      title: "More",
      style: {
        zIndex: 3
      },
      onPressed: onPressed
    })), React__default.createElement(reactNative.View, {
      style: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000',
        opacity: 0.7,
        zIndex: 2
      }
    }));
  };

  var MDBLabel =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MDBLabel, _Component);

    function MDBLabel() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "state", {
        animatedScale: new reactNative.Animated.Value(_this.props.hasValue || _this.props.focused ? _this.props.labelActiveScale : 1),
        animatedTranslate: new reactNative.Animated.Value(_this.props.hasValue || _this.props.focused ? _this.props.labelActiveTop : 0)
      });

      _defineProperty(_assertThisInitialized(_this), "checkLabelColor", function () {
        var _this$props = _this.props,
            error = _this$props.error,
            focused = _this$props.focused,
            errorColor = _this$props.errorColor,
            labelActiveColor = _this$props.labelActiveColor,
            activeColor = _this$props.activeColor;

        if (error) {
          return errorColor;
        } else if (focused) {
          return labelActiveColor || activeColor || basicColors[0].color;
        } else {
          return 'grey';
        }
      });

      return _this;
    }

    var _proto = MDBLabel.prototype;

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          labelDuration = _this$props2.labelDuration,
          labelActiveScale = _this$props2.labelActiveScale,
          labelActiveTop = _this$props2.labelActiveTop,
          hasValue = _this$props2.hasValue,
          focused = _this$props2.focused;
      var _this$state = this.state,
          animatedScale = _this$state.animatedScale,
          animatedTranslate = _this$state.animatedTranslate;
      var wasActive = prevProps.hasValue || prevProps.focused;
      var isActive = hasValue || focused;

      if (wasActive === isActive) {
        return;
      }

      reactNative.Animated.timing(animatedScale, {
        duration: labelDuration,
        toValue: isActive ? labelActiveScale : 1,
        useNativeDriver: true
      }).start();
      reactNative.Animated.timing(animatedTranslate, {
        duration: labelDuration,
        toValue: isActive ? labelActiveTop : 0,
        useNativeDriver: true
      }).start();
    };

    _proto.render = function render() {
      var _this$state2 = this.state,
          animatedScale = _this$state2.animatedScale,
          animatedTranslate = _this$state2.animatedTranslate;
      var label = this.props.label;
      var animateInput = {
        transform: [{
          translateY: animatedTranslate
        }, {
          scaleY: animatedScale
        }]
      };
      return React__default.createElement(reactNative.Animated.View, {
        numberOfLines: 1,
        style: animateInput
      }, React__default.createElement(reactNative.Text, {
        style: {
          paddingLeft: 1,
          top: 20,
          color: this.checkLabelColor()
        }
      }, label));
    };

    return MDBLabel;
  }(React.Component);

  _defineProperty(MDBLabel, "defaultProps", {
    labelActiveScale: 0.8,
    labelActiveTop: -15,
    labelColor: 'grey',
    labelDuration: 200
  });

  var propTypes = {
    label: PropTypes.string,
    labelActiveColor: PropTypes.string,
    labelActiveScale: PropTypes.number,
    labelActiveTop: PropTypes.number,
    labelColor: PropTypes.string,
    labelDuration: PropTypes.number,
    activeColor: PropTypes.string,
    error: PropTypes.string,
    errorColor: PropTypes.string,
    focused: PropTypes.bool,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.string,
    hasValue: PropTypes.bool,
    paddingBottom: PropTypes.number,
    paddingLeft: PropTypes.number,
    paddingRight: PropTypes.number,
    paddingTop: PropTypes.number
  };
  var pickLabelProps = function pickLabelProps(props) {
    return pick(props, Object.keys(propTypes));
  };

  var propTypes$1 = {
    underlineActiveColor: PropTypes.string,
    underlineActiveHeight: PropTypes.number,
    underlineColor: PropTypes.string,
    underlineDuration: PropTypes.number,
    underlineHeight: PropTypes.number,
    activeColor: PropTypes.string,
    error: PropTypes.string,
    errorColor: PropTypes.string,
    focused: PropTypes.bool
  };
  var defaultProps = {
    underlineActiveHeight: 1,
    underlineColor: 'grey',
    underlineDuration: 2000,
    underlineHeight: 1
  };
  var pickUnderlineProps = function pickUnderlineProps(props) {
    return pick(props, Object.keys(propTypes$1));
  };

  var MDBUnderline =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(MDBUnderline, _React$Component);

    function MDBUnderline() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "state", {
        animatedOpacity: new reactNative.Animated.Value(_this.props.error ? 1 : 0),
        animatedScaleX: new reactNative.Animated.Value(_this.props.error ? 1 : 0.01)
      });

      return _this;
    }

    var _proto = MDBUnderline.prototype;

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          error = _this$props.error,
          focused = _this$props.focused;

      if (prevProps.focused !== focused || prevProps.error !== error) {
        focused || error ? this.animateActive() : this.animateDefault();
      }
    };

    _proto.animateActive = function animateActive() {
      reactNative.Animated.parallel([reactNative.Animated.timing(this.state.animatedOpacity, {
        duration: 0,
        toValue: 1,
        useNativeDriver: true
      }), reactNative.Animated.timing(this.state.animatedScaleX, {
        duration: this.props.underlineDuration,
        toValue: 1,
        useNativeDriver: true
      })]).start();
    };

    _proto.animateDefault = function animateDefault() {
      reactNative.Animated.sequence([reactNative.Animated.timing(this.state.animatedScaleX, {
        duration: this.props.underlineDuration,
        toValue: 1,
        useNativeDriver: true
      }), reactNative.Animated.timing(this.state.animatedOpacity, {
        duration: 0,
        toValue: 0,
        useNativeDriver: true
      })]).start();
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
          error = _this$props2.error,
          errorColor = _this$props2.errorColor,
          underlineColor = _this$props2.underlineColor,
          underlineActiveColor = _this$props2.underlineActiveColor,
          activeColor = _this$props2.activeColor,
          underlineActiveHeight = _this$props2.underlineActiveHeight,
          underlineHeight = _this$props2.underlineHeight,
          animatedOpacity = _this$props2.animatedOpacity,
          focused = _this$props2.focused;
      var underLine = {
        borderColor: error && errorColor || underlineActiveColor || activeColor || basicColors[0].color,
        borderTopWidth: underlineActiveHeight,
        marginTop: -underlineHeight,
        opacity: animatedOpacity
      };
      return React__default.createElement(reactNative.View, {
        style: {
          borderColor: underlineColor,
          borderTopWidth: underlineHeight
        }
      }, React__default.createElement(reactNative.Animated.View, {
        style: focused ? underLine : null
      }));
    };

    return MDBUnderline;
  }(React__default.Component);

  _defineProperty(MDBUnderline, "propTypes", propTypes$1);

  _defineProperty(MDBUnderline, "defaultProps", defaultProps);

  var propTypes$2 = {
    accessibilityLabel: PropTypes.string,
    activeColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.number,
    icon: PropTypes.any,
    iconOverlay: PropTypes.any,
    labelSpacingTop: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    marginTop: PropTypes.number,
    maxHeight: PropTypes.number,
    minHeight: PropTypes.number,
    onBlur: PropTypes.func,
    onChangeText: PropTypes.func,
    onContentSizeChange: PropTypes.func,
    onFocus: PropTypes.func,
    onLayout: PropTypes.func,
    paddingBottom: PropTypes.number,
    paddingLeft: PropTypes.number,
    paddingRight: PropTypes.number,
    paddingTop: PropTypes.number,
    register: PropTypes.func.isRequired,
    style: PropTypes.node,
    textAlign: PropTypes.string
  };
  var defaultProps$1 = {
    accessible: true,
    style: {},
    color: "black",
    fontSize: 15,
    fontWeight: "normal",
    labelSpacingTop: 8 * 2,
    marginBottom: 8,
    marginTop: 0,
    onBlur: function onBlur() {},
    onChangeText: function onChangeText() {},
    onContentSizeChange: function onContentSizeChange() {},
    onFocus: function onFocus() {},
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 8 / 2,
    register: function register() {},
    textAlign: "left",
    value: undefined
  };
  var pickTextInputProps = function pickTextInputProps(props) {
    return pick(props, Object.keys(reactNative.TextInput.propTypes));
  };

  var SCALE_FACTOR = 1.5;
  var row = {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden"
  };
  var container = function container(props) {
    var _props$marginTop = props.marginTop,
        marginTop = _props$marginTop === void 0 ? 0 : _props$marginTop,
        _props$labelSpacingTo = props.labelSpacingTop,
        labelSpacingTop = _props$labelSpacingTo === void 0 ? 0 : _props$labelSpacingTo;
    return {
      alignSelf: "flex-start",
      marginBottom: props.marginBottom,
      marginLeft: props.marginLeft,
      marginRight: props.marginRight,
      marginTop: marginTop + (props.label ? labelSpacingTop : 0),
      flex: 1
    };
  };
  var input = function input(props, stateHeight, hasValue) {
    if (props === void 0) {
      props = {};
    }

    var autogrowHeight = props.multiline && props.height ? props.height : stateHeight;
    var multilineHeight = props.multiline ? autogrowHeight : props.fontSize * SCALE_FACTOR;
    var height = props.paddingTop + props.paddingBottom + multilineHeight;
    var styles = pick(props, ["color", "fontFamily", "fontSize", "fontWeight", "maxHeight", "minHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "textAlign"]);
    return _extends({}, styles, {
      color: hasValue ? styles.color : "black"
    }, reactNative.Platform.select({
      ios: {
        height: height
      },
      android: {
        height: height,
        textAlignVertical: "top"
      }
    }));
  };

  var MDBErrorMessage = function MDBErrorMessage(props) {
    var errorMessage = props.errorMessage,
        errorStyle = props.errorStyle;
    return React__default.createElement(reactNative.View, null, !!errorMessage && React__default.createElement(reactNative.Text, {
      style: reactNative.StyleSheet.flatten([styles$d.error, {
        color: basicColors[3].color
      }, !!errorStyle ? errorStyle : null])
    }, errorMessage));
  };

  var styles$d = {
    error: {
      margin: 5,
      fontSize: 12,
      color: 'red'
    }
  };

  var MDBInput =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MDBInput, _Component);

    function MDBInput() {
      var _this;

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(_args)) || this;

      _defineProperty(_assertThisInitialized(_this), "state", {
        focused: false,
        height: _this.props.fontSize * SCALE_FACTOR,
        rootStyle: row,
        value: _this.props.value != null ? _this.props.value : _this.props.defaultValue
      });

      _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
        var _this$props;

        _this.setState({
          focused: true
        });

        (_this$props = _this.props).onFocus.apply(_this$props, arguments);
      });

      _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
        var _this$props2;

        _this.setState({
          focused: false
        });

        (_this$props2 = _this.props).onBlur.apply(_this$props2, arguments);
      });

      _defineProperty(_assertThisInitialized(_this), "getValue", function () {
        return _this.isValueLocked() ? _this.props.value : _this.state.value;
      });

      _defineProperty(_assertThisInitialized(_this), "setValue", function (value) {
        var _this$props3;

        if (!_this.isValueLocked()) {
          _this.setState({
            value: value
          });
        }

        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        (_this$props3 = _this.props).onChangeText.apply(_this$props3, [value].concat(args));
      });

      _defineProperty(_assertThisInitialized(_this), "handleContentSizeChange", function (event) {
        var _this$props4 = _this.props,
            onContentSizeChange = _this$props4.onContentSizeChange,
            fontSize = _this$props4.fontSize;
        var height = event.nativeEvent.contentSize.height;

        _this.setState({
          height: Math.max(fontSize * SCALE_FACTOR, Math.ceil(height))
        });

        onContentSizeChange(event);
      });

      _defineProperty(_assertThisInitialized(_this), "isValueLocked", function () {
        return _this.props.value !== undefined;
      });

      _defineProperty(_assertThisInitialized(_this), "hasValueWithContent", function (value) {
        return typeof value === 'string' && value.length > 0;
      });

      _defineProperty(_assertThisInitialized(_this), "register", function (ref) {
        _this.ref = ref;
        _this.props.register && _this.props.register(ref);
      });

      _defineProperty(_assertThisInitialized(_this), "focus", function () {
        return _this.ref && _this.ref.focus();
      });

      return _this;
    }

    var _proto = MDBInput.prototype;

    _proto.render = function render() {
      var focused = this.state.focused;
      var value = this.getValue();
      var hasValue = this.hasValueWithContent(value);
      return React__default.createElement(reactNative.View, {
        onLayout: this.props.onLayout,
        style: [this.state.rootStyle, this.props.style]
      }, React__default.createElement(reactNative.View, {
        style: container(this.props)
      }, React__default.createElement(reactNative.View, {
        accessible: this.props.accessible,
        accessibilityLabel: this.props.accessibilityLabel || this.props.label,
        style: {
          backgroundColor: this.props.backgroundColor
        }
      }, React__default.createElement(MDBLabel, pickLabelProps(_extends({}, this.props, {
        hasValue: hasValue,
        focused: focused
      }))), React__default.createElement(reactNative.TextInput, _extends({}, pickTextInputProps(this.props), {
        onBlur: this.handleBlur,
        onChangeText: this.setValue,
        onContentSizeChange: this.handleContentSizeChange,
        onFocus: this.handleFocus,
        placeholder: undefined,
        ref: this.register,
        style: input(this.props, this.state.height, hasValue),
        underlineColorAndroid: "transparent",
        value: value
      }))), React__default.createElement(MDBUnderline, pickUnderlineProps(_extends({}, this.props, {
        focused: focused
      }))), React__default.createElement(MDBErrorMessage, {
        errorMessage: this.props.errorMessage,
        errorStyle: this.props.errorStyle
      })));
    };

    return MDBInput;
  }(React.Component);

  _defineProperty(MDBInput, "propTypes", _extends({}, propTypes$2, {}, reactNative.TextInput.propTypes));

  _defineProperty(MDBInput, "defaultProps", defaultProps$1);

  var primary$1 = 'rgba(3, 169, 244, 0.1)';
  var secondary$1 = 'rgba(156, 39, 176, 0.1)';
  var defaultColor$1 = 'rgba(0, 188, 212, 0.1)';
  var danger$1 = 'rgba(244, 67, 54, 0.1)';
  var warning$1 = 'rgba(255, 152, 0, 0.1) ';
  var success$1 = '#rgba(76, 175, 80, 0.1)';
  var info$1 = 'rgba(0, 188, 212, 0.1)';
  var dark$1 = 'rgba(0, 0, 0, 0.1)';
  var light$1 = 'rgba(96, 125, 139, 0.1)';

  var SuperLightenColors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    primary: primary$1,
    secondary: secondary$1,
    defaultColor: defaultColor$1,
    danger: danger$1,
    warning: warning$1,
    success: success$1,
    info: info$1,
    dark: dark$1,
    light: light$1
  });

  var primary$2 = 'rgba(3, 169, 244, 0.3)';
  var secondary$2 = 'rgba(156, 39, 176, 0.3)';
  var defaultColor$2 = 'rgba(0, 188, 212, 0.3)';
  var danger$2 = 'rgba(244, 67, 54, 0.3)';
  var warning$2 = 'rgba(255, 152, 0, 0.3) ';
  var success$2 = '#rgba(76, 175, 80, 0.3)';
  var info$2 = 'rgba(0, 188, 212, 0.3)';
  var dark$2 = 'rgba(0, 0, 0, 0.3)';
  var light$2 = 'rgba(96, 125, 139, 0.3)';

  var LightenColors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    primary: primary$2,
    secondary: secondary$2,
    defaultColor: defaultColor$2,
    danger: danger$2,
    warning: warning$2,
    success: success$2,
    info: info$2,
    dark: dark$2,
    light: light$2
  });

  var primary$3 = 'rgba(3, 169, 244, 0.7)';
  var secondary$3 = 'rgba(156, 39, 176, 0.7)';
  var defaultColor$3 = 'rgba(0, 188, 212, 0.7)';
  var danger$3 = 'rgba(244, 67, 54, 0.7)';
  var warning$3 = 'rgba(255, 152, 0, 0.7) ';
  var success$3 = '#rgba(76, 175, 80, 0.7)';
  var info$3 = 'rgba(0, 188, 212, 0.7)';
  var dark$3 = 'rgba(0, 0, 0, 0.7)';
  var light$3 = 'rgba(96, 125, 139, 0.7)';

  var StrongColors = /*#__PURE__*/Object.freeze({
    __proto__: null,
    primary: primary$3,
    secondary: secondary$3,
    defaultColor: defaultColor$3,
    danger: danger$3,
    warning: warning$3,
    success: success$3,
    info: info$3,
    dark: dark$3,
    light: light$3
  });

  var MDBMask =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MDBMask, _Component);

    function MDBMask() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = MDBMask.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          light = _this$props.light,
          pattern = _this$props.pattern,
          resizeMethod = _this$props.resizeMethod,
          resizeMode = _this$props.resizeMode,
          slight = _this$props.slight,
          source = _this$props.source,
          style = _this$props.style,
          overlay = _this$props.overlay;
      var size = reactNative.Image.resolveAssetSource(this.props.source);
      return React__default.createElement(reactNative.View, {
        style: _extends({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          position: 'relative',
          overflow: 'hidden'
        }, style)
      }, React__default.createElement(reactNative.Image, {
        source: source,
        style: {
          width: '100%',
          aspectRatio: size.width / size.height
        }
      }), React__default.createElement(reactNative.ImageBackground, {
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: slight ? SuperLightenColors[overlay] : light ? LightenColors[overlay] : StrongColors[overlay]
        },
        source: pattern,
        resizeMode: "repeat"
      }, children));
    };

    return MDBMask;
  }(React.Component);
  MDBMask.propTypes = {
    light: PropTypes.bool,
    slight: PropTypes.bool,
    resizeMethod: PropTypes.string,
    resizeMode: PropTypes.string,
    // source: PropTypes.string,
    style: PropTypes.object,
    overlay: PropTypes.string
  };

  var MDBModal =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MDBModal, _Component);

    function MDBModal() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = MDBModal.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          alert = _this$props.alert,
          animationType = _this$props.animationType,
          children = _this$props.children,
          open = _this$props.open,
          onClose = _this$props.onClose;
      var modal = React__default.createElement(reactNative.View, {
        style: {
          marginTop: 22
        }
      }, React__default.createElement(reactNative.Modal, {
        animationType: animationType,
        transparent: false,
        visible: open,
        onRequestClose: function onRequestClose() {
          reactNative.Alert.alert('Modal has been closed.');
        },
        style: {
          position: 'relative'
        }
      }, React__default.createElement(reactNative.View, {
        style: {
          margin: 22
        }
      }, React__default.createElement(reactNative.View, null, children, React__default.createElement(reactNative.TouchableHighlight, {
        style: {
          position: 'absolute',
          right: 0,
          top: 0
        },
        onPress: onClose
      }, React__default.createElement(Button, {
        onPress: onClose,
        color: "transparent",
        textColor: "black",
        noShadow: true
      }, "X"))))));
      return alert ? alert : modal;
    };

    return MDBModal;
  }(React.Component);
  reactNative.Modal.propTypes = {
    animationType: PropTypes.string,
    open: PropTypes.bool,
    onClose: PropTypes.func
  };
  reactNative.Modal.defaultProps = {
    animationType: 'slide',
    open: false,
    onClose: function onClose() {}
  };

  var MDBNavbar = function MDBNavbar(props) {
    var color = props.color,
        iconColor = props.iconColor,
        icon = props.icon,
        iconSize = props.iconSize,
        children = props.children,
        gradient = props.gradient,
        isGradient = props.isGradient,
        style = props.style,
        textColor = props.textColor,
        textFontSize = props.textFontSize,
        attributes = _objectWithoutPropertiesLoose(props, ["color", "iconColor", "icon", "iconSize", "children", "gradient", "isGradient", "style", "textColor", "textFontSize"]);

    var dynamicColor = scs(color, basicColors, true, ['backgroundColor']);
    var dynamicGradient = gradient !== '' ? scs(gradient, gradients, false) : '';

    var navbarContent = function navbarContent() {
      return React__default.createElement(reactNative.View, {
        style: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      }, icon ? React__default.createElement(React__default.Fragment, null, React__default.createElement(reactNative.Text, {
        style: reactNative.StyleSheet.flatten([{
          fontSize: textFontSize,
          color: textColor
        }])
      }, children), React__default.createElement(Icon, {
        color: iconColor,
        icon: icon,
        size: iconSize
      })) : React__default.createElement(reactNative.Text, {
        style: reactNative.StyleSheet.flatten([{
          fontSize: textFontSize,
          color: textColor
        }])
      }, children));
    };

    if (gradient !== '') {
      return React__default.createElement(LinearGradient, {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 1,
          y: 0
        },
        colors: dynamicGradient,
        style: reactNative.StyleSheet.flatten([styles$e.navbar, style])
      }, navbarContent());
    } else {
      return React__default.createElement(reactNative.View, {
        style: reactNative.StyleSheet.flatten([styles$e.navbar, dynamicColor, style])
      }, navbarContent());
    }
  };

  var styles$e = reactNative.StyleSheet.create({
    navbar: {
      paddingTop: 12,
      paddingRight: 14,
      paddingBottom: 12,
      paddingLeft: 14,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.16,
      shadowRadius: 5,
      elevation: 5,
      width: '100%',
      zIndex: 100
    }
  });
  MDBNavbar.propTypes = {
    color: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    children: PropTypes.node,
    gradient: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    isGradient: PropTypes.bool,
    textColor: PropTypes.string,
    textFontSize: PropTypes.number
  };
  MDBNavbar.defaultProps = {
    color: 'primary',
    isGradient: false,
    textColor: '#fff',
    textFontSize: 18,
    gradient: ''
  };

  var MDBNavbarBrand = function MDBNavbarBrand(props) {
    return React__default.createElement(reactNative.TouchableOpacity, {
      style: styles$f.brand
    }, React__default.createElement(reactNative.Text, {
      style: styles$f.brandText
    }, props.children));
  };

  var styles$f = reactNative.StyleSheet.create({
    brand: {
      marginRight: 16
    },
    brandText: {
      color: '#fff',
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: 20
    }
  });

  var MDBRadioButton =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MDBRadioButton, _Component);

    function MDBRadioButton() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "state", {
        value: null
      });

      _defineProperty(_assertThisInitialized(_this), "setActive", function (key) {
        if (_this.state.value === key) !_this.props.require && _this.setState({
          value: null
        });else _this.setState({
          value: key
        });
      });

      return _this;
    }

    var _proto = MDBRadioButton.prototype;

    _proto.render = function render() {
      var _this2 = this;

      var _this$props = this.props,
          options = _this$props.options,
          leftRadio = _this$props.leftRadio,
          color = _this$props.color,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["options", "leftRadio", "color"]);

      var renderButtons = options.map(function (item) {
        var isLeft = leftRadio;
        isLeft ? isLeft = React__default.createElement(reactNative.View, {
          key: item.key,
          style: styles$g.buttonContainer
        }, React__default.createElement(reactNative.TouchableOpacity, _extends({
          style: [styles$g.circle, _this2.state.value === item.key ? scs(color, basicColors, true, ['borderColor']) : null],
          onPress: function onPress() {
            return _this2.setActive(item.key);
          }
        }, attributes), _this2.state.value === item.key && React__default.createElement(reactNative.View, {
          style: [styles$g.checkedCircle, _this2.state.value === item.key ? scs(color, basicColors, true, ['borderColor', 'backgroundColor']) : null]
        })), React__default.createElement(reactNative.Text, {
          style: {
            marginLeft: 5
          }
        }, item.text)) : isLeft = React__default.createElement(reactNative.View, {
          key: item.key,
          style: styles$g.buttonContainer
        }, React__default.createElement(reactNative.Text, {
          style: {
            marginRight: 5
          }
        }, item.text), React__default.createElement(reactNative.TouchableOpacity, _extends({
          style: [styles$g.circle, _this2.state.value === item.key ? scs(color, basicColors, true, ['borderColor']) : null],
          onPress: function onPress() {
            return _this2.setActive(item.key);
          }
        }, attributes), _this2.state.value === item.key && React__default.createElement(reactNative.View, {
          style: [styles$g.checkedCircle, _this2.state.value === item.key ? scs(color, basicColors, true, ['borderColor', 'backgroundColor']) : null]
        })));
        return isLeft;
      });
      return renderButtons;
    };

    return MDBRadioButton;
  }(React.Component);
  var styles$g = {
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30
    },
    circle: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#ACACAC',
      alignItems: 'center',
      justifyContent: 'center'
    },
    checkedCircle: {
      width: 10,
      height: 10,
      borderRadius: 7,
      backgroundColor: '#794F9B',
      borderWidth: 2
    },
    borderDefault: {
      borderColor: basicColors[0].color
    },
    bgDefault: {
      backgroundColor: basicColors[0].color
    }
  };
  MDBRadioButton.propTypes = {
    color: PropTypes.string,
    leftRadio: PropTypes.bool,
    options: PropTypes.array,
    require: PropTypes.bool
  };
  MDBRadioButton.defaultProps = {
    color: basicColors[0].color,
    leftRadio: false,
    options: [{
      key: 'RN',
      text: 'MDB RN'
    }],
    require: false
  };

  var MDBSwitch =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MDBSwitch, _Component);

    function MDBSwitch() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "state", {
        value: false
      });

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
        return _this.setState({
          value: value
        });
      });

      return _this;
    }

    var _proto = MDBSwitch.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.setState({
        value: this.props.checked
      });
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (this.props.checked !== prevProps.checked) {
        this.setState({
          value: this.props.checked
        });
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          checked = _this$props.checked,
          labelLeft = _this$props.labelLeft,
          labelRight = _this$props.labelRight,
          thumbColor = _this$props.thumbColor,
          trackColor = _this$props.trackColor,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["checked", "labelLeft", "labelRight", "thumbColor", "trackColor"]);

      var value = this.state.value;
      var styleTh = thumbColor ? Colors[thumbColor] || thumbColor : defaultColor;
      var styleTrack = trackColor != null ? LightenColors[trackColor] || trackColor : defaultColor$2;
      return React__default.createElement(reactNative.View, _extends({
        style: styles$h.container
      }, attributes), React__default.createElement(reactNative.Text, null, labelLeft), React__default.createElement(reactNative.Switch, {
        value: value,
        onValueChange: this.handleChange,
        thumbColor: value ? styleTh : null,
        trackColor: {
          "true": value ? styleTrack : null,
          "false": null
        }
      }), React__default.createElement(reactNative.Text, null, labelRight));
    };

    return MDBSwitch;
  }(React.Component);
  var styles$h = reactNative.StyleSheet.create({
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row'
    }
  });
  MDBSwitch.propTypes = {
    labelLeft: PropTypes.string,
    labelRight: PropTypes.string
  };
  MDBSwitch.defaultProps = {
    labelLeft: 'Off',
    labelRight: 'On'
  };

  var MDBTooltip =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(MDBTooltip, _Component);

    function MDBTooltip(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        visible: false,
        reference: undefined
      };
      return _this;
    }

    var _proto = MDBTooltip.prototype;

    _proto._onPress = function _onPress(parent, target) {
      this.setState({
        visible: !this.state.visible,
        parent: parent,
        target: target
      });
    };

    _proto.render = function render() {
      var _this2 = this;

      return React__default.createElement(reactNative.View, {
        style: styles$i.container
      }, React__default.createElement(reactNative.View, {
        ref: function ref(parent) {
          _this2.parent = parent;
        },
        style: styles$i.container1
      }, React__default.createElement(Button, {
        title: this.props.btnTitle,
        ref: function ref(target) {
          _this2.target1 = target;
        },
        onPressed: function onPressed() {
          _this2._onPress(_this2.parent, _this2.target1);
        }
      })), React__default.createElement(Tooltips, {
        text: "Long Press Description",
        visible: this.state.visible,
        parent: this.state.parent,
        target: this.state.target,
        autoHide: true,
        clickToHide: true
      }));
    };

    return MDBTooltip;
  }(React.Component);
  var styles$i = reactNative.StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    container1: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

  exports.MDBBadge = Badge;
  exports.MDBButton = Button;
  exports.MDBButtonGroup = ButtonGroup;
  exports.MDBCard = Card;
  exports.MDBCardBody = MDBCardBody;
  exports.MDBCardFooter = MDBCardFooter;
  exports.MDBCardImgTop = MDBCardImgTop;
  exports.MDBCardLink = MDBCardLink;
  exports.MDBCardText = MDBCardText;
  exports.MDBCardTitle = MDBCardTitle;
  exports.MDBCarousel = MDBCarousel;
  exports.MDBCheckbox = MDBCheckbox;
  exports.MDBCollapse = MDBCollapse;
  exports.MDBContainer = MDBContainer;
  exports.MDBFooter = MDBFooter;
  exports.MDBFooterCopyright = MDBFooterCopyright;
  exports.MDBIcon = Icon;
  exports.MDBImage = MDBImage;
  exports.MDBImageOverlay = MDBImageOverlay;
  exports.MDBInput = MDBInput;
  exports.MDBMask = MDBMask;
  exports.MDBModal = MDBModal;
  exports.MDBNavbar = MDBNavbar;
  exports.MDBNavbarBrand = MDBNavbarBrand;
  exports.MDBRadioButton = MDBRadioButton;
  exports.MDBSwitch = MDBSwitch;
  exports.MDBTooltip = MDBTooltip;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
