import { OpaqueToken } from '@angular/core';
import { windowLoad } from '../util/dom';
export var PLATFORM_CONFIGS = {
    /**
     * core
     */
    core: {
        settings: {
            mode: 'md',
            keyboardHeight: 290
        }
    },
    /**
     * mobile
     */
    mobile: {},
    /**
     * phablet
     */
    phablet: {
        isMatch: function (p) {
            var smallest = Math.min(p.width(), p.height());
            var largest = Math.max(p.width(), p.height());
            return (smallest > 390 && smallest < 520) &&
                (largest > 620 && largest < 800);
        }
    },
    /**
     * tablet
     */
    tablet: {
        isMatch: function (p) {
            var smallest = Math.min(p.width(), p.height());
            var largest = Math.max(p.width(), p.height());
            return (smallest > 460 && smallest < 820) &&
                (largest > 780 && largest < 1400);
        }
    },
    /**
     * android
     */
    android: {
        superset: 'mobile',
        subsets: [
            'phablet',
            'tablet'
        ],
        settings: {
            activator: function (p) {
                // md mode defaults to use ripple activator
                // however, under-powered devices shouldn't use ripple
                // if this a linux device, and is using Android Chrome v36 (Android 5.0)
                // or above then use ripple, otherwise do not use a ripple effect
                if (p.testNavigatorPlatform('linux')) {
                    var chromeVersion = p.matchUserAgentVersion(/Chrome\/(\d+).(\d+)?/);
                    if (chromeVersion) {
                        // linux android device using modern android chrome browser gets ripple
                        if (parseInt(chromeVersion.major, 10) < 36 || p.version().major < 5) {
                            return 'none';
                        }
                        else {
                            return 'ripple';
                        }
                    }
                    // linux android device not using chrome browser checks just android's version
                    if (p.version().major < 5) {
                        return 'none';
                    }
                }
                // fallback to always use ripple
                return 'ripple';
            },
            autoFocusAssist: 'immediate',
            inputCloning: true,
            scrollAssist: true,
            hoverCSS: false,
            keyboardHeight: 300,
            mode: 'md',
        },
        isMatch: function (p) {
            return p.isPlatformMatch('android', ['android', 'silk'], ['windows phone']);
        },
        versionParser: function (p) {
            return p.matchUserAgentVersion(/Android (\d+).(\d+)?/);
        }
    },
    /**
     * ios
     */
    ios: {
        superset: 'mobile',
        subsets: [
            'ipad',
            'iphone'
        ],
        settings: {
            autoFocusAssist: 'delay',
            hoverCSS: false,
            inputBlurring: isIOS,
            inputCloning: isIOS,
            keyboardHeight: 300,
            mode: 'ios',
            scrollAssist: isIOS,
            statusbarPadding: isCordova,
            swipeBackEnabled: isIOS,
            tapPolyfill: isIOSUI,
            virtualScrollEventAssist: isIOSUI,
            disableScrollAssist: isIOS,
        },
        isMatch: function (p) {
            return p.isPlatformMatch('ios', ['iphone', 'ipad', 'ipod'], ['windows phone']);
        },
        versionParser: function (p) {
            return p.matchUserAgentVersion(/OS (\d+)_(\d+)?/);
        }
    },
    /**
     * ipad
     */
    ipad: {
        superset: 'tablet',
        settings: {
            keyboardHeight: 500,
        },
        isMatch: function (p) {
            return p.isPlatformMatch('ipad');
        }
    },
    /**
     * iphone
     */
    iphone: {
        subsets: [
            'phablet'
        ],
        isMatch: function (p) {
            return p.isPlatformMatch('iphone');
        }
    },
    /**
     * Windows
     */
    windows: {
        superset: 'mobile',
        subsets: [
            'phablet',
            'tablet'
        ],
        settings: {
            mode: 'wp',
            autoFocusAssist: 'immediate',
            hoverCSS: false
        },
        isMatch: function (p) {
            return p.isPlatformMatch('windows', ['windows phone']);
        },
        versionParser: function (p) {
            return p.matchUserAgentVersion(/Windows Phone (\d+).(\d+)?/);
        }
    },
    /**
     * cordova
     */
    cordova: {
        isEngine: true,
        initialize: function (p) {
            // prepare a custom "ready" for cordova "deviceready"
            p.prepareReady = function () {
                // 1) ionic bootstrapped
                windowLoad(function () {
                    // 2) window onload triggered or completed
                    document.addEventListener('deviceready', function () {
                        // 3) cordova deviceready event triggered
                        // add cordova listeners to emit platform events
                        document.addEventListener('backbutton', function (ev) {
                            p.zone.run(function () {
                                p.backButton.emit(ev);
                            });
                        });
                        document.addEventListener('pause', function (ev) {
                            p.zone.run(function () {
                                p.pause.emit(ev);
                            });
                        });
                        document.addEventListener('resume', function (ev) {
                            p.zone.run(function () {
                                p.resume.emit(ev);
                            });
                        });
                        // cordova has its own exitApp method
                        p.exitApp = function () {
                            window.navigator.app.exitApp();
                        };
                        // cordova has fully loaded and we've added listeners
                        p.triggerReady('cordova');
                    });
                });
            };
        },
        isMatch: function () {
            return !!(window.cordova || window.PhoneGap || window.phonegap);
        }
    }
};
function isCordova() {
    return !!(window.cordova);
}
function isIOS(p) {
    // shortcut function to be reused internally
    // checks navigator.platform to see if it's an actual iOS device
    // this does not use the user-agent string because it is often spoofed
    // an actual iPad will return true, a chrome dev tools iPad will return false
    return p.testNavigatorPlatform('iphone|ipad|ipod');
}
function isSafari(p) {
    return p.testUserAgent('Safari');
}
function isWK() {
    return !!window['webkit'];
}
// Commented out becuase it is not used yet
// function isIOSWK(p: Platform): boolean {
//   return isIOS(p) && isWK();
// }
function isIOSUI(p) {
    return isIOS(p) && !isWK() && !isSafari(p);
}
export var PlatformConfigToken = new OpaqueToken('PLTCONFIG');
export function providePlatformConfigs() {
    return PLATFORM_CONFIGS;
}
//# sourceMappingURL=platform-registry.js.map