System.register('ionic/components/view/view-controller', ['angular2/angular2', 'angular2/src/core/compiler/element_ref', 'angular2/src/core/compiler/dynamic_component_loader', 'angular2/di', './view-item', '../nav/nav-controller', '../nav/pane', '../../transitions/transition', '../../util/click-block', 'ionic/util'], function (_export) {
  'use strict';

  var Compiler, ElementRef, DynamicComponentLoader, Injector, ViewItem, NavController, PaneController, Transition, ClickBlock, util, ViewController, ACTIVE_STATE, CACHED_STATE, STAGED_ENTERING_STATE, STAGED_LEAVING_STATE, ctrlIds;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_angular2Angular2) {
      Compiler = _angular2Angular2.Compiler;
    }, function (_angular2SrcCoreCompilerElement_ref) {
      ElementRef = _angular2SrcCoreCompilerElement_ref.ElementRef;
    }, function (_angular2SrcCoreCompilerDynamic_component_loader) {
      DynamicComponentLoader = _angular2SrcCoreCompilerDynamic_component_loader.DynamicComponentLoader;
    }, function (_angular2Di) {
      Injector = _angular2Di.Injector;
    }, function (_viewItem) {
      ViewItem = _viewItem.ViewItem;
    }, function (_navNavController) {
      NavController = _navNavController.NavController;
    }, function (_navPane) {
      PaneController = _navPane.PaneController;
    }, function (_transitionsTransition) {
      Transition = _transitionsTransition.Transition;
    }, function (_utilClickBlock) {
      ClickBlock = _utilClickBlock.ClickBlock;
    }, function (_ionicUtil) {
      util = _ionicUtil;
    }],
    execute: function () {
      ViewController = (function () {
        function ViewController(parentViewCtrl, compiler, elementRef, loader, injector) {
          _classCallCheck(this, ViewController);

          this.parent = parentViewCtrl;
          this.compiler = compiler;
          this.elementRef = elementRef;
          this.loader = loader;
          this.injector = injector;
          this.domElement = elementRef.domElement;
          this.items = [];
          this.navCtrl = new NavController(this);
          this.panes = new PaneController(this);
          this.sbTransition = null;
          this.sbActive = false;
          this.id = ++ctrlIds;
          this._ids = -1;
        }

        _createClass(ViewController, [{
          key: 'push',
          value: function push(ComponentType) {
            var params = arguments[1] === undefined ? {} : arguments[1];
            var opts = arguments[2] === undefined ? {} : arguments[2];

            if (!ComponentType || this.isTransitioning()) {
              return Promise.reject();
            }
            var resolve = undefined;
            var promise = new Promise(function (res) {
              resolve = res;
            });
            if (!this.items.length) {
              opts.animation = 'none';
            }
            opts.direction = opts.direction || 'forward';
            var leavingItem = this.getActive() || new ViewItem();
            leavingItem.shouldDestroy = false;
            leavingItem.shouldCache = true;
            leavingItem.willCache();
            var enteringItem = new ViewItem(this, ComponentType, params);
            this.add(enteringItem);
            this.transition(enteringItem, leavingItem, opts, function () {
              resolve();
            });
            return promise;
          }
        }, {
          key: 'pop',
          value: function pop() {
            var opts = arguments[0] === undefined ? {} : arguments[0];

            if (this.isTransitioning() || this.items.length < 2) {
              return Promise.reject();
            }
            var resolve = undefined;
            var promise = new Promise(function (res) {
              resolve = res;
            });
            opts.direction = opts.direction || 'back';
            var leavingItem = this.getActive() || new ViewItem();
            leavingItem.shouldDestroy = true;
            leavingItem.shouldCache = false;
            leavingItem.willUnload();
            var enteringItem = this.getPrevious(leavingItem);
            if (enteringItem) {
              this.transition(enteringItem, leavingItem, opts, function () {
                resolve();
              });
            } else {
              this.transitionComplete();
              resolve();
            }
            return promise;
          }
        }, {
          key: 'transition',
          value: function transition(enteringItem, leavingItem, opts, callback) {
            var _this = this;

            if (!enteringItem || enteringItem === leavingItem) {
              return callback();
            }
            if (opts.animate === false) {
              opts.animation = 'none';
            }
            opts.animate = opts.animation !== 'none';
            enteringItem.stage(function () {
              enteringItem.shouldDestroy = false;
              enteringItem.shouldCache = false;
              enteringItem.willEnter();
              leavingItem.willLeave();
              enteringItem.state = STAGED_ENTERING_STATE;
              leavingItem.state = STAGED_LEAVING_STATE;
              var transAnimation = Transition.create(_this, opts);
              if (!opts.animate) {
                transAnimation.duration(0);
              }
              var duration = transAnimation.duration();
              if (duration > 64) {
                ClickBlock(true, duration + 200);
              }
              transAnimation.play().then(function () {
                enteringItem.state = ACTIVE_STATE;
                leavingItem.state = CACHED_STATE;
                transAnimation.dispose();
                enteringItem.didEnter();
                leavingItem.didLeave();
                _this.transitionComplete();
                callback();
              });
            });
          }
        }, {
          key: 'swipeBackStart',
          value: function swipeBackStart() {
            var _this2 = this;

            if (this.isTransitioning() || this.items.length < 2) {
              return;
            }
            this.sbActive = true;
            this.sbResolve = null;
            var opts = { direction: 'back' };
            var leavingItem = this.getActive() || new ViewItem();
            leavingItem.shouldDestroy = true;
            leavingItem.shouldCache = false;
            leavingItem.willLeave();
            leavingItem.willUnload();
            var enteringItem = this.getPrevious(leavingItem);
            enteringItem.shouldDestroy = false;
            enteringItem.shouldCache = false;
            enteringItem.willEnter();
            enteringItem.stage(function () {
              enteringItem.state = STAGED_ENTERING_STATE;
              leavingItem.state = STAGED_LEAVING_STATE;
              _this2.sbTransition = Transition.create(_this2, opts);
              _this2.sbTransition.easing('linear');
              _this2.sbTransition.stage();
              var swipeBackPromise = new Promise(function (res) {
                _this2.sbResolve = res;
              });
              swipeBackPromise.then(function (completeSwipeBack) {
                if (completeSwipeBack) {
                  enteringItem.state = ACTIVE_STATE;
                  leavingItem.state = CACHED_STATE;
                  enteringItem.didEnter();
                  leavingItem.didLeave();
                } else {
                  leavingItem.state = ACTIVE_STATE;
                  enteringItem.state = CACHED_STATE;
                  leavingItem.willEnter();
                  leavingItem.didEnter();
                  enteringItem.didLeave();
                  leavingItem.shouldDestroy = false;
                  enteringItem.shouldDestroy = false;
                }
                _this2.transitionComplete();
              });
            });
          }
        }, {
          key: 'swipeBackProgress',
          value: function swipeBackProgress(progress) {
            if (this.sbTransition) {
              ClickBlock(true, 4000);
              this.sbTransition.progress(Math.min(1, Math.max(0, progress)));
            }
          }
        }, {
          key: 'swipeBackEnd',
          value: function swipeBackEnd(completeSwipeBack, progress, playbackRate) {
            var _this3 = this;

            if (this.sbTransition && this.sbActive) {
              this.sbActive = false;
              if (progress <= 0) {
                this.swipeBackProgress(0.0001);
              } else if (progress >= 1) {
                this.swipeBackProgress(0.9999);
              }
              if (!completeSwipeBack) {
                playbackRate = playbackRate * -1;
              }
              this.sbTransition.playbackRate(playbackRate);
              this.sbTransition.play().then(function () {
                _this3.sbResolve && _this3.sbResolve(completeSwipeBack);
                _this3.sbTransition && _this3.sbTransition.dispose();
                _this3.sbResolve = _this3.sbTransition = null;
              });
            }
          }
        }, {
          key: 'swipeBackEnabled',
          value: function swipeBackEnabled() {
            var activeItem = this.getActive();
            if (activeItem) {
              return activeItem.enableBack();
            }
            return false;
          }
        }, {
          key: 'transitionComplete',
          value: function transitionComplete() {
            var _this4 = this;

            this.items.forEach(function (item) {
              if (item) {
                if (item.shouldDestroy) {
                  _this4.remove(item);
                  item.destroy();
                } else if (item.state === CACHED_STATE && item.shouldCache) {
                  item.cache();
                  item.shouldCache = false;
                }
              }
            });
            ClickBlock(false);
          }
        }, {
          key: 'isTransitioning',
          value: function isTransitioning() {
            var state = undefined;
            for (var i = 0, ii = this.items.length; i < ii; i++) {
              state = this.items[i].state;
              if (state === STAGED_ENTERING_STATE || state === STAGED_LEAVING_STATE) {
                return true;
              }
            }
            return false;
          }
        }, {
          key: 'getActive',
          value: function getActive() {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
              if (this.items[i].state === ACTIVE_STATE) {
                return this.items[i];
              }
            }
            return null;
          }
        }, {
          key: 'getByInstance',
          value: function getByInstance(instance) {
            if (instance) {
              for (var i = 0, ii = this.items.length; i < ii; i++) {
                if (this.items[i].instance === instance) {
                  return this.items[i];
                }
              }
            }
            return null;
          }
        }, {
          key: 'getByIndex',
          value: function getByIndex(index) {
            if (index < this.items.length && index > -1) {
              return this.items[index];
            }
            return null;
          }
        }, {
          key: 'getPrevious',
          value: function getPrevious(item) {
            if (item) {
              return this.items[this.items.indexOf(item) - 1];
            }
            return null;
          }
        }, {
          key: 'getStagedEnteringItem',
          value: function getStagedEnteringItem() {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
              if (this.items[i].state === STAGED_ENTERING_STATE) {
                return this.items[i];
              }
            }
            return null;
          }
        }, {
          key: 'getStagedLeavingItem',
          value: function getStagedLeavingItem() {
            for (var i = 0, ii = this.items.length; i < ii; i++) {
              if (this.items[i].state === STAGED_LEAVING_STATE) {
                return this.items[i];
              }
            }
            return null;
          }
        }, {
          key: 'navbarViewContainer',
          value: function navbarViewContainer(nbContainer) {
            if (nbContainer) {
              this._nbContainer = nbContainer;
            }
            if (this._nbContainer) {
              return this._nbContainer;
            }
            if (this.parent) {
              return this.parent.navbarViewContainer();
            }
          }
        }, {
          key: 'anchorElementRef',
          value: function anchorElementRef() {
            if (arguments.length) {
              this._anchorER = arguments[0];
            }
            return this._anchorER;
          }
        }, {
          key: 'anchorViewContainerRef',
          value: function anchorViewContainerRef() {
            if (arguments.length) {
              this._anchorVC = arguments[0];
            }
            return this._anchorVC;
          }
        }, {
          key: 'childNavbar',
          value: function childNavbar() {
            if (arguments.length) {
              this._childNavbar = arguments[0];
            }
            return this._childNavbar;
          }
        }, {
          key: 'add',
          value: function add(item) {
            item.id = this.id + '' + ++this._ids;
            this.items.push(item);
          }
        }, {
          key: 'remove',
          value: function remove(itemOrIndex) {
            util.array.remove(this.items, itemOrIndex);
          }
        }, {
          key: 'length',
          value: function length() {
            return this.items.length;
          }
        }, {
          key: 'setItems',
          value: function setItems(components) {
            this.clear();
            var leavingItem = this.getActive() || new ViewItem();
            leavingItem.shouldDestroy = true;
            leavingItem.shouldCache = false;
            leavingItem.willUnload();
            this.transitionComplete();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var c = _step.value;

                this.push(c, { animate: false });
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }, {
          key: 'clear',
          value: function clear() {
            var pops = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var item = _step2.value;

                pops.push(this.pop({ animate: false }));
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                  _iterator2['return']();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            return Promise.all(pops);
          }
        }, {
          key: 'instances',
          value: function instances() {
            var instances = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = this.items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var item = _step3.value;

                if (item.instance) {
                  instances.push(item.instance);
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                  _iterator3['return']();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            return instances;
          }
        }, {
          key: 'isActive',
          value: function isActive(item) {
            return item && item.state === ACTIVE_STATE;
          }
        }, {
          key: 'isStagedEntering',
          value: function isStagedEntering(item) {
            return item && item.state === STAGED_ENTERING_STATE;
          }
        }]);

        return ViewController;
      })();

      _export('ViewController', ViewController);

      Object.defineProperty(ViewController, 'parameters', { get: function get() {
          return [[ViewController], [Compiler], [ElementRef], [DynamicComponentLoader], [Injector]];
        } });
      ACTIVE_STATE = 1;
      CACHED_STATE = 2;
      STAGED_ENTERING_STATE = 3;
      STAGED_LEAVING_STATE = 4;
      ctrlIds = -1;
    }
  };
});