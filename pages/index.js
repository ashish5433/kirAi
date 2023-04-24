import Navbar from './components/navbar'

import MidSection from './components/midSection'
import Corousel from './components/corousel'
import  ProgressBar  from 'react-progressbar-on-scroll'
import Footer from './components/footer'
import  ProgressBar  from 'react-progressbar-on-scroll'
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
<<<<<<< HEAD
   <Footer/>
   <ProgressBar
=======
      <Footer />
      <ProgressBar
>>>>>>> a18479f7005035aa087a8d126d294630a1da18eb
        color='black'
        height={10}
        position='bottom'
      />
    </>
  )
}