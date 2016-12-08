import { ElementRef } from '@angular/core';
import { NavParams, PopoverController } from 'ionic-angular';
export declare class PopoverRadioPage {
    private navParams;
    background: string;
    contentEle: any;
    textEle: any;
    fontFamily: string;
    colors: any;
    constructor(navParams: NavParams);
    ngOnInit(): void;
    getColorName(background: any): string;
    setFontFamily(): void;
    changeBackground(color: any): void;
    changeFontSize(direction: string): void;
    changeFontFamily(): void;
}
export declare class ApiDemoPage {
    private popoverCtrl;
    content: ElementRef;
    text: ElementRef;
    constructor(popoverCtrl: PopoverController);
    presentRadioPopover(ev: UIEvent): void;
}
export declare class ApiDemoApp {
    root: typeof ApiDemoPage;
}
