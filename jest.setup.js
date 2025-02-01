import '@testing-library/jest-dom';

// Mock window.dataLayer
window.dataLayer = [];

// Mock gtag function
window.gtag = function(...args) {
  // Push to dataLayer for tracking
  window.dataLayer.push(args);
};

// Mock GA initialization
Object.defineProperty(window, 'ga', {
  writable: true,
  value: jest.fn(),
});

// Mock Next/third-parties GA initialization state
jest.mock('@next/third-parties/google', () => ({
  GoogleAnalytics: jest.fn(),
  sendGAEvent: jest.fn((...args) => {
    window.dataLayer.push({
      event: args[1],
      ...args[2],
    });
  }),
}));