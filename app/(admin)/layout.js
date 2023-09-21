
import '../globals.css'
import { Poppins } from 'next/font/google'
import Provider from '../context/AuthContext'
import ToasterContext from '../context/ToasterContext'
import SideMenu from './components/SideMenu'


const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
 })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Hello Admin',
}


export default function adminLayout() {
  return (
    <>
      <html lang="en">
          <body className={poppins.className}>
            <div className='max-w-screen mx-auto px-5'>
                <Provider>
                  <ToasterContext />
                  <SideMenu />
                </Provider>
            </div>
          </body>
        </html>
      </>
  )  
}