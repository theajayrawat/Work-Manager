import CustomNavbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastContainer />
        <CustomNavbar/>
        <div>{children}</div>
        <Footer/>
        </body>
    </html>
  )
}
