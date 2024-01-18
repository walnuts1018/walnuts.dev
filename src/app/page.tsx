import { Profile } from './components/Profile'
import QR from './components/QR'

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between p-6 sm:p-10'>
        <Profile />
      </main>
      <QR className='fixed bottom-0 right-0 z-10 p-4' />
    </>
  )
}
