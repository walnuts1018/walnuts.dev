import Image from 'next/image'

export function UpperDecoration({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src='/upper-decoration.svg'
        alt='upper decoration'
        className='object-contain h-full w-full'
        width={100}
        height={100}
      />
    </div>
  )
}

export function LowerDecoration({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src='/lower-decoration.svg'
        alt='lower decoration'
        className='object-contain h-full w-full'
        width={100}
        height={100}
      />
    </div>
  )
}
