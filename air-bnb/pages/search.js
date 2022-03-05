import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';


function Search({ searchResults }) {
    // importing router to be able to pull the data from the search query that the user searched
    const router = useRouter();

   

    // ES6 Destructuring
    const { location, startDate, endDate, numOfGuest } = router.query
    
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formatedStartDate} - ${formatedEndDate}`


  return (
    <div className=''>
        <Header placeholder={`${location} | ${range} | ${numOfGuest} guests`} />
        
        {/* Created at tailwind class component called "button" 
            - this can be found in the globals.css
        */}

        <main className="flex">
            <section className="flex-grow p-14 px-6">
                <p className="text-xs">300+ Stays - {range} - for {numOfGuest} guests</p>

                <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 items-center">
                    <p className="button shadow-lg">Cancellation Flexibility</p>
                    <p className="button shadow-lg">Types of place</p>
                    <p className="button shadow-lg">Price</p>
                    <p className="button shadow-lg">Rooms and beds</p>
                    <p className="button shadow-lg">More items</p>
                </div>

                <div className="flex flex-col">
                    {searchResults.map(({ img, location, title, description, star, price, total }) => (
                        <InfoCard
                        key={img} 
                        img = {img}
                        location={location}
                        title={title}
                        description={description} 
                        star={star}
                        price={price}
                        total={total}
                        />
                    ))}
                </div>
            </section>
            {/* Map Section */}
            {/* <section className="hidden xl:inline-flex xl:min-w-[600px]">
                <Map />
            </section> */}
        </main>

        <Footer />
    </div>
  )
}

export default Search


// We can pass "context" into "getServerSideProps" and get the data that we are passing in router
// Because this data is from a dummy API, we are using static props that aren't changing
// - but we are still pulling them from an API
export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());

    return {
        props: {
            searchResults,
        }
    }
}