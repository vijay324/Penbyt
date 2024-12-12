import { Gtag } from "@types/gtag.js";

declare global {
  interface Window {
    gtag: Gtag;
    dataLayer: any[];
  }
}

export {};
