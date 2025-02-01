'use client';

import { useEffect, useState } from 'react';

export default function DebugInfo() {
  const [debugInfo, setDebugInfo] = useState({
    mounted: false,
    path: '',
    href: '',
    origin: '',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    isGitHubPages: false,
  });

  useEffect(() => {
    setDebugInfo(prev => ({
      ...prev,
      mounted: true,
      path: window.location.pathname,
      href: window.location.href,
      origin: window.location.origin,
      isGitHubPages: window.location.hostname.includes('github.io'),
    }));
  }, []);

  if (!debugInfo.mounted) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '15px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      zIndex: 9999,
      fontSize: '12px',
      maxWidth: '400px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>Debug Info</h3>
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{JSON.stringify({
  path: debugInfo.path,
  href: debugInfo.href,
  origin: debugInfo.origin,
  basePath: debugInfo.basePath,
  isGitHubPages: debugInfo.isGitHubPages,
}, null, 2)}
      </pre>
    </div>
  );
}