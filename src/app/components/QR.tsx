'use client'
import QrCode2Icon from '@mui/icons-material/QrCode2'
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt'
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import './QR.css'

export default function QR({ className }: { className?: string }) {
  const [isShown, setIsShown] = useState(false)
  const [isRotated, setIsRotated] = useState(false)

  useEffect(() => {
    if (isShown) {
      disableBodyScroll(document.body)
    } else {
      enableBodyScroll(document.body)
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [isShown])

  return (
    <div className={className}>
      <button
        onClick={() => setIsShown(true)}
        title='show QR'
        className='w-14 h-14 sm:w-20 sm:h-20 rounded-full p-1 shadow-lg bg-gradient-to-br from-red-400 to-red-600  flex items-center justify-center hover:from-red-500 hover:to-red-600 hover:shadow-lg transition-all duration-200 outline-none focus:from-red-500 focus:to-red-600 focus:shadow-lg text-4xl sm:text-5xl'
      >
        <QrCode2Icon fontSize='inherit' className='text-white' />
      </button>
      {isShown ? (
        <Modal
          isOpen={isShown}
          onRequestClose={() => {
            setIsShown(false)
            setIsRotated(false)
          }}
          className='fixed h-[100svh] w-screen bg-black bg-opacity-50 flex flex-col items-center justify-center overflow-hidden'
          overlayClassName='fixed inset-0 bg-black bg-opacity-50 z-10'
        >
          <div
            className='fixed h-full w-full -z-10'
            onClick={() => {
              setIsShown(false)
              setIsRotated(false)
            }}
          ></div>
          <div className='flex justify-between items-center w-2/3 sm:w-3/4 md:w-1/2 xl:w-1/3 flex-col '>
            <div
              className='rounded-3xl bg-white p-4 shadow-md flex flex-col justify-center items-center transition-all duration-500 container z-30'
              style={{
                transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <div className='flex justify-center items-center'>
                <Image
                  src='/walnuts.jpg'
                  alt='favicon'
                  width={50}
                  height={50}
                  className='rounded-full object-contain'
                />
                <p className='bg-white text-black font-bold font-Nunito text-2xl px-1 text-center'>
                  Walnuts.dev
                </p>
              </div>

              <div className='flex justify-center items-center sm:w-2/3'>
                <Image src='/QR-walnuts.dev.svg' alt='walnuts.dev QR' width={500} height={500} />
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <button
              title='rotate QR'
              className='bg-white rounded-full border-white p-3 border-4 shadow-neumorphism-button active:shadow-neumorphism-button-pressed mt-10 w-[72px] h-[72px] outline-none'
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
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  )
}
