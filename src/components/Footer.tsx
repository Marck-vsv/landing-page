import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

import { Line } from './Line'

export function Footer () {
  return (
    <>
      <Line/>

      <div className="h-16 px-4 inline-flex justify-between m-auto w-full"> 
        <div id='Links' className="self-center">
          <ul className='m-0 p-0 list-none'>
            <li className='border-none inline-block mr-6 text-left'>
              <div className="text-base m-0 p-0 leading-5 tracking-tighter">
                <a href="/sobre" className='text-base text-slate-950 no-underline'>Sobre</a>
              </div>
            </li>

            <li className='border-none inline-block mr-6 text-left'>
              <div className="text-base m-0 p-0 leading-5 tracking-tighter">
                <a href="/" className='text-base text-slate-950 no-underline'>Contato</a>
              </div>
            </li>
          </ul>
        </div>

        <div id='Social' className="flex ml-2">
              <a href="https://www.instagram.com/odontoterciocamara/" target='_blank' className='p-2'>
                <AiOutlineInstagram size='40' className='text-slate-600 hover:text-white hover:bg-gradient-to-t hover:from-purple-600 hover:via-red-500 hover:to-yellow-300 rounded-xl transition duration-150 ease-out hover:ease-in'/>
              </a>
              <a href="https://wa.me/5586994432879" target='_blank' className='p-2'>
                <AiOutlineWhatsApp size='40' className='text-slate-600 hover:text-white hover:bg-gradient-to-t hover:from-lime-500 hover:via-lime-500 hover:to-lime-600 rounded-xl transition duration-150 ease-out hover:ease-in'/>
              </a>
        </div>
      </div>

      <div className="bg-[#f2f2f2]">
        <div className="m-auto max-w-screen-xl flex sm:items-center sm:px-4 sm:py-2 sm:flex-row justify-between">
          <div id='left-footerinfo'>
            <h2 className='text-[#999999] text-lg'>Tércio Câmara</h2>
            <p className='text-[#999999] text-xs'>
              Copyright © 2023, lorem ipsum dolor sit<br/>
              Endereço endereço endereço
            </p>
          </div>

          <div id='right-footerinfo' className="sm:mt-0 mt-6">
            <h2 className='text-[#999999] text-lg text-right'>Dúvidas?</h2>
            <p className='text-[#999999] text-xs mt-2 text-right'>
              Lorem ipsum dolor sit amet<br/>
              Lorem ipsum dolor sit amet con
            </p>
          </div>
        </div>
      </div>
    </>
  )
}