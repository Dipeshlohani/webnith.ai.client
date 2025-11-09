import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import AnimatedBackground from './components/ui/AnimatedBackground'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://webnith.com'),
  title: 'Webnith — Web Design, Chatbots, Content & BI that Drive Growth',
  description: 'Design • Build • Automate. Webnith creates fast websites, AI chatbots, conversion-ready content, and business intelligence—delivered with clear scope and measurable outcomes.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://webnith.com/',
  },
  openGraph: {
    title: 'Webnith – Smart Websites & AI Solutions for Business Growth',
    description: 'Webnith helps businesses grow with modern web design, AI automation, and content strategy. Measurable results, transparent process, and ongoing support.',
    type: 'website',
    url: 'https://webnith.com/',
    images: ['https://webnith.com/img/og-home.jpg'],
    siteName: 'Webnith',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <AnimatedBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

