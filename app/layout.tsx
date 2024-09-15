import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: 'Dashboard',
    default: 'Name of the Application'
  },
  description: 'This is a dashboard',
  metadataBase: new URL('localhost:3000')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='antialiased bg-slate-950'>
        {children}
      </body>
    </html>
  )
}