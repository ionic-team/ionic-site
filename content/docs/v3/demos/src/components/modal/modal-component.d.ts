import { ComponentFactoryResolver, Renderer, ViewContainerRef } from '@angular/core';
import { NavParams } from '../../navigation/nav-params';
import { ViewController } from '../../navigation/view-controller';
import { GestureController, BlockerDelegate } from '../../gestures/gesture-controller';
/**
 * @private
 */
export declare class ModalCmp {
    _cfr: ComponentFactoryResolver;
    _renderer: Renderer;
    _navParams: NavParams;
    _viewCtrl: ViewController;
    _viewport: ViewContainerRef;
    _bdDismiss: boolean;
    _enabled: boolean;
    _gestureBlocker: BlockerDelegate;
    constructor(_cfr: ComponentFactoryResolver, _renderer: Renderer, _navParams: NavParams, _viewCtrl: ViewController, gestureCtrl: GestureController);
    ionViewPreLoad(): void;
    /** @private */
    _load(component: any): void;
    _viewWillEnter(): void;
    _viewDidLeave(): void;
    /** @private */
    _setCssClass(componentRef: any, className: string): void;
    _bdClick(): Promise<any>;
    _keyUp(ev: KeyboardEvent): void;
    ngOnDestroy(): void;
}
