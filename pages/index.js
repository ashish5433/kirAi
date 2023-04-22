import Navbar from './components/navbar'

import MidSection from './components/midSection'
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
    <MidSection/>
   <Footer/>
    </>
  )
}
