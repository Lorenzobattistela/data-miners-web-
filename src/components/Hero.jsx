import React from 'react';
import Typed from 'react-typed';
import Picwish from '../assets/picwish.png'

const Hero = () => {
  return (
    <div className='text-white flex flex-col'>
      <div className='mt-[-4rem] w-full h-screen mx-auto text-center flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col justify-center items-center md:ml-[5rem] mt-[-10rem] md:mt-[-2rem]'>
          <h1 className={`text-[#00df9a] md:text-6xl sm:text-6xl text-4xl font-bold md:py-6`}>
            Cresça utilizando IA.
          </h1>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>
            Experimente nossa plataforma de IA agora mesmo e melhore seus resultados!
          </p>
          <Typed
          className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2'
            strings={['IA', 'Machine Learning', 'Deep Learning']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <button className='mt-[3rem] bg-[#00df9a] hover:bg-[#1af5b1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Comece agora!</button>
        </div>
 
        <img className='motion-safe:animate-fadeIn hidden md:block md:w-500 mx-auto md:mr-[5rem]' src={Picwish} alt="/" />
      </div>
     
    </div>
  );
};

export default Hero;
