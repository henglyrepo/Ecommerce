
import '../globals.css'
import { Poppins } from 'next/font/google'
import Provider from '../context/AuthContext'
import ToasterContext from '../context/ToasterContext'
import Header from './components/Header'
import Footer from './components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
 })

export const metadata = {
  title: 'Ecommerce App',
  description: 'Just Like Aliexpress',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='max-w-7xl mx-auto px-5'>
            <Provider>
              <ToasterContext />
              <Header />
              
              {children}
              
              <Footer />
            </Provider>
        </div>

      </body>
    </html>
  )
}
