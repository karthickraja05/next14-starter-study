import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/NavBar'
import Footer from '@/components/footer/Footer'
// import ClientServiceProvider from '@/components/ClientServiceProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default : 'Next Study App',
    template: '%s | Next Js 14'
  },
  description: 'Next.js study app, you can find all my files in github',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <NavBar/>
          {/* <ClientServiceProvider> */}
            {children}
          {/* </ClientServiceProvider> */}
          <Footer/>
        </div>
      </body>
    </html>
  )
}