import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>It is an Airbnb clone</p>
            <p>Looks nice doesn't it</p>
            <p>Isaiah Morris Dev</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">HOST</h5>
            <p>Host your home</p>
            <p>Again not real</p>
            <p>Imagine if it was</p>
            <p>Pretty crazy right</p>
            <p>Airbnb Clone</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className="font-bold">SUPPORT</h5>
            <p>Email: isaiah749@gmail.com</p>
            <p>Fullstack Web Dev</p>
            <p>Or something of that nature</p>
            <p>Still learning of course</p>
            <p>Much love</p>
        </div>
    </div>
  )
}

export default Footer