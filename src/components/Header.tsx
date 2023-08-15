import { Brand } from './Brand'

export function Header () {
  return (
    <header className='mt-4 w-full z-40 relative'>
      <div className="h-18 m-auto flex max-w-[1200px] flex-row">
        <Brand/>
      </div>
    </header>
  )
}
