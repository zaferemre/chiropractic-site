import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host') || '';
  
  // Desteklenen domain'ler
  const domains = {
    'chirocare.tr': 'https://www.chirocare.tr',
    'www.chirocare.tr': 'https://www.chirocare.tr',
    'ahmetburakbayir.com': 'https://www.ahmetburakbayir.com',
    'www.ahmetburakbayir.com': 'https://www.ahmetburakbayir.com',
  };

  // Ana domain'i belirle (www olmadan)
  let baseDomain = host.replace('www.', '');
  if (baseDomain === 'chirocare.tr') {
    baseDomain = 'chirocare.tr';
  } else if (baseDomain === 'ahmetburakbayir.com') {
    baseDomain = 'ahmetburakbayir.com';
  }

  // Canonical URL'i oluştur
  const canonicalUrl = `https://www.${baseDomain}${pathname}`;

  // Response'u al
  const response = NextResponse.next();

  // Canonical link'i response header'ına ekle
  response.headers.set('Link', `<${canonicalUrl}>; rel="canonical"`);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};



