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
    sizu: (
      <svg viewBox='0 0 70 88' className='w-10'>
        <path
          d='m23,63.5c2.9-1.9,6-3.8,9.5-4.2s7.5,1.2,8.6,4.5c1.5,4.2-2.2,8.4-5.8,11-3.4,2.5-7.1,4.6-11.2,5.6-4.1,1-8.6.7-12.3-1.3-4.3-2.4-6.9-7-7.9-11.8s-.4-9.7.4-14.5C7.4,36,14.5,19.7,26.2,7.3c2.5-2.7,6.1-5.4,9.6-4,3.4,1.4,4.2,5.8,4.1,9.5-.3,11.3-3.3,22.4-8.7,32.3-.7,1.2-1.4,2.5-2.6,3.3s-2.8,1.1-4,.4c-2.2-1.4-1.3-4.9.3-7,3.4-4.8,8.2-8.4,13.8-10.4,3.9-1.4,8.6-1.7,11.7.9,2.4,2.1,3.2,5.5,2.7,8.6s-2.2,5.9-4.1,8.4c-1.4,1.8-3.7,3.6-5.6,2.4-2.2-1.3-1.1-4.7.4-6.8,2.7-4,6.3-8.2,11.1-8.8,5.2-.6,10.1,3.3,11.8,8.2s.7,10.3-1.5,15c-4,8.9-12,15.9-21.4,18.7'
          fill='none'
          stroke='black'
          stroke-width='3'
        ></path>
      </svg>
    ),
    none: <></>,
  }[icon || 'none']

  return (
    <div className=' h-[11rem] w-[20rem] hover:scale-105 duration-200 transition-all active:scale-100 font-Noto'>
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
            <h2 className={countTextLength(title) < 20 ? 'text-xl' : 'text-lg'}>{title}</h2>
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
