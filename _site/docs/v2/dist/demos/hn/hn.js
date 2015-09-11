System.register('hn', [], function (_export) {
    'use strict';

    var APIUrl, HackerNewsClient, HackerNews;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            APIUrl = 'https://hacker-news.firebaseio.com/v0/';

            HackerNewsClient = (function () {
                function HackerNewsClient() {
                    _classCallCheck(this, HackerNewsClient);
                }

                _createClass(HackerNewsClient, [{
                    key: 'getTopStories',

                    //this.fb = new Firebase(APIUrl);
                    value: function getTopStories(cb) {
                        var _this = this;

                        console.log('GETTING TOP STORIES');
                        this.fb.child('topstories').on('value', function (snapshot) {
                            var items = snapshot.val();
                            console.log('Fetched', items.length, 'items');
                            var _iteratorNormalCompletion = true;
                            var _didIteratorError = false;
                            var _iteratorError = undefined;

                            try {
                                for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    var itemID = _step.value;

                                    _this.fb.child("item").child(itemID).on('value', function (data) {
                                        cb(data.val());
                                        //console.log(data.val());
                                    });
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
                        });
                    }
                }]);

                return HackerNewsClient;
            })();

            _export('HackerNewsClient', HackerNewsClient);

            HackerNews = new HackerNewsClient();

            _export('HackerNews', HackerNews);
        }
    };
});