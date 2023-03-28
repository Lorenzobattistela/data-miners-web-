import React from "react";

const Contact = () => {
    return(
        <div id="contact" className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <form action="#" method="post">
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="name">
                    Nome
                    </label>
                    <input type="text" class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-[#1AF4B1] focus:outline-none" id="exampleInput7"
                    placeholder="Nome"/>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="email">
                    Email
                    </label>
                    <input type="email" class="form-control block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-[#1AF4B1]  focus:outline-none" id="exampleInput8"
                    placeholder="Email"/>
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 font-bold mb-2" for="message">
                    Mensagem
                    </label>
                    <textarea class="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-[#1AF4B1]  focus:outline-none
                    " id="exampleFormControlTextarea13" rows="3" placeholder="Mensagem">
                    </textarea>
                </div>
                <div class="flex items-center">
                <button type="submit" class="
                w-full
                px-6
                py-2.5
                bg-[#00df9a]
                text-black
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-[#1AF4B1] hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out">Enviar</button>
                </div>
            </form>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='mb-[1.5rem] md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00df9a]'>Entre em contato</h1>
            </div>
            </div>
        </div>
    )
}

export default Contact;