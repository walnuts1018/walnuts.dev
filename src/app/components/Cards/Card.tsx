import GitHubIcon from '@mui/icons-material/GitHub'
import Image from 'next/image'
import Link from 'next/link'
import { LowerDecoration, UpperDecoration } from '../Decoration'

export type CardTheme = {
  primaryColor: string
  secondaryColor: string
}

export const chocoMintTheme: CardTheme = {
  primaryColor: '#94E5D2',
  secondaryColor: '#745344',
}

export const pinkskyTheme: CardTheme = {
  primaryColor: '#8EF1FD',
  secondaryColor: '#F5BAE6',
}

export const githubTheme: CardTheme = {
  primaryColor: '#c2c2c2',
  secondaryColor: '#323232',
}

export const qiitaTheme: CardTheme = {
  primaryColor: '#5db212',
  secondaryColor: '#1f800e',
}

export const zennTheme: CardTheme = {
  primaryColor: '#80BFFA',
  secondaryColor: '#3ca8ff',
}

export const hatenaTheme: CardTheme = {
  primaryColor: '#bbbbbb',
  secondaryColor: '#22A9F0',
}

export function Card({
  title,
  description,
  image,
  icon,
  theme,
  href,
}: {
  title: string
  description?: string
  image?: string
  icon?: 'github' | 'zenn' | 'hatena' | 'sizu'
  theme?: CardTheme
  href: string
}) {
  const iconComponent = {
    github: (
      <div className='text-3xl items-center justify-center flex'>
        <GitHubIcon fontSize='inherit' />
      </div>
    ),
    zenn: <Image src='/icons/zenn.svg' alt='zenn' width={30} height={30} />,
    hatena: (
      <Image
        src='/icons/hatenablog-logo.svg'
        alt='hatena'
        width={45}
        height={45}
        className='-m-2'
      />
    ),
    sizu: <Image src='/icons/sizu.jpg' alt='hatena' width={35} height={35} className='-m-2' />,
    none: <></>,
  }[icon || 'none']

  return (
    <div className=' h-[13rem] w-[22rem] p-5 hover:scale-105 duration-200 transition-all active:scale-100 font-Noto'>
      <Link
        href={href}
        className='flex justify-center items-center h-full rounded-2xl relative bg-[#f6f7fa] cursor-pointer active:bg-[#e2e2e2] duration-200 transition-all'
        style={{
          boxShadow: '5px 5px 15px 2px #00000050, -4px -4px 10px 5px #ffffff90',
        }}
        target='_blank'
      >
        <UpperDecoration
          className='absolute top-0 left-0'
          innerClassName='scale-[0.3]'
          primaryColor={theme?.primaryColor}
          secondaryColor={theme?.secondaryColor}
        />
        <LowerDecoration
          className='absolute bottom-0 right-0 '
          innerClassName='scale-[0.9]'
          primaryColor={theme?.primaryColor}
          secondaryColor={theme?.secondaryColor}
        />
        <div className='flex flex-col justify-center h-full w-full px-5 gap-1 z-10'>
          <div className='flex justify-center items-center gap-2 pl-6 pr-2'>
            {iconComponent}
            <p className={countTextLength(title) < 20 ? 'text-xl' : 'text-lg'}>{title}</p>
          </div>
          {description && (
            <div className='w-full pr-11 pt-1'>
              <p
                className={`text-gray-500 
            ${countTextLength(description) < 50 ? 'text-sm' : 'text-xs'}`}
              >
                {description}
              </p>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

function countTextLength(text: string) {
  const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' })
  return [...segmenter.segment(text)].length
}
