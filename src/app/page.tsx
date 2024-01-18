import { Profile } from './components/Profile'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-6 sm:p-10'>
      <Profile />
    </main>
  )
}
