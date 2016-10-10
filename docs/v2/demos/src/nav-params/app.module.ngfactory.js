var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/forms/src/directives';
import * as import7 from '@angular/forms/src/form_providers';
import * as import8 from 'ionic-angular/module';
import * as import9 from '@angular/common/src/localization';
import * as import10 from 'ionic-angular/components/app/app';
import * as import11 from '@angular/core/src/application_init';
import * as import12 from '@angular/core/src/testability/testability';
import * as import13 from '@angular/core/src/application_ref';
import * as import14 from '@angular/core/src/linker/compiler';
import * as import15 from 'ionic-angular/gestures/gesture-config';
import * as import16 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import17 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import18 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import19 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import20 from '@angular/core/src/linker/view_utils';
import * as import21 from '@angular/platform-browser/src/browser/title';
import * as import22 from '@angular/http/src/backends/browser_xhr';
import * as import23 from '@angular/http/src/base_response_options';
import * as import24 from '@angular/http/src/backends/xhr_backend';
import * as import25 from '@angular/http/src/base_request_options';
import * as import26 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import27 from '@angular/forms/src/form_builder';
import * as import28 from 'ionic-angular/components/action-sheet/action-sheet';
import * as import29 from 'ionic-angular/components/alert/alert';
import * as import30 from 'ionic-angular/util/events';
import * as import31 from 'ionic-angular/util/form';
import * as import32 from 'ionic-angular/util/haptic';
import * as import33 from 'ionic-angular/gestures/gesture-controller';
import * as import34 from 'ionic-angular/util/keyboard';
import * as import35 from 'ionic-angular/components/loading/loading';
import * as import36 from '@angular/common/src/location/location';
import * as import37 from 'ionic-angular/components/menu/menu-controller';
import * as import38 from 'ionic-angular/components/modal/modal';
import * as import39 from 'ionic-angular/components/picker/picker';
import * as import40 from 'ionic-angular/components/popover/popover';
import * as import41 from 'ionic-angular/components/tap-click/tap-click';
import * as import42 from 'ionic-angular/components/toast/toast';
import * as import43 from 'ionic-angular/translation/translate';
import * as import44 from 'ionic-angular/transitions/transition-controller';
import * as import46 from '../../node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory';
import * as import47 from '../../node_modules/ionic-angular/components/alert/alert-component.ngfactory';
import * as import48 from '../../node_modules/ionic-angular/components/app/app-root.ngfactory';
import * as import49 from '../../node_modules/ionic-angular/components/loading/loading-component.ngfactory';
import * as import50 from '../../node_modules/ionic-angular/components/modal/modal-component.ngfactory';
import * as import51 from '../../node_modules/ionic-angular/components/picker/picker-component.ngfactory';
import * as import52 from '../../node_modules/ionic-angular/components/popover/popover-component.ngfactory';
import * as import53 from '../../node_modules/ionic-angular/components/toast/toast-component.ngfactory';
import * as import54 from './app.component.ngfactory';
import * as import55 from '@angular/core/src/application_tokens';
import * as import56 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import57 from '@angular/platform-browser/src/dom/events/key_events';
import * as import58 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import59 from '@angular/core/src/zone/ng_zone';
import * as import60 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import61 from './app.component';
import * as import62 from '@angular/common/src/location/platform_location';
import * as import63 from '@angular/common/src/location/location_strategy';
import * as import64 from 'ionic-angular/navigation/url-serializer';
import * as import65 from 'ionic-angular/navigation/deep-linker';
import * as import66 from 'ionic-angular/platform/query-params';
import * as import67 from 'ionic-angular/platform/platform-registry';
import * as import68 from 'ionic-angular/platform/platform';
import * as import69 from 'ionic-angular/config/config';
import * as import70 from 'ionic-angular/config/mode-registry';
import * as import71 from 'ionic-angular/transitions/transition-registry';
import * as import72 from '@angular/core/src/console';
import * as import73 from '@angular/core/src/i18n/tokens';
import * as import74 from '@angular/core/src/error_handler';
import * as import75 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import76 from '@angular/platform-browser/src/dom/animation_driver';
import * as import77 from '@angular/core/src/render/api';
import * as import78 from '@angular/core/src/security';
import * as import79 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import80 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import81 from '@angular/http/src/interfaces';
import * as import82 from '@angular/http/src/http';
import * as import83 from 'ionic-angular/components/app/app-root';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            import46.ActionSheetCmpNgFactory,
            import47.AlertCmpNgFactory,
            import48.IonicAppNgFactory,
            import49.LoadingCmpNgFactory,
            import50.ModalCmpNgFactory,
            import51.PickerCmpNgFactory,
            import52.PopoverCmpNgFactory,
            import53.ToastCmpNgFactory,
            import54.ApiDemoAppNgFactory,
            import54.ApiDemoPageNgFactory,
            import54.PushPageNgFactory,
            import48.IonicAppNgFactory
        ], [import48.IonicAppNgFactory]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_9", {
        get: function () {
            if ((this.__LOCALE_ID_9 == null)) {
                (this.__LOCALE_ID_9 = 'en-US');
            }
            return this.__LOCALE_ID_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_10", {
        get: function () {
            if ((this.__NgLocalization_10 == null)) {
                (this.__NgLocalization_10 = new import9.NgLocaleLocalization(this._LOCALE_ID_9));
            }
            return this.__NgLocalization_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_27", {
        get: function () {
            if ((this.__ApplicationRef_27 == null)) {
                (this.__ApplicationRef_27 = this._ApplicationRef__26);
            }
            return this.__ApplicationRef_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_28", {
        get: function () {
            if ((this.__Compiler_28 == null)) {
                (this.__Compiler_28 = new import14.Compiler());
            }
            return this.__Compiler_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_29", {
        get: function () {
            if ((this.__APP_ID_29 == null)) {
                (this.__APP_ID_29 = import55._appIdRandomProviderFactory());
            }
            return this.__APP_ID_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_30", {
        get: function () {
            if ((this.__DOCUMENT_30 == null)) {
                (this.__DOCUMENT_30 = import4._document());
            }
            return this.__DOCUMENT_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_31", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_31 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_31 = new import15.IonicGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_32", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_32 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_32 = [
                    new import56.DomEventsPlugin(),
                    new import57.KeyEventsPlugin(),
                    new import58.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_31)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_33", {
        get: function () {
            if ((this.__EventManager_33 == null)) {
                (this.__EventManager_33 = new import16.EventManager(this._EVENT_MANAGER_PLUGINS_32, this.parent.get(import59.NgZone)));
            }
            return this.__EventManager_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_34", {
        get: function () {
            if ((this.__DomSharedStylesHost_34 == null)) {
                (this.__DomSharedStylesHost_34 = new import17.DomSharedStylesHost(this._DOCUMENT_30));
            }
            return this.__DomSharedStylesHost_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_35", {
        get: function () {
            if ((this.__AnimationDriver_35 == null)) {
                (this.__AnimationDriver_35 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_36", {
        get: function () {
            if ((this.__DomRootRenderer_36 == null)) {
                (this.__DomRootRenderer_36 = new import18.DomRootRenderer_(this._DOCUMENT_30, this._EventManager_33, this._DomSharedStylesHost_34, this._AnimationDriver_35));
            }
            return this.__DomRootRenderer_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_37", {
        get: function () {
            if ((this.__RootRenderer_37 == null)) {
                (this.__RootRenderer_37 = import60._createConditionalRootRenderer(this._DomRootRenderer_36, this.parent.get(import60.NgProbeToken, null)));
            }
            return this.__RootRenderer_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_38", {
        get: function () {
            if ((this.__DomSanitizer_38 == null)) {
                (this.__DomSanitizer_38 = new import19.DomSanitizerImpl());
            }
            return this.__DomSanitizer_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_39", {
        get: function () {
            if ((this.__Sanitizer_39 == null)) {
                (this.__Sanitizer_39 = this._DomSanitizer_38);
            }
            return this.__Sanitizer_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_40", {
        get: function () {
            if ((this.__ViewUtils_40 == null)) {
                (this.__ViewUtils_40 = new import20.ViewUtils(this._RootRenderer_37, this._APP_ID_29, this._Sanitizer_39));
            }
            return this.__ViewUtils_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_41", {
        get: function () {
            if ((this.__IterableDiffers_41 == null)) {
                (this.__IterableDiffers_41 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_42", {
        get: function () {
            if ((this.__KeyValueDiffers_42 == null)) {
                (this.__KeyValueDiffers_42 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_43", {
        get: function () {
            if ((this.__SharedStylesHost_43 == null)) {
                (this.__SharedStylesHost_43 = this._DomSharedStylesHost_34);
            }
            return this.__SharedStylesHost_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_44", {
        get: function () {
            if ((this.__Title_44 == null)) {
                (this.__Title_44 = new import21.Title());
            }
            return this.__Title_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_45", {
        get: function () {
            if ((this.__BrowserXhr_45 == null)) {
                (this.__BrowserXhr_45 = new import22.BrowserXhr());
            }
            return this.__BrowserXhr_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_46", {
        get: function () {
            if ((this.__ResponseOptions_46 == null)) {
                (this.__ResponseOptions_46 = new import23.BaseResponseOptions());
            }
            return this.__ResponseOptions_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_47", {
        get: function () {
            if ((this.__XSRFStrategy_47 == null)) {
                (this.__XSRFStrategy_47 = import5._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_48", {
        get: function () {
            if ((this.__XHRBackend_48 == null)) {
                (this.__XHRBackend_48 = new import24.XHRBackend(this._BrowserXhr_45, this._ResponseOptions_46, this._XSRFStrategy_47));
            }
            return this.__XHRBackend_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_49", {
        get: function () {
            if ((this.__RequestOptions_49 == null)) {
                (this.__RequestOptions_49 = new import25.BaseRequestOptions());
            }
            return this.__RequestOptions_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_50", {
        get: function () {
            if ((this.__Http_50 == null)) {
                (this.__Http_50 = import5.httpFactory(this._XHRBackend_48, this._RequestOptions_49));
            }
            return this.__Http_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_51", {
        get: function () {
            if ((this.__RadioControlRegistry_51 == null)) {
                (this.__RadioControlRegistry_51 = new import26.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FormBuilder_52", {
        get: function () {
            if ((this.__FormBuilder_52 == null)) {
                (this.__FormBuilder_52 = new import27.FormBuilder());
            }
            return this.__FormBuilder_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AppRootToken_53", {
        get: function () {
            if ((this.__AppRootToken_53 == null)) {
                (this.__AppRootToken_53 = import61.ApiDemoApp);
            }
            return this.__AppRootToken_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DeepLinkConfigToken_54", {
        get: function () {
            if ((this.__DeepLinkConfigToken_54 == null)) {
                (this.__DeepLinkConfigToken_54 = null);
            }
            return this.__DeepLinkConfigToken_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActionSheetController_55", {
        get: function () {
            if ((this.__ActionSheetController_55 == null)) {
                (this.__ActionSheetController_55 = new import28.ActionSheetController(this._App_22));
            }
            return this.__ActionSheetController_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AlertController_56", {
        get: function () {
            if ((this.__AlertController_56 == null)) {
                (this.__AlertController_56 = new import29.AlertController(this._App_22));
            }
            return this.__AlertController_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Events_57", {
        get: function () {
            if ((this.__Events_57 == null)) {
                (this.__Events_57 = new import30.Events());
            }
            return this.__Events_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Form_58", {
        get: function () {
            if ((this.__Form_58 == null)) {
                (this.__Form_58 = new import31.Form());
            }
            return this.__Form_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Haptic_59", {
        get: function () {
            if ((this.__Haptic_59 == null)) {
                (this.__Haptic_59 = new import32.Haptic(this._Platform_20));
            }
            return this.__Haptic_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_GestureController_60", {
        get: function () {
            if ((this.__GestureController_60 == null)) {
                (this.__GestureController_60 = new import33.GestureController(this._App_22));
            }
            return this.__GestureController_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Keyboard_61", {
        get: function () {
            if ((this.__Keyboard_61 == null)) {
                (this.__Keyboard_61 = new import34.Keyboard(this._Config_21, this._Form_58, this.parent.get(import59.NgZone)));
            }
            return this.__Keyboard_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LoadingController_62", {
        get: function () {
            if ((this.__LoadingController_62 == null)) {
                (this.__LoadingController_62 = new import35.LoadingController(this._App_22));
            }
            return this.__LoadingController_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_63", {
        get: function () {
            if ((this.__LocationStrategy_63 == null)) {
                (this.__LocationStrategy_63 = import8.provideLocationStrategy(this.parent.get(import62.PlatformLocation), this.parent.get(import63.APP_BASE_HREF, null), this._Config_21));
            }
            return this.__LocationStrategy_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_64", {
        get: function () {
            if ((this.__Location_64 == null)) {
                (this.__Location_64 = new import36.Location(this._LocationStrategy_63));
            }
            return this.__Location_64;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MenuController_65", {
        get: function () {
            if ((this.__MenuController_65 == null)) {
                (this.__MenuController_65 = new import37.MenuController());
            }
            return this.__MenuController_65;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ModalController_66", {
        get: function () {
            if ((this.__ModalController_66 == null)) {
                (this.__ModalController_66 = new import38.ModalController(this._App_22));
            }
            return this.__ModalController_66;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PickerController_67", {
        get: function () {
            if ((this.__PickerController_67 == null)) {
                (this.__PickerController_67 = new import39.PickerController(this._App_22));
            }
            return this.__PickerController_67;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PopoverController_68", {
        get: function () {
            if ((this.__PopoverController_68 == null)) {
                (this.__PopoverController_68 = new import40.PopoverController(this._App_22));
            }
            return this.__PopoverController_68;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_TapClick_69", {
        get: function () {
            if ((this.__TapClick_69 == null)) {
                (this.__TapClick_69 = new import41.TapClick(this._Config_21, this._App_22, this.parent.get(import59.NgZone)));
            }
            return this.__TapClick_69;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ToastController_70", {
        get: function () {
            if ((this.__ToastController_70 == null)) {
                (this.__ToastController_70 = new import42.ToastController(this._App_22));
            }
            return this.__ToastController_70;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Translate_71", {
        get: function () {
            if ((this.__Translate_71 == null)) {
                (this.__Translate_71 = new import43.Translate());
            }
            return this.__Translate_71;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_TransitionController_72", {
        get: function () {
            if ((this.__TransitionController_72 == null)) {
                (this.__TransitionController_72 = new import44.TransitionController(this._Config_21));
            }
            return this.__TransitionController_72;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_73", {
        get: function () {
            if ((this.__UrlSerializer_73 == null)) {
                (this.__UrlSerializer_73 = import64.setupUrlSerializer(this._DeepLinkConfigToken_54));
            }
            return this.__UrlSerializer_73;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DeepLinker_74", {
        get: function () {
            if ((this.__DeepLinker_74 == null)) {
                (this.__DeepLinker_74 = import65.setupDeepLinker(this._App_22, this._UrlSerializer_73, this._Location_64));
            }
            return this.__DeepLinker_74;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._InternalFormsSharedModule_4 = new import6.InternalFormsSharedModule();
        this._FormsModule_5 = new import7.FormsModule();
        this._ReactiveFormsModule_6 = new import7.ReactiveFormsModule();
        this._IonicModule_7 = new import8.IonicModule();
        this._AppModule_8 = new import1.AppModule();
        this._ErrorHandler_11 = import4.errorHandler();
        this._ConfigToken_12 = null;
        this._UrlToken_13 = import8.provideLocationHref();
        this._QueryParams_14 = import66.setupQueryParams(this._UrlToken_13);
        this._PlatformConfigToken_15 = import67.providePlatformConfigs();
        this._UserAgentToken_16 = import8.provideUserAgent();
        this._NavigatorPlatformToken_17 = import8.provideNavigatorPlatform();
        this._DocumentDirToken_18 = import8.provideDocumentDirection();
        this._DocLangToken_19 = import8.provideDocumentLang();
        this._Platform_20 = import68.setupPlatform(this._PlatformConfigToken_15, this._QueryParams_14, this._UserAgentToken_16, this._NavigatorPlatformToken_17, this._DocumentDirToken_18, this._DocLangToken_19, this.parent.get(import59.NgZone));
        this._Config_21 = import69.setupConfig(this._ConfigToken_12, this._QueryParams_14, this._Platform_20);
        this._App_22 = new import10.App(this._Config_21, this._Platform_20);
        this._APP_INITIALIZER_23 = [
            import70.registerModeConfigs(this._Config_21),
            import71.registerTransitions(this._Config_21),
            import30.setupProvideEvents(this._Platform_20),
            import41.setupTapClick(this._Config_21, this._App_22, this.parent.get(import59.NgZone))
        ];
        this._ApplicationInitStatus_24 = new import11.ApplicationInitStatus(this._APP_INITIALIZER_23);
        this._Testability_25 = new import12.Testability(this.parent.get(import59.NgZone));
        this._ApplicationRef__26 = new import13.ApplicationRef_(this.parent.get(import59.NgZone), this.parent.get(import72.Console), this, this._ErrorHandler_11, this, this._ApplicationInitStatus_24, this.parent.get(import12.TestabilityRegistry, null), this._Testability_25);
        return this._AppModule_8;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import6.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_4;
        }
        if ((token === import7.FormsModule)) {
            return this._FormsModule_5;
        }
        if ((token === import7.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_6;
        }
        if ((token === import8.IonicModule)) {
            return this._IonicModule_7;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_8;
        }
        if ((token === import73.LOCALE_ID)) {
            return this._LOCALE_ID_9;
        }
        if ((token === import9.NgLocalization)) {
            return this._NgLocalization_10;
        }
        if ((token === import74.ErrorHandler)) {
            return this._ErrorHandler_11;
        }
        if ((token === import69.ConfigToken)) {
            return this._ConfigToken_12;
        }
        if ((token === import66.UrlToken)) {
            return this._UrlToken_13;
        }
        if ((token === import66.QueryParams)) {
            return this._QueryParams_14;
        }
        if ((token === import67.PlatformConfigToken)) {
            return this._PlatformConfigToken_15;
        }
        if ((token === import68.UserAgentToken)) {
            return this._UserAgentToken_16;
        }
        if ((token === import68.NavigatorPlatformToken)) {
            return this._NavigatorPlatformToken_17;
        }
        if ((token === import68.DocumentDirToken)) {
            return this._DocumentDirToken_18;
        }
        if ((token === import68.DocLangToken)) {
            return this._DocLangToken_19;
        }
        if ((token === import68.Platform)) {
            return this._Platform_20;
        }
        if ((token === import69.Config)) {
            return this._Config_21;
        }
        if ((token === import10.App)) {
            return this._App_22;
        }
        if ((token === import11.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_23;
        }
        if ((token === import11.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_24;
        }
        if ((token === import12.Testability)) {
            return this._Testability_25;
        }
        if ((token === import13.ApplicationRef_)) {
            return this._ApplicationRef__26;
        }
        if ((token === import13.ApplicationRef)) {
            return this._ApplicationRef_27;
        }
        if ((token === import14.Compiler)) {
            return this._Compiler_28;
        }
        if ((token === import55.APP_ID)) {
            return this._APP_ID_29;
        }
        if ((token === import75.DOCUMENT)) {
            return this._DOCUMENT_30;
        }
        if ((token === import58.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_31;
        }
        if ((token === import16.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_32;
        }
        if ((token === import16.EventManager)) {
            return this._EventManager_33;
        }
        if ((token === import17.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_34;
        }
        if ((token === import76.AnimationDriver)) {
            return this._AnimationDriver_35;
        }
        if ((token === import18.DomRootRenderer)) {
            return this._DomRootRenderer_36;
        }
        if ((token === import77.RootRenderer)) {
            return this._RootRenderer_37;
        }
        if ((token === import19.DomSanitizer)) {
            return this._DomSanitizer_38;
        }
        if ((token === import78.Sanitizer)) {
            return this._Sanitizer_39;
        }
        if ((token === import20.ViewUtils)) {
            return this._ViewUtils_40;
        }
        if ((token === import79.IterableDiffers)) {
            return this._IterableDiffers_41;
        }
        if ((token === import80.KeyValueDiffers)) {
            return this._KeyValueDiffers_42;
        }
        if ((token === import17.SharedStylesHost)) {
            return this._SharedStylesHost_43;
        }
        if ((token === import21.Title)) {
            return this._Title_44;
        }
        if ((token === import22.BrowserXhr)) {
            return this._BrowserXhr_45;
        }
        if ((token === import23.ResponseOptions)) {
            return this._ResponseOptions_46;
        }
        if ((token === import81.XSRFStrategy)) {
            return this._XSRFStrategy_47;
        }
        if ((token === import24.XHRBackend)) {
            return this._XHRBackend_48;
        }
        if ((token === import25.RequestOptions)) {
            return this._RequestOptions_49;
        }
        if ((token === import82.Http)) {
            return this._Http_50;
        }
        if ((token === import26.RadioControlRegistry)) {
            return this._RadioControlRegistry_51;
        }
        if ((token === import27.FormBuilder)) {
            return this._FormBuilder_52;
        }
        if ((token === import83.AppRootToken)) {
            return this._AppRootToken_53;
        }
        if ((token === import64.DeepLinkConfigToken)) {
            return this._DeepLinkConfigToken_54;
        }
        if ((token === import28.ActionSheetController)) {
            return this._ActionSheetController_55;
        }
        if ((token === import29.AlertController)) {
            return this._AlertController_56;
        }
        if ((token === import30.Events)) {
            return this._Events_57;
        }
        if ((token === import31.Form)) {
            return this._Form_58;
        }
        if ((token === import32.Haptic)) {
            return this._Haptic_59;
        }
        if ((token === import33.GestureController)) {
            return this._GestureController_60;
        }
        if ((token === import34.Keyboard)) {
            return this._Keyboard_61;
        }
        if ((token === import35.LoadingController)) {
            return this._LoadingController_62;
        }
        if ((token === import63.LocationStrategy)) {
            return this._LocationStrategy_63;
        }
        if ((token === import36.Location)) {
            return this._Location_64;
        }
        if ((token === import37.MenuController)) {
            return this._MenuController_65;
        }
        if ((token === import38.ModalController)) {
            return this._ModalController_66;
        }
        if ((token === import39.PickerController)) {
            return this._PickerController_67;
        }
        if ((token === import40.PopoverController)) {
            return this._PopoverController_68;
        }
        if ((token === import41.TapClick)) {
            return this._TapClick_69;
        }
        if ((token === import42.ToastController)) {
            return this._ToastController_70;
        }
        if ((token === import43.Translate)) {
            return this._Translate_71;
        }
        if ((token === import44.TransitionController)) {
            return this._TransitionController_72;
        }
        if ((token === import64.UrlSerializer)) {
            return this._UrlSerializer_73;
        }
        if ((token === import65.DeepLinker)) {
            return this._DeepLinker_74;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__26.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
