export const GA_MEASUREMENT_ID = "G-CMC5L8CTN6";

// Declare types for window object
declare global {
  interface Window {
    gtag: typeof gtag;
    dataLayer: any[];
  }
}
