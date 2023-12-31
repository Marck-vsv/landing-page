﻿import Image from 'next/image'
import Placeholderimg from '@/assets/placeholder-img.png'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>  
      <main className=''>
        <Header/>

        <div className='w-full m-auto'>
          <div className='m-auto text-center pt-12'>
            <h1 className='font-semibold text-4xl'>Clinica Odontologica</h1>
          </div>

          <section className='overflow-hidden relative mb-1'>
            <div className="w-3/6 mt-12 mx-auto mb-0 text-center">
              <h2 className='font-semibold text-3xl opacity-80 text-inherit'>Placeholder aqui</h2>

              <p className='font-light text-lg mt-6 leading-7 antialiased opacity-80 text-inherit '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin ullamcorper tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vitae egestas erat. Vestibulum auctor massa sed massa vulputate, ut ultricies metus placerat. Proin a nunc et dui maximus porta.</p>
            </div>

            <div className="w-3/6 my-12 mx-auto py-0 px-4 text-center">
              <Image className='m-auto' src={Placeholderimg.src} alt='Placeholder Image' width={508} height={460}/>
            </div>
          </section>
        </div>

      </main>

      <Footer/>
    </>
  )
}
