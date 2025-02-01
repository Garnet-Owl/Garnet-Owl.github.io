"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export default function AnalyticsDebug() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== "production") {
      console.log("🔍 Analytics Debug Information:");

      // Check GA initialization
      if (typeof (window as any).gtag === "function") {
        console.log("✅ Google Analytics (gtag) is initialized");
      } else {
        console.warn("⚠️ Google Analytics (gtag) is not initialized");
      }

      // Check dataLayer
      if (Array.isArray((window as any).dataLayer)) {
        console.log("✅ dataLayer is initialized");
        console.log("Current dataLayer:", (window as any).dataLayer);
      } else {
        console.warn("⚠️ dataLayer is not initialized");
      }

      // Send test event
      try {
        sendGAEvent("test_event", "debug_check", {
          timestamp: new Date().toISOString(),
        });
        console.log("✅ Test event sent successfully");
      } catch (error) {
        console.error("❌ Failed to send test event:", error);
      }
    }
  }, []);

  // Only render in development
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-gray-100 rounded shadow-lg max-w-sm">
      <h3 className="font-bold mb-2">Analytics Debug</h3>
      <button
        onClick={() => {
          sendGAEvent("test_event", "manual_test", {
            timestamp: new Date().toISOString(),
          });
          console.log("Manual test event sent");
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Send Test Event
      </button>
    </div>
  );
}
