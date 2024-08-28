import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH bAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-200 px-3'>
        <Image src="/search.png" alt='' width={14} height={14} />
        <input type='text' placeholder='Search' />
      </div>

      <div className='flex items-center gap-5'>
        <div className='flex items-center justify-center cursor-pointer bg-gray-200 rounded-full w-7 h-7'>
          <Image src="/message.png" alt='' width={20} height={20} />
        </div>
        <div className='relative flex items-center justify-center cursor-pointer bg-gray-200 rounded-full w-7 h-7'>
          <Image src="/announcement.png" alt='' width={20} height={20} />
          <div className='absolute -top-3 -right-3 w-4 h-4 flex items-center justify-center bg-amber-500 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>Michelle</span>
          <span className='text-[9px] text-gray-500 text-right'>Admin</span>
        </div>
        <Image src="/avatar.png" alt='' width={32} height={32} className='rounded-full' />
      </div>

    </div>
  )
}

export default Navbar