import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar1 from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar1/>
    </div>
  )
}
