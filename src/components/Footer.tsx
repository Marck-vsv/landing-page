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
                <a href="/" className='text-base text-slate-950 no-underline'>Sobre</a>
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
                <AiOutlineInstagram size='40' className='text-slate-600 '/>
              </a>
              <a href="https://wa.me/5586994432879" target='_blank' className='p-2'>
                <AiOutlineWhatsApp size='40' className='text-slate-600 '/>
              </a>
        </div>
      </div>
    </>
  )
}