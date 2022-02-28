import React from 'react'
import Image from 'next/image'

function MediumCard({img, title}) {
  return (
    <div className='cursor-pointer h-auto hover:scale-105 transform transition duration-300 ease-out'>
        {/* Image */}
        <div className="relative h-80 w-80">
            <Image src={img} className='rounded-lg' layout='fill' />
        </div>
        {/* Title */}
        <h3 className="text-2xl mt-2">{title}</h3>
    </div>
  )
}

export default MediumCard