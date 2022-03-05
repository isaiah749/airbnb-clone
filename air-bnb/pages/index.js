import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

// passing explore data from the async function, it is destructured therefore we don't have to pass
// it as props.exploreData
export default function Home({ exploreData, cardsData }) {
  return (
    <div className='min-h-screen bg-gray-900 max-w-screen flex flex-col'>
      <Head>
        <title>AirBNB-Clone</title>
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl 2xl:mx-auto  sm:mx-0 px-8 2xl:px-0 sm:px-16">
        <section className="pt-5 2xl:-ml-[10rem]">
          <h2 className="text-3xl font-semibold text-white pb-2">Explore Nearby</h2>
          {/* Pull data from server - API endpoints */}
          
          {/* Mapping through exploreData */}
          {/* A key is a unique id, when react renders the list it will constant re-render unless a key is passed.

          - Curly braces destructure objects and data 
          - this is old code
          {exploreData.map(item => (
            <SmallCard
              key={item.img} 
              img={item.img} 
              location={item.location} 
              distance={item.distance} 
            />
          ))}
          
          - this is new code
          {exploreData.map(({img, distance, location}) => (
            <SmallCard 
              key = {img}
              img = {img}
              distance = {distance}
              location = {location}
            />
          ))}


          - Its okay with a couple of items (4 for example), but when having a lot of items it can be problematic, so the key solves this
          */}

          <div className="grid grid-cols-1 sm:grid-cols-2 text-white lg:grid-cols-3 mx-auto w-screen xl:grid-cols-4">
            {exploreData.map(({img, distance, location}) => (
              <SmallCard 
                key = {img}
                img = {img}
                distance = {distance}
                location = {location}
              />
            ))}
          </div>
          
          
          {/*  --- Notes ---
            - Static rendering is something that normally goes on the HomePage and is not likely to change any time soon

            - Server side rendering is stuff that is dispayed on the Homepage that is always changing based on the page rendering.
          */}
        </section>

        <section className="mx-auto text-white">
          <h2 className="text-4xl font-semibold 2xl:-ml-[10rem] py-8">Live Anywhere</h2>
          
          <div className="flex space-x-3 mx-auto overflow-scroll scrollbar-hide p-3 -ml-2">
            {cardsData.map(({img, title}) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard img='https://links.papareact.com/4cj' title='The Greatest Outdoors' description='Wishlist curated by Airbnb' buttonText='Get Inspired' />
      </main>
      
     
          <Footer />    

    </div>
  )
}

// This only works in the "pages" folder. This tells next.js that its going
// to do server rendering

// Here we are fetching information to finish the build of the page, this is pre-fetching the information and pass it as props to the component
export async function getStaticProps() {
  // Making request on the internet always call for an "await" (general for async functions)
  // This is all the data for the explore section
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json());
  // This goes to the link and takes the response and formats it as json
  // Then we return the variable as a prop (or props) to the page
  
  const cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json())
  
  
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}