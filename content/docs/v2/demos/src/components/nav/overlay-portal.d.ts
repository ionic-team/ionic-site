import { ComponentFactoryResolver, ElementRef, NgZone, Renderer, ViewContainerRef } from '@angular/core';
import { App } from '../app/app';
import { Config } from '../../config/config';
import { DeepLinker } from '../../navigation/deep-linker';
import { GestureController } from '../../gestures/gesture-controller';
import { Keyboard } from '../../util/keyboard';
import { NavControllerBase } from '../../navigation/nav-controller-base';
import { TransitionController } from '../../transitions/transition-controller';
import { DomController } from '../../util/dom-controller';
/**
 * @private
 */
export declare class OverlayPortal extends NavControllerBase {
    constructor(app: App, config: Config, keyboard: Keyboard, elementRef: ElementRef, zone: NgZone, renderer: Renderer, cfr: ComponentFactoryResolver, gestureCtrl: GestureController, transCtrl: TransitionController, linker: DeepLinker, viewPort: ViewContainerRef, domCtrl: DomController);
    _overlayPortal: number;
}
