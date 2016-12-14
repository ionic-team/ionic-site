import { AfterContentInit } from '@angular/core';
import { DeepLinker } from '../../navigation/deep-linker';
import { NavController } from '../../navigation/nav-controller';
/**
 * @name NavPush
 * @description
 * Directive to declaratively push a new page to the current nav
 * stack.
 *
 * @usage
 * ```html
 * <button ion-button [navPush]="pushPage"></button>
 * ```
 *
 * To specify parameters you can use array syntax or the `navParams`
 * property:
 *
 * ```html
 * <button ion-button [navPush]="pushPage" [navParams]="params">Go</button>
 * ```
 *
 * Where `pushPage` and `params` are specified in your component,
 * and `pushPage` contains a reference to a
 * component you would like to push:
 *
 * ```ts
 * import { LoginPage } from './login';
 *
 * @Component({
 *   template: `<button ion-button [navPush]="pushPage" [navParams]="params">Go</button>`
 * })
 * class MyPage {
 *   constructor(){
 *     this.pushPage = LoginPage;
 *     this.params = { id: 42 };
 *   }
 * }
 * ```
 *
 * @demo /docs/v2/demos/src/navigation/
 * @see {@link /docs/v2/components#navigation Navigation Component Docs}
 * @see {@link ../NavPop NavPop API Docs}
 *
 */
export declare class NavPush {
    _nav: NavController;
    /**
     * @input {Page} The Page to push onto the Nav.
     */
    navPush: any[] | string;
    /**
     * @input {any} Parameters to pass to the page.
     */
    navParams: {
        [k: string]: any;
    };
    constructor(_nav: NavController);
    /**
     * @private
     */
    onClick(): boolean;
}
/**
 * @private
 */
export declare class NavPushAnchor implements AfterContentInit {
    host: NavPush;
    linker: DeepLinker;
    _href: string;
    constructor(host: NavPush, linker: DeepLinker);
    updateHref(): void;
    ngAfterContentInit(): void;
}
