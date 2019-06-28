import '../../stencil.core';
export declare class IonicToggleTab {
    tab: string;
    hidden: boolean;
    hide(): void;
    show(): void;
    hostData(): {
        style: {
            display: string;
        };
    };
    render(): JSX.Element;
}
