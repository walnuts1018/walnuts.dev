import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import AppleTouchIcon from '../../public/favicons/apple-touch-icon.png'
import Favicon16 from '../../public/favicons/favicon-16x16.png'
import Favicon32 from '../../public/favicons/favicon-32x32.png'
import Favicon from '../../public/favicons/favicon.ico'
import { LowerDecoration, UpperDecoration } from './components/Decoration'

const title = 'Walnuts.dev'
const description = 'I am Walnuts'
const url = 'https://walnuts.dev'

const NunitoFont = Nunito({
  subsets: ['latin'],
  variable: '--font-Nunito',
})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description: description,
  icons: [
    { rel: 'icon', url: Favicon.src },
    { rel: 'apple-touch-icon', url: AppleTouchIcon.src },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: Favicon32.src },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: Favicon16.src },
  ],
  openGraph: {
    title: title,
    description,
    url,
    siteName: title,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description,
    site: '@walnuts1018',
    creator: '@walnuts1018',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <head>
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='twitter:image' content='https://walnuts.dev/walnuts.jpg' />
      </head>
      <body className={`${inter.className} ${NunitoFont.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

function Header() {
  return (
    <header>
      <div className='flex justify-center w-full '>
        <div className='w-10/12 flex items-center justify-left h-12 md:h-16 text-black font-bold font-Nunito text-xl sm:text-2xl px-1'>
          <div className='h-full '>
            <UpperDecoration className='h-2/3' />
          </div>
          <a className='logo' href='#'>
            Walnuts.dev
          </a>
          <div className='h-full items-end flex'>
            <LowerDecoration className='pl-1 h-3/4' />
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full  border-0 '>
        <div className='w-10/12 h-[3px] bg-gray-200 px-20'></div>
      </div>
    </header>
  )
}
