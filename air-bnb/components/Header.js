import React from 'react'
import Image from 'next/image'


function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        {/* Left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image src='https://links.papareact.com/qd3' layout='fill' objectFit='contain' objectPosition='left' />
        </div>
        {/* Middle */}
        <div className="flex items-center md:border-2 text-gray-600 placeholder-gray-400 rounded-full md:shadow-sm py-2">
            <input type="text" className='flex-grow text-gray-600 pl-5 bg-transparent outline-none' placeholder='Start your search' />
            <svg className="h-8 cursor-pointer hidden md:inline-flex md:mx-2 bg-red-400 rounded-full p-2" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        {/* Right */}
        <div className="flex items-center text-gray-500 space-x-4 justify-end">
            <p className="hidden md:inline cursor-pointer">Become a host</p>
            <svg className="h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                {/* Menu Icon */}
                <svg className="h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                {/* User Icon */}
                <svg className="h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
        </div>
    </header>
  )
}

export default Header