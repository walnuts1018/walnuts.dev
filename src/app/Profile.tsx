import Image from 'next/image'
import { Heart } from './Heart'

export function Profile() {
  return (
    <div className='flex flex-col items-center justify-center space-y-4 font-Nunito'>
      <div className='rounded-full bg-gradient-to-br from-[#94e5d2] to-[#84E3F6] p-1 h-60'>
        <Image
          src='/walnuts.jpg'
          alt='Sample Image'
          width={500}
          height={500}
          style={{ objectFit: 'contain' }}
          className='rounded-full h-full w-full '
        />
      </div>

      <div className='flex flex-col items-center justify-center'>
        <p className='text-black font-extrabold text-4xl'>Walnuts</p>
        <Heart />
        <div className='space-y-2 mt-6'>
          <Icon src='/icons/sell_FILL0_wght400_GRAD0_opsz24.svg' alt='Name' text='Ryota Tawara' />
          <Icon
            src='/icons/twitter-x-line.svg'
            alt='X(Twitter)'
            text='@walnuts1018'
            link='https://twitter.com/walnuts1018'
          />
          <Icon
            src='/icons/github-fill.svg'
            alt='GitHub'
            text='walnuts1018'
            link='https://github.com/walnuts1018'
          />
          <Icon
            src='/icons/instagram-line.svg'
            alt='Instagram'
            text='@walnuts_1018'
            link='https://www.instagram.com/walnuts_1018/'
          />
          <Icon
            src='/icons/mail_FILL0_wght400_GRAD0_opsz24.svg'
            alt='Mail'
            text='r.juglans.1018@gmail.com'
            link='mailto:r.juglans.1018@gmail.com'
            fontSize='text-2xl'
          />
          <Icon
            src='/icons/KMClogo_trans.svg'
            alt='KMC'
            text='KMC 46th Chairman'
            link='https://kmc.gr.jp'
          />
          <Icon
            src='/icons/school_FILL0_wght400_GRAD0_opsz24.svg'
            alt='School'
            text='Kyoto Univ. / B2'
            link='https://www.s-ee.t.kyoto-u.ac.jp/ja'
          />
          <Icon
            src='/icons/favorite_FILL0_wght400_GRAD0_opsz24.svg'
            alt='School'
            text='Kubernetes / Proxmox VE / Golang'
            fontSize='text-2xl'
          />
        </div>
      </div>
    </div>
  )
}

function Icon({
  src,
  alt,
  text,
  link,
  fontSize = 'text-3xl',
}: {
  src: string
  alt: string
  text: string
  link?: string
  fontSize?: string
}) {
  return (
    <div
      className={`flex rounded-full px-3 py-1  transition-all ${
        link !== undefined ? 'hover:bg-gray-100 hover:shadow-md hover:border-gray-500' : ''
      }`}
    >
      <a
        target='_blank'
        rel='noopener noreferrer'
        className={`flex space-x-3 text-[#7f7f7f] font-bold items-center ${fontSize}`}
        href={link}
      >
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          style={{ objectFit: 'contain' }}
          className='min-w-[40px] max-w-[40px]'
        />
        <p>{text}</p>
      </a>
    </div>
  )
}
