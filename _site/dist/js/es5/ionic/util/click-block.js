System.register('ionic/util/click-block', [], function (_export) {
  'use strict';

  var CSS_CLICK_BLOCK, DEFAULT_EXPIRE, cbEle, fallbackTimerId, isShowing, ClickBlock;

  function show(expire) {
    clearTimeout(fallbackTimerId);
    fallbackTimerId = setTimeout(hide, expire || DEFAULT_EXPIRE);
    if (!isShowing) {
      isShowing = true;
      if (cbEle) {
        cbEle.classList.add(CSS_CLICK_BLOCK);
      } else {
        cbEle = document.createElement('div');
        cbEle.className = 'click-block ' + CSS_CLICK_BLOCK;
        document.body.appendChild(cbEle);
      }
    }
  }
  function hide() {
    clearTimeout(fallbackTimerId);
    if (isShowing) {
      cbEle.classList.remove(CSS_CLICK_BLOCK);
      isShowing = false;
    }
  }
  return {
    setters: [],
    execute: function () {
      CSS_CLICK_BLOCK = 'click-block-active';
      DEFAULT_EXPIRE = 330;
      cbEle = undefined;
      fallbackTimerId = undefined;
      isShowing = false;

      ClickBlock = function ClickBlock(shouldShow, expire) {
        (shouldShow ? show : hide)(expire);
      };

      _export('ClickBlock', ClickBlock);
    }
  };
});