'use client';

import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script 
        async 
        src="https://www.googletagmanager.com/gtag/js?id=G-VVU80YL13K"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VVU80YL13K');
          `
        }}
      />
    </>
  );
}