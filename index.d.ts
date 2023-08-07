import L from 'leaflet';

declare module 'leaflet' {
  namespace control {
    function fullscreen(options?: FullscreenOptions): FullscreenControl;
  }

  interface FullscreenOptions {
    position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    title?: string;
    content?: string;
    forceSeparateButton?: boolean;
    forcePseudoFullscreen?: boolean;
    fullscreenElement?: false | HTMLElement;
  }

  interface FullscreenControl {
    addTo(map: Map): FullscreenControl;
    remove(): void;
    link: HTMLAnchorElement;
  }
}
