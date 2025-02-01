import { sendGAEvent } from '@next/third-parties/google';
import { type GAEvent, isGAEvent, pushToDataLayer } from '../utils/test-utils';

describe('Google Analytics Integration', () => {
  beforeEach(() => {
    // Initialize dataLayer
    (window as any).dataLayer = [];
    
    // Initialize gtag
    window.gtag = function(...args: any[]) {
      pushToDataLayer(args);
    };
  });

  it('should initialize dataLayer', () => {
    expect((window as any).dataLayer).toBeDefined();
    expect(Array.isArray((window as any).dataLayer)).toBe(true);
  });

  it('should track custom events', async () => {
    const testEvent: GAEvent = {
      event: 'test_event',
      button_name: 'contact_me',
      category: 'engagement'
    };

    // Send test event
    sendGAEvent('button_click', testEvent.event, {
      button_name: testEvent.button_name,
      category: testEvent.category
    });

    // Wait for next tick to allow async operations to complete
    await new Promise(resolve => setTimeout(resolve, 0));

    // Check if event was tracked
    const foundEvent = (window as any).dataLayer?.find((item: any): item is GAEvent => 
      isGAEvent(item) && 
      item.event === testEvent.event && 
      item.button_name === testEvent.button_name
    );

    expect(foundEvent).toBeTruthy();
  });

  it('should track pageviews', () => {
    // Simulate page navigation
    const mockPageview: GAEvent = {
      event: 'page_view',
      page_path: '/test-page',
      page_title: 'Test Page'
    };
    
    pushToDataLayer(mockPageview);

    // Verify pageview was tracked
    const foundPageview = (window as any).dataLayer?.find((item: any): item is GAEvent =>
      isGAEvent(item) &&
      item.event === mockPageview.event &&
      item.page_path === mockPageview.page_path
    );

    expect(foundPageview).toEqual(mockPageview);
  });

  it('should handle multiple events', async () => {
    const events: GAEvent[] = [
      { event: 'button_1', id: 1 },
      { event: 'button_2', id: 2 }
    ];

    // Send multiple events
    events.forEach(event => {
      sendGAEvent('click', event.event, { id: event.id });
    });

    // Wait for next tick
    await new Promise(resolve => setTimeout(resolve, 0));

    // Verify all events were tracked
    const dataLayer = (window as any).dataLayer;
    expect(dataLayer?.length).toBeGreaterThanOrEqual(events.length);
  });

  it('should include correct event parameters', async () => {
    const testEvent: GAEvent = {
      event: 'test',
      event_category: 'test_category',
      event_label: 'test_label',
      value: 1
    };

    sendGAEvent('custom_event', testEvent.event, {
      event_category: testEvent.event_category,
      event_label: testEvent.event_label,
      value: testEvent.value
    });

    // Wait for next tick
    await new Promise(resolve => setTimeout(resolve, 0));

    // Verify event parameters
    const foundEvent = (window as any).dataLayer?.find((item: any): item is GAEvent =>
      isGAEvent(item) &&
      item.event === testEvent.event &&
      item.event_category === testEvent.event_category &&
      item.event_label === testEvent.event_label &&
      item.value === testEvent.value
    );

    expect(foundEvent).toBeTruthy();
  });
});