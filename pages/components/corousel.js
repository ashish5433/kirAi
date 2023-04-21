
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
import p4 from './p4.jpg'
import Image from 'next/image'

export default function Corousel() {
  return (
     <div className='img-sliders'>
              
    <Carousel 
    autoPlay={true}
    showArrows={true}
    interval={4000}
    infiniteLoop={true}
    autoFocus={true} 
    stopOnHover={false}
>
        <div>
           <Image className='img-slider' src={p1} width={400}/>
            

        </div>
        
        <div>
           <Image  className='img-slider' src={p2} width={400}/>
            

        </div>
        
        <div>
           <Image className='img-slider' src={p3} width={400} />
         

        </div>
        
        <div>
           <Image  className='img-slider' src={p4} width={400}/>
          

        </div>
        
    </Carousel>
  </div>
  )
}
