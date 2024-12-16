import { routing } from './i18n/routing'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware(routing)

export const config = {
  matcher: [
    '/',
    '/(pt|en)/:path*',
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
