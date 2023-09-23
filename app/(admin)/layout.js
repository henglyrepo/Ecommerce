import '../globals.css'
import { Poppins } from 'next/font/google'
import Provider from '../context/AuthContext'
import ToasterContext from '../context/ToasterContext'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
 })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Hello Admin',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
        <ToasterContext />
        {children}
        </Provider>
      </body>
    </html>
  )
}
