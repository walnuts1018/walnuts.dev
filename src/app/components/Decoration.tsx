import Image from 'next/image'

export function UpperDecoration({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className='relative left-0 w-full scale-[0.15] sm:scale-[0.2]'>
        <div
          className='w-[219.49px] h-[52.99px] left-[33.21px] top-0 absolute origin-top-left rotate-[25.98deg] bg-[rgba(148,229,210,0.75)] rounded-[20px]'
          style={{
            boxShadow:
              '4px 4px 4px 0px rgba(255, 255, 255, 0.56) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.15), -2px -4px 5px 0px rgba(37, 51, 48, 0.13) inset',
          }}
        />
        <div
          className='w-[200.27px] h-[50.54px] left-0 top-[134.70px] absolute origin-top-left rotate-[-42.27deg] bg-[rgba(148,229,210,0.75)] rounded-[20px]'
          style={{
            boxShadow:
              '2px 2px 4px 0px rgba(255, 255, 255, 0.45) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.15), -2px -4px 5px 0px rgba(37, 51, 48, 0.13) inset',
          }}
        />
        <div
          className='w-[219.49px] h-[52.99px] left-[58px] top-0 absolute origin-top-left rotate-[64.93deg] bg-[rgba(116,83,68,0.75)] rounded-[20px]'
          style={{
            boxShadow:
              '4px 2px 4px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
          }}
        />
      </div>
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
