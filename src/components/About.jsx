import React from "react";
import ConceptData from '../assets/conceptdata.png'

const About = () => {
    return (
        <div id="about" className='w-full bg-black py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='mb-[1.5rem] md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00df9a]'>Sobre a Data Miners</h1>
            <p className="text-white">Nós somos uma empresa com ideias inovadoras sobre IA. Nossa missão é fornecer através da nossa IA, respostas especificas para o seu negócio, que você não consegue em nenhum outro lugar.
            <br></br>
            <br></br>
            Nossa equipe é formada por profissionais altamente qualificados e experientes, que estão comprometidos em fornecer o melhor atendimento e suporte possível para nossos clientes. Nós nos esforçamos para criar um ambiente de trabalho colaborativo e inclusivo, que incentiva a inovação e o crescimento pessoal e profissional.
            <br></br><br></br>
            Na Data Miners, estamos sempre buscando maneiras de melhorar e expandir nossos serviços e produtos para atender às necessidades em constante mudança de nossos clientes. Estamos ansiosos para continuar crescendo e evoluindo, mantendo sempre nosso compromisso com qualidade e excelência.
            <br></br><br></br>
            Obrigado(a) por visitar nosso site e por considerar a Data Miners como uma opção para suas necessidades. Não hesite em entrar em contato conosco se tiver alguma dúvida ou se precisar de mais informações sobre nossos serviços e produtos. Estamos sempre prontos para ajudar.</p>
          </div>
          <img className='w-[500px] mx-auto my-4' src={ConceptData} alt='/' />
          <a href="https://pt.vecteezy.com/vetor-gratis/conceito">Conceito Vetores por Vecteezy</a>
        </div>
      </div>
    )
}

export default About;