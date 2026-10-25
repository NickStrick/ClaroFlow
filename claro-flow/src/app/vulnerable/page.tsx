'use client';

import { useSearchParams } from 'next/navigation';

export default function VulnerableDemoPage() {
  const searchParams = useSearchParams();
  const bioInput = searchParams.get('bio') || '<b>Default Bio</b>';

  // Storing sensitive tokens in localStorage (Insecure Client Storage)
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.secretKey123');
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>User Profile</h1>
      
      {/* 5. CROSS-SITE SCRIPTING / XSS (Triggers SAST) */}
      {/* Rendering unsanitized HTML/JS via dangerouslySetInnerHTML */}
      <div 
        dangerouslySetInnerHTML={{ __html: bioInput }} 
      />
    </div>
  );
}