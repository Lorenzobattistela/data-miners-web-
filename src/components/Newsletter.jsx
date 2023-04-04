import React from 'react';
import { useState } from "react";

const Newsletter = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    fetch("http://127.0.0.1:5000/form/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: event.target.email.value,
        name: "betatester",
        message: "betatester",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsSuccess(true);
          setErrorMessage("");
        } else {
          setIsSuccess(false);
          setErrorMessage(data.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setErrorMessage(error.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
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
            <form onSubmit={handleSubmit}>
              <input
                className='p-3 flex w-full rounded-md text-black'
                type='email'
                placeholder='Seu melhor Email'
                name="email"
              />
              <input type="hidden" value="betatester" name="name"/>
              <input type="hidden" value="betatester" name="message"/>
              <button className='text-sm bg-[#00df9a] hover:bg-[#1af5b1] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                {isSubmitting ? "Enviando" : "Notifique-me"}
              </button>
              {isSuccess && (
                <div className="text-green-500">Mensagem enviada com sucesso!</div>
              )}
              {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            </form>
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
