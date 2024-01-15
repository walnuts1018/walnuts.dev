'use client'
import QrCode2Icon from '@mui/icons-material/QrCode2'
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt'
import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'

export default function QR() {
  const [isShown, setIsShown] = useState(false)
  const [isRotated, setIsRotated] = useState(false)

  if (!isShown) {
    return (
      <button
        onClick={() => setIsShown(true)}
        title='show QR'
        className='rounded-full p-1 shadow-md bg-gradient-to-br from-red-400 to-red-600 w-12 h-12 flex items-center justify-center hover:from-red-500 hover:to-red-600 hover:shadow-lg transition-all duration-200'
      >
        <QrCode2Icon fontSize='large' className='text-white' />
      </button>
    )
  }

  return (
    <Modal
      isOpen={isShown}
      onRequestClose={() => setIsShown(false)}
      className='fixed h-screen w-screen bg-black bg-opacity-50 flex items-center flex-col justify-center overflow-hidden'
      overlayClassName='fixed inset-0 bg-black bg-opacity-50'
    >
      <div className='fixed h-full w-full -z-10' onClick={() => setIsShown(false)}></div>
      <div
        className='rounded-3xl bg-white p-4 shadow-md w-2/3 flex flex-col justify-center items-center transition-all duration-500'
        style={{
          transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
        }}
      >
        <div className='flex justify-center items-center'>
          <Image src='/walnuts.jpg' alt='favicon' width={50} height={50} className='rounded-full' />
          <p className='bg-white text-black font-bold font-Nunito text-2xl px-1 text-center'>
            Walnuts.dev
          </p>
        </div>

        <div className='flex justify-center items-center sm:w-1/2'>
          <Image src='/QR-walnuts.dev.png' alt='walnuts.dev QR' width={500} height={500} />
        </div>
      </div>

      <button
        title='rotate QR'
        className='fixed bg-white rounded-full border-white p-4 border-4 shadow-neumorphism-button active:shadow-neumorphism-button-pressed mt-10 w-[72px] h-[72px] bottom-20'
        onClick={() => setIsRotated((prev) => !prev)}
      >
        <ScreenRotationAltIcon
          className='text-[#83dbd6] w-full h-full'
          fontSize='large'
          style={{
            transform: isRotated ? 'rotate(360deg)' : 'rotate(0deg)',
            transition: 'transform 0.5s ease-in-out',
          }}
        />
      </button>
    </Modal>
  )
}
