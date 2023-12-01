import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FoodDoneRight',
  description: 'FoodDoneRight to be able to route incoming orders to the correct restaurants depending on predefined delivery area polygons and the customer’s shipping address',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-[url("/bg.jpg")] '} >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
