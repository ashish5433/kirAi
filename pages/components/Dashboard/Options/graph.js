import React from 'react'
import Image from 'next/image';

export default function 
() {
    const countries = [["Russia", "ru"], ["Canada", "ca"], ["China", "cn"], ["United States", "us"], ["Brazil", "br"], ["Australia", "au"], ["India", "in"], ["Argentina", "ar"], ["Kazakhstan", "kz"], ["Algeria", "dz"]];
    const users_reached = [300, 342, 456, 532, 246, 778, 332, 124, 890, 900]
  return (
    <div>
            <div className='flex flex-col'>
              <div style={{ backgroundColor: "#00000015" }} className=' w-full p-2 mt-3'><h4 className='text-center '>Demograph</h4></div>
              <div className='-ml-3' id="piechart"></div>
              <div className='p-2 '>
                <div className='grid grid-cols-2'>
                  <div className='cols-start-1 col-end-2 bg-neutral-100'>
                    <h5 className='mb-4 text-center mt-3'>Countries</h5>
                    <hr />
                    {
                      countries.map((country) => {
                        return <span className='flex space-x-3 my-2 ml-5'><span><Image className='bg-black p-2 rounded-xl' width={48} height={48} src={`https://flagcdn.com/48x36/${country[1]}.png`} alt="..." /></span><span className='font-semibold mt-2'>{country[0]}</span></span>
                      })
                    }
                  </div>
                  <div className='cols-start-2 col-end-3 bg-neutral-100 '>
                    <h5 className='mb-4 text-center mt-3'>Users Reached</h5>
                    <hr />
                    {
                      users_reached.map((users) => {
                        return <span className='flex space-x-3 my-3 ml-10'><span className='font-semibold mt-2'>{users}</span></span>
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          
    </div>
  )
}
