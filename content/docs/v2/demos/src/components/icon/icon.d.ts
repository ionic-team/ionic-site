import { ElementRef, Renderer } from '@angular/core';
import { Config } from '../../config/config';
import { Ion } from '../ion';
/**
 * @name Icon
 * @description
 * Icons can be used on their own, or inside of a number of Ionic components.
 * For a full list of available icons, check out the
 * [Ionicons docs](../../../../ionicons).
 *
 * One feature of Ionicons in Ionic is when icon names are set, the actual icon
 * which is rendered can change slightly depending on the mode the app is
 * running from. For example, by setting the icon name of `alarm`, on iOS the
 * icon will automatically apply `ios-alarm`, and on Material Design it will
 * automatically apply `md-alarm`. This allows the developer to write the
 * markup once while Ionic applies the appropriate icon based on the mode.
 *
 * @usage
 * ```html
 * <!-- automatically uses the correct "star" icon depending on the mode -->
 * <ion-icon name="star"></ion-icon>
 *
 * <!-- explicity set the icon for each mode -->
 * <ion-icon ios="ios-home" md="md-home"></ion-icon>
 *
 * <!-- always use the same icon, no matter what the mode -->
 * <ion-icon name="ios-clock"></ion-icon>
 * <ion-icon name="logo-twitter"></ion-icon>
 * ```
 *
 * @demo /docs/v2/demos/src/icon/
 * @see {@link /docs/v2/components#icons Icon Component Docs}
 *
 */
export declare class Icon extends Ion {
    /** @private */
    _iconMode: string;
    /** @private */
    _isActive: boolean;
    /** @private */
    _name: string;
    /** @private */
    _ios: string;
    /** @private */
    _md: string;
    /** @private */
    _css: string;
    /**
     * @input {string} The predefined color to use. For example: `"primary"`, `"secondary"`, `"danger"`.
     */
    color: string;
    /**
     * @input {string} The mode to apply to this component.
     */
    mode: string;
    constructor(config: Config, elementRef: ElementRef, renderer: Renderer);
    /**
     * @private
     */
    ngOnDestroy(): void;
    /**
     * @input {string} Icon to use. Will load the appropriate icon for each mode
     */
    name: string;
    /**
     * @input {string} Explicitly set the icon to use on iOS
     */
    ios: string;
    /**
     * @input {string} Explicitly set the icon to use on MD
     */
    md: string;
    /**
     * @input {bool} Whether or not the icon has an "active" appearance. On iOS an active icon is filled in or full appearance, and an inactive icon on iOS will use an outlined version of the icon same icon. Material Design icons do not change appearance depending if they're active or not. The `isActive` property is largely used by the tabbar.
     */
    isActive: boolean;
    /**
     * @private
     */
    _hidden: boolean;
    /**
     * @private
     */
    update(): void;
}
