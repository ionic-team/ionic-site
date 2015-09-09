import {isString,
  isObject,
  isDefined,
  extend} from '../util/util';
export class IonicConfig {
  constructor(settings) {
    this.setting(settings || {});
  }
  setting() {
    const args = arguments;
    const arg0 = args[0];
    const arg1 = args[1];
    let s = this._settings;
    switch (args.length) {
      case 0:
        return s;
      case 1:
        if (isObject(arg0)) {
          this._settings = arg0;
          return this;
        }
        if (!isDefined(s[arg0])) {
          s[arg0] = null;
          let activePlatformKeys = this._platforms;
          let platformSettings = s.platforms;
          let platformObj = null;
          if (platformSettings) {
            let platformValue = undefined;
            for (let i = 0; i < activePlatformKeys.length; i++) {
              platformObj = platformSettings[activePlatformKeys[i]];
              if (platformObj && isDefined(platformObj[arg0])) {
                platformValue = platformObj[arg0];
              }
            }
            if (isDefined(platformValue)) {
              s[arg0] = platformValue;
            }
          }
        }
        return s[arg0];
      case 2:
        if (isObject(arg1)) {
          s.platforms = s.platforms || {};
          s.platforms[arg0] = arg1;
        } else {
          s[arg0] = arg1;
        }
        return this;
      case 3:
        s.platforms = s.platforms || {};
        s.platforms[arg0] = s.platforms[arg0] || {};
        s.platforms[arg0][arg1] = args[2];
        return this;
    }
  }
  setPlatform(platform) {
    this._platforms = platform.platforms();
    this._settings.platforms = extend(platform.settings(), this._settings.platforms || {});
  }
}
