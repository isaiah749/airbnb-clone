import { useState } from 'react'
import Image from 'next/image'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker, dateRangePicker } from 'react-date-range'
import { useRouter } from 'next/dist/client/router';


function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numOfGuest, setNumOfGuest] = useState(1);
    // router is an object that allows us to redirecet the user to certain places
    const router = useRouter()

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)   
    }

    // When the user clicks cancel in the search it will clear the search bar causing it to close
    const resetInput = () => {
       setSearchInput('') 
    }

// not destructuring this because it is simpler to understand
// "selectionRange" will get passed into the "datePicker" as an array
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    // why user router over link? because in the url you are able to pass a query that will search for certain results. when the link is shared the person who receives the link will be able to see the information that the sender intended for them to send

    // "toISOString" allows you to pass the string representation of the object to the url and it will be used inside the url
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numOfGuest,
            }
        });
    }




  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-gray-900 border-red-400 border-b-2  shadow-md p-5 md:px-10'>
        {/* Left */}
        <div onClick={() => router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image src='https://links.papareact.com/qd3' layout='fill' objectFit='contain' objectPosition='left' />
        </div>

        {/* Middle */}
        <div className="flex items-center md:border-2 text-gray-600 placeholder-gray-400 rounded-full md:shadow-sm border-red-400 py-2">
            <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} 
            className='flex-grow text-gray-600 pl-5 bg-transparent outline-none' placeholder={placeholder || 'Start your search'} />
            <svg className="h-8 cursor-pointer hidden md:inline-flex md:mx-2 bg-red-400 rounded-full p-2" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>

        {/* Right */}
        <div className="flex items-center text-gray-500 space-x-4 justify-end">
            <p className="hidden md:inline cursor-pointer">Become a host</p>
            <svg className="h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            <div className="flex items-center space-x-2 border-2 border-red-400 p-2 rounded-full cursor-pointer">
                {/* Menu Icon */}
                <svg className="h-6"fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                {/* User Icon */}
                <svg className="h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
        </div>

        {searchInput && (
            <div className="flex flex-col col-span-3 mx-auto mt-5">
                <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#FD5B61']}
                    onChange={handleSelect}
                />
                <div className="flex">
                    <h2 className="font-semibold text-xl pl-2 flex-grow">Number of guests</h2>
                    {/* UserIcon SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <input 
                    value={numOfGuest}
                    onChange={(e) => setNumOfGuest(e.target.value)}
                    min={1}
                    type="number" 
                    className="w-12 pl-2 text-lg text-center -mt-2 outline-none text-red-400" />
                </div>
                <div className="flex mt-3">
                    <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                    <button onClick={search} className='flex-grow text-red-400'>Search</button>
                </div>
            </div>
        )}
        
    </header>
  )
}

export default Header