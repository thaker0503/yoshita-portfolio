import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className="w-screen md:px-20 px-5 py-4 flex justify-between items-center bg-white shadow-md z-50 fixed">
        <div>
          <Image src="/logo.svg" alt="logo" width={128} height={77} />
        </div>
        <div className="md:flex items-center gap-10 hidden ">
          <a href="/#">Home</a>
          <a href="/#about">About</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#contact">Contact</a>
        </div>
        {/* create a mobile menu */}
        {!isOpen && <div className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>}
      </nav>
      {/* Create mobile menu sliding from the right side of the screen with an overlay */}
      {isOpen &&
        <div className="fixed md:hidden inset-0 bg-black bg-opacity-50 z-50 transition-all duration-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col items-end justify-start px-10 py-10 gap-5 h-full bg-white absolute inset-y-0 right-0 w-1/2 sm:w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setIsOpen(!isOpen)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <a href="/#"
              onClick={() => setIsOpen(!isOpen)}
            >Home</a>
            <a href="/#about"
              onClick={() => setIsOpen(!isOpen)}
            >About</a>
            <a href="/#portfolio"
              onClick={() => setIsOpen(!isOpen)}
            >Portfolio</a>
            <a href="/#contact"
              onClick={() => setIsOpen(!isOpen)}
            >Contact</a>
          </div>
        </div>}
    </>
  )
}

export default Navbar
