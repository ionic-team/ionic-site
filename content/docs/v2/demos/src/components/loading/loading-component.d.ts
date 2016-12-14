import { ElementRef, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { NavParams } from '../../navigation/nav-params';
import { ViewController } from '../../navigation/view-controller';
import { LoadingOptions } from './loading-options';
import { BlockerDelegate, GestureController } from '../../gestures/gesture-controller';
/**
* @private
*/
export declare class LoadingCmp {
    private _viewCtrl;
    private _config;
    private _elementRef;
    d: LoadingOptions;
    id: number;
    showSpinner: boolean;
    durationTimeout: number;
    gestureBlocker: BlockerDelegate;
    constructor(_viewCtrl: ViewController, _config: Config, _elementRef: ElementRef, gestureCtrl: GestureController, params: NavParams, renderer: Renderer);
    ngOnInit(): void;
    ionViewWillEnter(): void;
    ionViewDidLeave(): void;
    ionViewDidEnter(): void;
    dismiss(role: any): Promise<any>;
    ngOnDestroy(): void;
}
