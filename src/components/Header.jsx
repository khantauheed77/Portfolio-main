/** 
 * @copyright 2025 Mohammad Tauheed Khan
 * @license Apache-2.0
 */

import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-20 flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0 text-white px-6 shadow-md z-50">
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center">
          <h1>
            <a href="" className="logo">
            <img src="./assets/images/logo.svg" 
            width={40}
            height={40}
            alt="" />
          </a>
          </h1>
          <div className="flex items-center gap-4">
            <button className="menu-btn md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="material-symbols-rounded text-2xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
            <nav className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-6">
                <li><a href="#home" className="nav-link hover:text-sky-400 transition-colors">Home</a></li>
                <li><a href="#about" className="nav-link hover:text-sky-400 transition-colors">About</a></li>
                <li><a href="#skills" className="nav-link hover:text-sky-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="nav-link hover:text-sky-400 transition-colors">Projects</a></li>
              </ul>
            </nav>
          </div>
          <a href="#contact" className="hidden sm:block bg-sky-400 text-zinc-900 px-4 md:px-6 py-2 rounded-lg font-medium hover:bg-sky-300 transition-colors text-sm md:text-base">Contact</a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 w-full bg-zinc-900/95 backdrop-blur-sm z-40 md:hidden">
          <nav className="px-6 py-4">
            <ul className="space-y-4">
              <li><a href="#home" className="block py-3 px-4 text-white hover:text-sky-400 hover:bg-zinc-800/50 rounded-lg transition-all" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="block py-3 px-4 text-white hover:text-sky-400 hover:bg-zinc-800/50 rounded-lg transition-all" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#skills" className="block py-3 px-4 text-white hover:text-sky-400 hover:bg-zinc-800/50 rounded-lg transition-all" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" className="block py-3 px-4 text-white hover:text-sky-400 hover:bg-zinc-800/50 rounded-lg transition-all" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
              <li><a href="#contact" className="block py-3 px-4 bg-sky-400 text-zinc-900 rounded-lg font-medium hover:bg-sky-300 transition-colors text-center" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Header
