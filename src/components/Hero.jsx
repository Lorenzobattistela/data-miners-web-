import React from 'react';
import Typed from 'react-typed';
import Picwish from '../assets/picwish.png'

const Hero = () => {
  return (
    <div className='text-white flex flex-col'>
      <div className='mt-[-4rem] w-full h-screen mx-auto text-center flex flex-row justify-center items-center'>
        <div className='flex flex-col justify-center items-center ml-[5rem]'>
          <h1 className='text-[#00df9a] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            Grow with data.
          </h1>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            LOREM IPSUM TEXT HERE
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <button className='mt-[3rem] bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
        <img className='w-500 mx-auto mr-[5rem]' src={Picwish} alt="/" />
      </div>
     
    </div>
  );
};

export default Hero;
