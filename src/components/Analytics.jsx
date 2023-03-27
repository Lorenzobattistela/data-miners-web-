import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div id="company" className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>APIs que resolvem o seu problema</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Cresça seu negócio com IA agora</h1>
          <p>Utilizamos a IA para solucionar problemas complexos e oferecer soluções personalizadas. Nossos algoritmos inteligentes podem melhorar a eficiência de processos de negócios e automatizar tarefas manuais, permitindo que nossos clientes economizem tempo e recursos valiosos. Nosso compromisso com a excelência técnica, combinado com uma abordagem centrada no cliente, nos permite entregar soluções de IA inovadoras e eficazes para qualquer necessidade. Se você está procurando um parceiro confiável para ajudá-lo a implementar soluções de IA em sua empresa, a Data Miners é o lugar certo.</p>
          <button className='bg-black hover:bg-[#313131] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Comece agora</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
