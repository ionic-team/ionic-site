System.register('ionic/platform/registry', ['./platform'], function (_export) {
  'use strict';

  var Platform;
  return {
    setters: [function (_platform) {
      Platform = _platform.Platform;
    }],
    execute: function () {
      Platform.register({
        name: 'core',
        settings: { mode: 'core' }
      });
      Platform.setDefault('core');
      Platform.register({ name: 'mobile' });
      Platform.register({
        name: 'phablet',
        isMatch: function isMatch(p) {
          var smallest = Math.min(p.width(), p.height());
          var largest = Math.max(p.width(), p.height());
          return smallest > 390 && smallest < 520 && (largest > 620 && largest < 800);
        }
      });
      Platform.register({
        name: 'tablet',
        isMatch: function isMatch(p) {
          var smallest = Math.min(p.width(), p.height());
          var largest = Math.max(p.width(), p.height());
          return smallest > 460 && smallest < 820 && (largest > 780 && largest < 1400);
        }
      });
      Platform.register({
        name: 'android',
        superset: 'mobile',
        subsets: ['phablet', 'tablet'],
        settings: { mode: 'md' },
        isMatch: function isMatch(p) {
          var re = 'android| silk';
          return p.isPlatform('android', re);
        }
      });
      Platform.register({
        name: 'ios',
        superset: 'mobile',
        subsets: ['ipad', 'iphone'],
        settings: { mode: 'ios' },
        isMatch: function isMatch(p) {
          return true;
          return p.isPlatform('ios', 'iphone|ipad|ipod');
        },
        versionParser: function versionParser(p) {
          var val = p.matchUserAgent('OS (d+)_(d+)?');
          console.log(val);
        }
      });
      Platform.register({
        name: 'ipad',
        superset: 'tablet',
        isMatch: function isMatch(p) {
          return p.isPlatform('ipad');
        }
      });
      Platform.register({
        name: 'iphone',
        subsets: ['phablet'],
        isMatch: function isMatch(p) {
          return p.isPlatform('iphone');
        }
      });
      Platform.register({
        name: 'windowsphone',
        superset: 'mobile',
        subsets: ['phablet', 'tablet'],
        settings: { mode: 'wp' },
        isMatch: function isMatch(p) {
          return p.isPlatform('windowsphone', 'windows phone');
        }
      });
      Platform.register({
        name: 'cordova',
        isEngine: true,
        methods: { ready: function ready() {
            return Platform.windowLoad().then(function () {
              return new Promise(function (resolve) {
                document.addEventListener('deviceready', resolve);
              });
            });
          } },
        isMatch: function isMatch(p) {
          return !!(window.cordova || window.PhoneGap || window.phonegap);
        }
      });
    }
  };
});