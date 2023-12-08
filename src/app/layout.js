import './globals.css'
import { Inter } from 'next/font/google'
import Header2 from '@/components/Navbar/Navbartest'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HeyBuddy',
  description: 'HeyBuddy Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header2/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
