import { Brand } from './Brand'

export function Header () {
  return (
    <header className='mt-3 w-full z-40 relative'>
      <a href='/home' className="h-16 m-auto flex max-w-[1200px] flex-row">
        <Brand/>
      </a>
    </header>
  )
}
