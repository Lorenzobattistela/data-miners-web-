import React, { useState } from 'react';
import '../index.css'

const Navbar = () => {
  return (
      <nav class="bg-black-800 scroll-smooth mt-[1.5rem]">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <h1 className='w-full mr-[2rem] text-3xl font-bold text-[#00df9a]'>Data Miners</h1>
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <a href="#" class="hover:bg-gray-700 hover:text-white text-white rounded-md px-3 py-2 text-base font-medium">Home</a>

                  <a href="#company" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">A empresa</a>

                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">Sobre nós</a>

                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">Contato</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">A empresa</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Sobre nós</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contato</a>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
