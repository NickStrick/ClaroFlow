import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import db from '@/lib/db'; // hypothetical db instance

// 1. HARDCODED SECRETS (Triggers Aikido Secrets Detector)
const AWS_SECRET_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLEkey1234567890Secret";
const NEXT_PUBLIC_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC...\n-----END PRIVATE KEY-----";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const username = searchParams.get('username') || '';
  const domain = searchParams.get('domain') || '';

  // 2. SQL INJECTION / UNSANITIZED DB QUERY (Triggers SAST)
  // Concatenating raw query params directly into SQL string
  const rawQuery = `SELECT * FROM users WHERE username = '${username}' AND role = 'admin'`;
  const users = await db.raw(rawQuery);

  // 3. COMMAND INJECTION (Triggers SAST - High Severity)
  // Passing unsanitized user input directly to child_process.exec
  if (domain) {
    exec(`nslookup ${domain}`, (error, stdout) => {
      console.log('DNS Lookup Output:', stdout);
    });
  }

  // 4. INSECURE REDIRECT / OPEN REDIRECT (Triggers SAST)
  const redirectUrl = searchParams.get('redirectUrl');
  if (redirectUrl) {
    // Unvalidated user-supplied redirect target
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.json({ success: true, users });
}
//comment