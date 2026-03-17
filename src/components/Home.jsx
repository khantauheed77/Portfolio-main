/** 
 * @copyright 2025 Mohammad Tauheed Khan
 * @license Apache-2.0
 */

import React from 'react'
import ColourfulText from '@/components/ui/colourful-text'
import { Button } from '@/components/ui/stateful-button'

const Home = () => {
    return (
        <div className='min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-24 md:pt-0'>
            {/* Background gradient */}
            <div className='absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-50'></div>

            <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl w-full relative z-10'>
                <div className='flex-1 space-y-6'>
                    <div className='space-y-2'>
                        <p className='text-sky-400 font-medium tracking-wide'>WELCOME TO MY PORTFOLIO</p>
                        <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                            <ColourfulText text={`Hey, I'm Mohammad
        Tauheed Khan!`} />
                        </h1>
                    </div>

                    <p className='text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-2xl'>
                        An Enthusiastic Frontend-Developer passionate about crafting seamless web experiences and innovative solutions!
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                        <button className='px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-sky-500/25 flex items-center justify-center gap-2 group'>
                            <span>Download CV</span>
                            <i className='fas fa-download group-hover:animate-bounce cursor-pointer'></i>
                        </button>
                        <a href='#about' className='px-8 py-4 border-2 border-zinc-600/50 hover:border-sky-400/70 bg-zinc-900/30 backdrop-blur-sm text-zinc-300 hover:text-sky-400 font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-center flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-sky-500/10'>
                            <span>Scroll Down</span>
                            <i className='fas fa-arrow-down group-hover:animate-bounce cursor-pointer'></i>
                        </a>
                    </div>

                    <div className='flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-6'>
                        <div className='text-zinc-400 text-sm font-medium mb-2 w-full text-center lg:text-left'>Tech Stack:</div>
                            <div className='p-3 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110 group border border-zinc-700/50 hover:border-orange-400/50'>
                                <i className="devicon-html5-plain colored text-4xl cursor-pointer group-hover:animate-pulse"></i>
                            </div>
                            <div className='p-3 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110 group border border-zinc-700/50 hover:border-blue-400/50'>
                                <i className="devicon-css3-plain colored text-4xl cursor-pointer group-hover:animate-pulse"></i>
                            </div>
                            <div className='p-3 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110 group border border-zinc-700/50 hover:border-yellow-400/50'>
                                <i className="devicon-javascript-plain colored text-4xl cursor-pointer group-hover:animate-pulse"></i>
                            </div>
                            <div className='p-3 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110 group border border-zinc-700/50 hover:border-cyan-400/50'>
                                <i className="devicon-react-original colored text-4xl cursor-pointer group-hover:animate-spin"></i>
                            </div>
                            <div className='p-3 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110 group border border-zinc-700/50 hover:border-sky-400/50'>
                                <i className="devicon-tailwindcss-plain colored text-4xl cursor-pointer group-hover:animate-pulse"></i>
                            </div>
                            <div className='p-3 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110 group border border-zinc-700/50 hover:border-red-400/50'>
                                <i className="devicon-git-plain colored text-4xl cursor-pointer group-hover:animate-pulse"></i>
                            </div>

                    </div>
                </div>

                <div className='flex-shrink-0 relative order-first lg:order-last'>
                    <div className='absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl blur-xl opacity-20 animate-pulse'></div>
                    <img src="/assets/images/tauheedkhan.jpg" alt="Tauheed Khan" className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-100 lg:h-100 rounded-2xl object-cover shadow-2xl border-2 border-zinc-700 hover:scale-105 transition-transform duration-300' />
                </div>
            </div>
        </div>
    )
}

export default Home
