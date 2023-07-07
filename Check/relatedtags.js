import React from 'react'

export default function Relatedtags({tags}) {
  return (
    <div>
        <div className='bg-trans-black relative h-12 hover:h-max border-b-1 hover: delay-200 '>
            <div className='flex flex-wrap'>{
                tags.map((item)=>{
                    return <div className='text-center px-3 py-1 bg-semi-white2 text-neutral-400 mx-1 my-2 pointer rounded-md'>{item}</div>
                })
            }</div>
        </div>
    </div>
  )
}
