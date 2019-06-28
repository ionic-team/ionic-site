import '../../stencil.core';
export declare class IonicNewsletterSignup {
    placeholder: string;
    buttonText: string;
    darkMode: boolean;
    homepageMode: boolean;
    arrowMode: boolean;
    lg: boolean;
    kind: string;
    isLoading: boolean;
    hasSubmitted: boolean;
    email: string;
    hsFormIds: {
        default: string;
        podcast: string;
    };
    handleEmailChange(event: any): void;
    handleSubmit(e: any): void;
    hubspotIdentify(email: string): void;
    getFormClass(): string;
    render(): JSX.Element;
}
