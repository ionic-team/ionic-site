System.register('ionic/components/aside/config', ['ionic/config/component', 'ionic/components/aside/aside', 'ionic/components/aside/extensions/types', 'ionic/components/aside/extensions/gestures'], function (_export) {
  'use strict';

  var ComponentConfig, Aside, asideTypes, asideGestures, AsideConfig;
  return {
    setters: [function (_ionicConfigComponent) {
      ComponentConfig = _ionicConfigComponent.ComponentConfig;
    }, function (_ionicComponentsAsideAside) {
      Aside = _ionicComponentsAsideAside.Aside;
    }, function (_ionicComponentsAsideExtensionsTypes) {
      asideTypes = _ionicComponentsAsideExtensionsTypes;
    }, function (_ionicComponentsAsideExtensionsGestures) {
      asideGestures = _ionicComponentsAsideExtensionsGestures;
    }],
    execute: function () {
      AsideConfig = new ComponentConfig(Aside);

      _export('AsideConfig', AsideConfig);

      AsideConfig.classes('side', 'type');
      AsideConfig.delegate('gesture').when({ side: 'left' }, gestures.LeftAsideGesture).when({ side: 'right' }, gestures.RightAsideGesture).when({ side: 'top' }, gestures.TopAsideGesture).when({ side: 'bottom' }, gestures.BottomAsideGesture);
      AsideConfig.delegate('type').when({ type: 'overlay' }, types.AsideTypeOverlay).when({ type: 'push' }, types.AsideTypePush).when({ type: 'reveal' }, types.AsideTypeReveal);
      AsideConfig.platform('android').defaults({ type: 'overlay' });
      AsideConfig.platform('ios').defaults({ type: 'reveal' });
    }
  };
});