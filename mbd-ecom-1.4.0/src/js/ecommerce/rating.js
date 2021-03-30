class Rating {
  constructor(rating) {
    this.$rating = $(rating);
    this.$icons = this.$rating.find('i');
    this.index = 0;
    this.savedIndex = null;
    this.originalClassList = [];
    this.isReplacePrevSet = this.$rating.attr('replace-previous-icon');
  }

  init() {
    if (this.isReplacePrevSet) {
      this.saveOriginalClassList();
    }

    this.bindMouseEnter();
    this.bindMouseLeave();
    this.bindIconsOnClick();
    this.setFeedback();
    this.setTooltip();
  }

  bindMouseEnter() {
    this.$rating.on('mouseenter', 'i', (e) => {
      this.index = this.$icons.index(e.target);
      this.updateRating(this.index);
    });
  }
  
  bindMouseLeave() {
    this.$rating.on('mouseleave', () => {
      if (this.savedIndex != null) {
        this.updateRating(this.savedIndex);
      } else {
        this.clearRating();
      }
    });
  }

  bindIconsOnClick() {
    this.$icons.on('mousedown', () => {
      this.savedIndex = this.index;
      this.setDataResult();
    });
  }

  setTooltip() {
    this.$icons.each((index, el) => {
      $(el).attr('data-placement', 'top');
    });
    this.$icons.tooltip();
  }

  saveOriginalClassList() {
    this.$icons.each((index, el) => {
      const classList = this.$icons.get(index).className;
      this.originalClassList.push(classList);
    });
  }

  replacePreviousIcon(index) {
    const classList = this.originalClassList[index];

    this.$icons.each((i, el) => {
      if (i <= index) {
        $(el).attr('class', '');
        $(el).attr('class', classList);
      }
    });
  }

  updateRating(index) {
    this.clearRating();

    if (this.isReplacePrevSet) {
      this.replacePreviousIcon(index);
    }

    for (let i = 0; i <= index; i++) {
      const icon = this.$icons.get(i);
      $(icon).addClass('fas active').removeClass('far');
    }
  }

  clearRating() {
    if (this.isReplacePrevSet) {
      this.$icons.each((i, el) => {
        const classList = this.originalClassList[i];
        $(el).removeClass().addClass(classList);
      });
    } else {
      this.$icons.removeClass('fas active').addClass('far');
    }
  }

  setDataResult() {
    this.$rating.attr('result', this.savedIndex + 1);
  }

  bindFeedbackSubmit() {
    this.$rating.on('mousedown', '#voteSubmitButton', () => {
      this.$icons.popover('hide');
    });
  }

  bindFeedbackClose() {
    this.$rating.on('mousedown', '#closePopoverButton', () => {
      this.$icons.popover('hide');
    });
  }

  bindCloseOtherPopovers() {
    this.$icons.on('mousedown', () => {
      this.$icons.popover('hide');
    });
  }

  setFeedback() {
    if (this.$rating.hasClass('feedback')) {
      const myDefaultWhiteList = $.fn.tooltip.Constructor.Default.whiteList;
      myDefaultWhiteList.textarea = [];
      myDefaultWhiteList.button = [];

      this.$icons.attr('data-html', 'true');

      $(() => {
        this.$icons.popover({
          container: this.$rating,
          content: `<div class="my-0 py-0"> <textarea type="text" style="font-size: 0.78rem" class="md-textarea form-control py-0" placeholder="Write us what can we improve" rows="3"></textarea> <button id="voteSubmitButton" type="submit" class="btn btn-sm btn-primary mt-2">Submit!</button> <button id="closePopoverButton" class="btn btn-flat btn-sm mt-2">Close</button>  </div>`
        });
      });

      this.bindCloseOtherPopovers();
      this.bindFeedbackClose();
      this.bindFeedbackSubmit();
    }
  }
}

jQuery(($) => {
  $.fn.rating = function () {
    const rating = new Rating(this);
    rating.init();
  }

  const $rating = $('.interactive-rating');
  $rating.each((i, el) => {
    $(el).rating()
  });
});
