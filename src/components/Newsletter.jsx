import React from 'react';

const Newsletter = () => {
  return (
    <div id='newsletter' className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-3xl sm:text-3xl text-2xl font-bold py-2'>
            Quer ser um Beta Tester dos nossos produtos?
          </h1>
          <p>Inscreva o seu email e receba acesso antecipado aos nossos produtos e outras recompensas!</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Seu melhor Email'
            />
            <button className='text-sm bg-[#00df9a] hover:bg-[#1af5b1] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notifique-me
            </button>
          </div>
          <p>
            Nos importamos com a proteção dos seus dados. Leia nossa{' '}
            <a href='#'><span className='text-[#00df9a]'>Política de Privacidade.</span></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
