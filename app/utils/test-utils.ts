export interface GAEvent {
  event: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: any;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    ga?: (...args: any[]) => void;
  }
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined') {
  (window as any).dataLayer = (window as any).dataLayer || [];
}

/**
 * Helper function to wait for GA events to be processed
 */
export const waitForAnalytics = (timeout = 1000) => 
  new Promise(resolve => setTimeout(resolve, timeout));

/**
 * Helper to find GA event in dataLayer
 */
export const findGAEvent = (eventName: string, params?: Record<string, any>): GAEvent | undefined => {
  const dataLayer = (window as any).dataLayer;
  if (!dataLayer) return undefined;
  
  return dataLayer.find((item: any): item is GAEvent => {
    if (!isGAEvent(item)) return false;
    if (item.event !== eventName) return false;
    if (!params) return true;
    return Object.entries(params).every(([key, value]) => item[key] === value);
  });
};

/**
 * Type guard for GA events
 */
export const isGAEvent = (item: any): item is GAEvent => {
  return item && typeof item === 'object' && typeof item.event === 'string';
};

/**
 * Helper to safely push to dataLayer
 */
export const pushToDataLayer = (event: GAEvent | any[]) => {
  if (typeof window !== 'undefined') {
    const dataLayer = (window as any).dataLayer || [];
    dataLayer.push(event);
  }
};