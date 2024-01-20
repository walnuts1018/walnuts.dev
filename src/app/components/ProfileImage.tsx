'use client'
import CloseIcon from '@mui/icons-material/Close'
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import './ProfileImage.css'

export default function ProfileImage() {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (isExpanded) {
      disableBodyScroll(document.body)
    } else {
      enableBodyScroll(document.body)
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [isExpanded])

  return (
    <>
      <div className='rounded-full bg-gradient-to-br from-[#94e5d2] to-[#84E3F6] p-1 h-full w-full'>
        <div className='rounded-full h-full w-full bg-white overflow-hidden'>
          <Image
            src='/optimized-walnuts.jpg'
            alt='walnuts icon'
            width={256}
            height={256}
            className='rounded-full h-full w-full cursor-pointer  object-contain'
            priority={true}
            onClick={() => {
              setIsExpanded(true)
            }}
          />
        </div>
      </div>
      {isExpanded ? (
        <Modal
          isOpen={isExpanded}
          onRequestClose={() => {
            setIsExpanded(false)
          }}
          className='fixed h-[100svh] w-screen bg-black bg-opacity-50 flex items-center justify-center overflow-hidden p-2'
          overlayClassName='fixed inset-0 bg-black bg-opacity-70 z-10'
          appElement={document.body}
        >
          <div
            className='fixed h-full w-full -z-10'
            onClick={() => {
              setIsExpanded(false)
            }}
          ></div>
          <div className='rounded-full relative profile-image h-[80vmin]'>
            <Image
              src='/walnuts.jpg'
              alt='walnuts icon'
              width={1024}
              height={1024}
              className=' h-full w-full rounded-full'
            />
          </div>
          <button
            title='close image expand'
            className='absolute top-4 right-4 text-4xl'
            onClick={() => setIsExpanded(false)}
          >
            <CloseIcon fontSize='inherit' className='text-white' />
          </button>
        </Modal>
      ) : (
        <></>
      )}
    </>
  )
}
