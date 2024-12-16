/* eslint-disable camelcase */
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { AppSidebar, ThemeProvider } from '@/components'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'

const fontSans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const fontMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'TrueTasks',
  description: 'A minimalist task manager application',
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased overflow-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              <NextIntlClientProvider messages={messages}>
                {children}
              </NextIntlClientProvider>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
