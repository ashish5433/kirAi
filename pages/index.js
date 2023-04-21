import { Inter } from 'next/font/google'
import Navbar from './components/navbar'

// import p1 from './p2.jpg'

import Corousel from './components/corousel'
import Footer from './components/footer'
export default function Home() {
  return (
    <>
    <div className="nav1">
    <Navbar/>
    </div>
    <div className="cor1">
   <Corousel/>
   </div>

   <Footer/>
    </>
  )
}
