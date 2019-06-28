import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class IonicToggleButton {
    toggleSelected: EventEmitter;
    title: string;
    tab: string;
    selected: boolean;
    deselect(): void;
    select(): void;
    handleSelected(): void;
    hostData(): {
        class: {
            selected: boolean;
        };
    };
    render(): JSX.Element;
}
