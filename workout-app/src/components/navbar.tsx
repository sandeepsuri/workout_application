import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
<div className="fixed bottom-0 w-full h-24 px-14 py-5 bg-sky-900 justify-between items-end inline-flex z-10">
      <div className="flex-col justify-end items-center gap-1.5 inline-flex">
          <div className="text-white text-opacity-90 text-xs font-bold font-['Inter']">
            <Image
              className='mb-2'
              src="/Main-icon.svg"
              alt="header"
              width={34}
              height={34}
            />
            <center>Main</center>
          </div>
      </div>
      <div className="flex-col justify-end items-center gap-1.5 inline-flex">
          <div className="text-white text-opacity-80 text-xs font-normal font-['Inter']">
            <Image
              className='mb-2'
              src="/Feed-Icon.svg"
              alt="header"
              width={34}
              height={34}
            />
            <center>Feed</center>
          </div>
      </div>
      <div className="flex-col justify-end items-center gap-1.5 inline-flex">
          <div className="text-white text-opacity-80 text-xs font-normal font-['Inter']">
          <Image
              className='mb-2'
              src="/Me-Icon.svg"
              alt="header"
              width={34}
              height={34}
            />
            <center>Me</center>
          </div>
      </div>
    </div>
  )
}

export default Navbar 