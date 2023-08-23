import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Sobre () {
  return (
    <>
      <main className=''>
        <Header/>

        <div className='w-full m-auto'>
          <div className='m-auto text-center pt-12'>
            <h1 className='font-semibold text-4xl'>Sobre a Clinica</h1>
          </div>

          <section className='overflow-hidden mb-1'>
            <div className="w-3/6 mt-12 mx-auto mb-8 text-center">

              <p className='font-light text-left text-lg mt-6 leading-7 antialiased opacity-80 text-inherit '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin ullamcorper tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vitae egestas erat. Vestibulum auctor massa sed massa vulputate, ut ultricies metus placerat. Proin a nunc et dui maximus porta.</p>
              <p className='font-light text-left mt-2 text-lg leading-7 antialiased opacity-80 text-inherit '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin ullamcorper tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vitae egestas erat. Vestibulum auctor massa sed massa vulputate, ut ultricies metus placerat. Proin a nunc et dui maximus porta.</p>
            </div>
          </section>
        </div>

      </main>

    <Footer/>
    </>
  )
}