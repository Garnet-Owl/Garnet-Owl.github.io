export interface GAEvent extends Record<string, unknown> {
  event: string;
  event_category?: string;
  event_label?: string;
  value?: number;
  button_name?: string;
  category?: string;
  page_path?: string;
  page_title?: string;
  id?: number;
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    ga?: (...args: unknown[]) => void;
  }
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== "undefined") {
  (window as { dataLayer: Object[] }).dataLayer =
    (window as { dataLayer?: Object[] }).dataLayer || [];
}

/**
 * Helper function to wait for GA events to be processed
 */
export const waitForAnalytics = (timeout = 1000) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

/**
 * Helper to find GA event in dataLayer
 */
export const findGAEvent = (
  eventName: string,
  params?: Partial<GAEvent>
): GAEvent | undefined => {
  const dataLayer = (window as { dataLayer?: Object[] }).dataLayer;
  if (!dataLayer) return undefined;

  return dataLayer?.find((item): item is GAEvent => {
    if (!isGAEvent(item)) return false;
    if (item.event !== eventName) return false;
    if (!params) return true;
    return Object.entries(params).every(([key, value]) => item[key] === value);
  });
};

/**
 * Type guard for GA events
 */
export const isGAEvent = (item: unknown): item is GAEvent => {
  if (!item || typeof item !== "object") return false;
  const candidate = item as Record<string, unknown>;
  return typeof candidate.event === "string";
};

/**
 * Helper to safely push to dataLayer
 */
export const pushToDataLayer = (event: GAEvent | unknown[]) => {
  if (typeof window !== "undefined") {
    const dataLayer = (window as { dataLayer?: Object[] }).dataLayer || [];
    dataLayer.push(event);
  }
};
