import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import10 from '@angular/core/src/linker/component_factory';
export declare class Wrapper_ModalFirstPage {
    context: import0.ModalFirstPage;
    changed: boolean;
    constructor(p0: any);
    detectChangesInternal(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
}
export declare class Wrapper_ModalContentPage {
    context: import0.ModalContentPage;
    changed: boolean;
    constructor(p0: any, p1: any);
    detectChangesInternal(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
}
export declare class Wrapper_ApiDemoApp {
    context: import0.ApiDemoApp;
    changed: boolean;
    constructor();
    detectChangesInternal(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
}
export declare const ModalFirstPageNgFactory: import10.ComponentFactory<import0.ModalFirstPage>;
export declare function viewFactory_ModalFirstPage0(viewUtils: import4.ViewUtils, parentInjector: import5.Injector, declarationEl: import3.AppElement): import1.AppView<import0.ModalFirstPage>;
export declare const ModalContentPageNgFactory: import10.ComponentFactory<import0.ModalContentPage>;
export declare function viewFactory_ModalContentPage0(viewUtils: import4.ViewUtils, parentInjector: import5.Injector, declarationEl: import3.AppElement): import1.AppView<import0.ModalContentPage>;
export declare const ApiDemoAppNgFactory: import10.ComponentFactory<import0.ApiDemoApp>;
export declare function viewFactory_ApiDemoApp0(viewUtils: import4.ViewUtils, parentInjector: import5.Injector, declarationEl: import3.AppElement): import1.AppView<import0.ApiDemoApp>;
