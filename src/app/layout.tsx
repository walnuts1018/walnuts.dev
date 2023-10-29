import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import Head from 'next/head'
import './globals.css'

import AppleTouchIcon from '../../public/favicons/apple-touch-icon.png'
import Favicon16 from '../../public/favicons/favicon-16x16.png'
import Favicon32 from '../../public/favicons/favicon-32x32.png'
import Favicon from '../../public/favicons/favicon.ico'

const NunitoFont = Nunito({
  subsets: ['latin'],
  variable: '--font-Nunito',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Walnuts.dev',
  description: "I'm Walnuts",
  icons: [
    { rel: 'icon', url: Favicon.src },
    { rel: 'apple-touch-icon', url: AppleTouchIcon.src },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: Favicon32.src },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: Favicon16.src },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <Head>
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <body className={`${inter.className} ${NunitoFont.variable} bg-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

function Header() {
  return (
    <header>
      <div className='flex justify-center w-full bg-white'>
        <div className='w-10/12 flex items-center justify-left h-16 bg-white text-black font-bold font-Nunito text-2xl px-1'>
          <a className='logo' href='#'>
            Walnuts.dev
          </a>
        </div>
      </div>
      <div className='flex justify-center w-full bg-white border-0 '>
        <div className='w-10/12 h-[3px] bg-gray-200 px-20'></div>
      </div>
    </header>
  )
}
