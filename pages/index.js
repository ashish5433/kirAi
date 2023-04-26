import Navbar from './components/navbar'
// import Product from './components/ProductPage'
import MidSection from './components/midSection'
import Corousel from './components/corousel'
import  ProgressBar  from 'react-progressbar-on-scroll'
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
      <Footer />
      <ProgressBar
        color='black'
        height={10}
        position='bottom'
      />
    </>
  )
}