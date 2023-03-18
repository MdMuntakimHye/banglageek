import React from 'react'
import {Home} from '../pages/index.js'
import Image from 'next/image'
import Head from 'next/head'
import banglageeklogo from '../images/banglageeklogo.jpg'
import rsideimage from '../images/homeRightSide.jpg'
import HeaderLink from '@/components/HeaderLink'
import FeedIcon from '@mui/icons-material/Feed';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ArrowForwardIosRounded } from '@mui/icons-material';
import { getProviders, signIn } from "next-auth/react";

function home({ providers }) {
  return (
    <div className=' space-y-10 relative'>
      <Head>
        <title>BeekBangla</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <header className='flex justify-around items-center py-4'>
            <div className="relative w-36 h-10">
                <Image priority src={banglageeklogo} objectFit="contain"></Image>

                
            </div>
            <div className='flex items-center sm:divide-x divide-gray-300'>
              <div className='hidden sm:flex space-x-8 pr-4'>
                <HeaderLink Icon={SearchOutlinedIcon} text='Search'/>
                <HeaderLink Icon={FeedIcon} text='Newsfeed'/>
                <HeaderLink Icon={PeopleRoundedIcon} text='Community'/>
                {/* <HeaderLink Icon/>
                <HeaderLink/> */}
              
              </div>
              {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
                </button>
              </div>
            </div>
          ))}
        </div>
        </header>
        <main className=' flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto'>
              <div className=' space-y-6 xl:space-y-8'>
                  <h1 className=' text-3xl md:text-5x1 text-gray-900 max-w-xl !leading-snug pl-4 xl:pl-0'>Welcome to the Geekbangla community</h1>
                  <div className=' space-y-10'>
                    <div className='intent'>
                      <h2 className=' text-xl'>Find a person you know</h2>
                      <ArrowForwardIosRounded className='text-grey-700' />
                      
                    </div>

                    <div className='intent'>
                      <h2 className=' text-xl'>Learn computer science</h2>
                      <ArrowForwardIosRounded className='text-grey-700' />
                      
                    </div>

                    <div className='intent'>
                      <h2 className=' text-xl'>Develope your skills</h2>
                      <ArrowForwardIosRounded className='text-grey-700' />
                      
                    </div>
                  </div>
              </div>

              {/* <div className=' relative xl:w-[650px] xl:h-[650px] top-40 r-4 '>
                <Image className='rounded-2xl' src={rsideimage} priority />

              </div> */}
        </main>
    </div>
  )
}

export default home;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

