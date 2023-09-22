interface FullscreenOptions {
    position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    title?: string;
    titleCancel?: string;
    content?: string;
    forceSeparateButton?: boolean;
    forcePseudoFullscreen?: boolean;
    fullscreenElement?: false | HTMLElement;
}
export declare function FullscreenControl(props: FullscreenOptions): null;
