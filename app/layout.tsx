import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'NEXUS LAB — Connect Intelligence. Build Innovation.',
  description: 'NEXUS LAB is a living system of connected intelligence. A futuristic initiative from the IT faculty inspired by artificial neural networks.',
  keywords: 'NEXUS LAB, collective intelligence, innovation, neural network, IT faculty',
  openGraph: {
    title: 'NEXUS LAB',
    description: 'Connect Intelligence. Build Innovation.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#050816" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
