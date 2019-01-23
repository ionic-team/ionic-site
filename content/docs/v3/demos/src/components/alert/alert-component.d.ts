import { ElementRef, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { GestureController, BlockerDelegate } from '../../gestures/gesture-controller';
import { NavParams } from '../../navigation/nav-params';
import { Platform } from '../../platform/platform';
import { ViewController } from '../../navigation/view-controller';
/**
 * @private
 */
export declare class AlertCmp {
    _viewCtrl: ViewController;
    _elementRef: ElementRef;
    private _renderer;
    private _platform;
    activeId: string;
    descId: string;
    d: {
        cssClass?: string;
        message?: string;
        title?: string;
        subTitle?: string;
        buttons?: any[];
        inputs?: any[];
        enableBackdropDismiss?: boolean;
    };
    enabled: boolean;
    hdrId: string;
    id: number;
    inputType: string;
    lastClick: number;
    msgId: string;
    subHdrId: string;
    mode: string;
    gestureBlocker: BlockerDelegate;
    constructor(_viewCtrl: ViewController, _elementRef: ElementRef, config: Config, gestureCtrl: GestureController, params: NavParams, _renderer: Renderer, _platform: Platform);
    ionViewDidLoad(): void;
    ionViewWillEnter(): void;
    ionViewDidLeave(): void;
    ionViewWillLeave(): void;
    ionViewDidEnter(): void;
    keyUp(ev: KeyboardEvent): void;
    btnClick(button: any): void;
    rbClick(checkedInput: any): void;
    cbClick(checkedInput: any): void;
    bdClick(): void;
    dismiss(role: any): Promise<any>;
    getValues(): any;
    ngOnDestroy(): void;
}
