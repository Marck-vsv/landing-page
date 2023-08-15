import Image from "next/image"
import LogoImg from '@/assets/preto1-Recuperado.svg'

export function Brand () {
  return (
    <Image className="" src={LogoImg.src} alt="Logo Dr Tercio Camara" width={200} height={450}/>
  )
}