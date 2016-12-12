import * as import0 from './app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import11 from '@angular/core/src/linker/component_factory';
export declare class Wrapper_Page1 {
    context: import0.Page1;
    changed: boolean;
    constructor(p0: any, p1: any);
    detectChangesInternal(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
}
export declare class Wrapper_Page2 {
    context: import0.Page2;
    changed: boolean;
    constructor();
    detectChangesInternal(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
}
export declare class Wrapper_ApiDemoApp {
    context: import0.ApiDemoApp;
    changed: boolean;
    constructor();
    detectChangesInternal(view: import1.AppView<any>, el: any, throwOnChange: boolean): boolean;
}
export declare const Page1NgFactory: import11.ComponentFactory<import0.Page1>;
export declare function viewFactory_Page10(viewUtils: import4.ViewUtils, parentInjector: import5.Injector, declarationEl: import3.AppElement): import1.AppView<import0.Page1>;
export declare const Page2NgFactory: import11.ComponentFactory<import0.Page2>;
export declare function viewFactory_Page20(viewUtils: import4.ViewUtils, parentInjector: import5.Injector, declarationEl: import3.AppElement): import1.AppView<import0.Page2>;
export declare const ApiDemoAppNgFactory: import11.ComponentFactory<import0.ApiDemoApp>;
export declare function viewFactory_ApiDemoApp0(viewUtils: import4.ViewUtils, parentInjector: import5.Injector, declarationEl: import3.AppElement): import1.AppView<import0.ApiDemoApp>;
