import React from 'react'

function Projects() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 relative overflow-hidden my-20'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-50'></div>
      <div className="">
         <div className='max-w-7xl w-full relative z-10 space-y-8 md:space-y-12 border border-gray-600 rounded-2xl p-6 md:p-12 bg-zinc-900/30 backdrop-blur-sm shadow-2xl'>
        <div className='text-center space-y-6'>
          <p className='text-sky-400 font-medium tracking-wide text-sm uppercase'>MY WORK</p>
          <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent'>
            Projects
          </h1>
        </div>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Project Card 1 - QuickShow */}
          <div className='relative bg-gradient-to-br from-zinc-900/40 to-zinc-800/40 border border-gray-600/50 rounded-2xl p-6 backdrop-blur-sm shadow-2xl hover:shadow-sky-500/20 hover:border-sky-400/70 transition-all duration-500 hover:scale-105 group overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-sky-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='relative z-10'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-3 h-3 bg-rose-400 rounded-full animate-pulse'></div>
                <h3 className='text-xl font-bold text-sky-400 group-hover:text-sky-300 transition-colors'>QuickShow</h3>
              </div>
              <p className='text-zinc-300 text-sm mb-6 leading-relaxed group-hover:text-zinc-200 transition-colors'>
                A React movie booking app to browse, book seats, manage favourites and view history — with an admin panel for shows.
              </p>
              <div className='mb-6 overflow-hidden rounded-xl relative'>
                <div className='absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <img
                  src='./assets/images/QuickShow.png'
                  alt='QuickShow Project'
                  className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110'
                />
              </div>
              <button
                onClick={() => window.open('https://quickshow-book-lilac.vercel.app/', '_blank')}
                className='w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25 flex items-center justify-center gap-2'
              >
                <span>View Project</span>
                <i className='fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform cursor-pointer'></i>
              </button>
            </div>
          </div>

          {/* Project Card 2 - Search Trip */}
          <div className='relative bg-gradient-to-br from-zinc-900/40 to-zinc-800/40 border border-gray-600/50 rounded-2xl p-6 backdrop-blur-sm shadow-2xl hover:shadow-sky-500/20 hover:border-sky-400/70 transition-all duration-500 hover:scale-105 group overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-sky-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='relative z-10'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-3 h-3 bg-emerald-400 rounded-full animate-pulse'></div>
                <h3 className='text-xl font-bold text-sky-400 group-hover:text-sky-300 transition-colors'>Search Trip</h3>
              </div>
              <p className='text-zinc-300 text-sm mb-6 leading-relaxed group-hover:text-zinc-200 transition-colors'>
                A responsive travel search application built with React, allowing users to find and book trips with ease in Kashmir.
              </p>
              <div className='mb-6 overflow-hidden rounded-xl relative'>
                <div className='absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <img
                  src='./assets/images/search-trip.png'
                  alt='Search Trip Project'
                  className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110'
                />
              </div>
              <button
                onClick={() => window.open('https://search-trip.vercel.app/', '_blank')}
                className='w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25 flex items-center justify-center gap-2'
              >
                <span>View Project</span>
                <i className='fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform cursor-pointer'></i>
              </button>
            </div>
          </div>

          {/* Project Card 3 - Skill Path */}
          <div className='relative bg-gradient-to-br from-zinc-900/40 to-zinc-800/40 border border-gray-600/50 rounded-2xl p-6 backdrop-blur-sm shadow-2xl hover:shadow-sky-500/20 hover:border-sky-400/70 transition-all duration-500 hover:scale-105 group overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-sky-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='relative z-10'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-3 h-3 bg-purple-400 rounded-full animate-pulse'></div>
                <h3 className='text-xl font-bold text-sky-400 group-hover:text-sky-300 transition-colors'>Skill Path</h3>
              </div>
              <p className='text-zinc-300 text-sm mb-6 leading-relaxed group-hover:text-zinc-200 transition-colors'>
                A comprehensive E-Learning platform designed to help users develop and track their skills through structured learning paths.
              </p>
              <div className='mb-6 overflow-hidden rounded-xl relative'>
                <div className='absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <img
                  src='./assets/images/Skill_Path.png'
                  alt='Skill Path Project'
                  className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110'
                />
              </div>
              <button
                onClick={() => window.open('https://skill-path-eight.vercel.app/', '_blank')}
                className='w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25 flex items-center justify-center gap-2'
              >
                <span>View Project</span>
                <i className='fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform cursor-pointer'></i>
              </button>
            </div>
          </div>

          {/* Project Card 4 - Brand Page */}
          <div className='relative bg-gradient-to-br from-zinc-900/40 to-zinc-800/40 border border-gray-600/50 rounded-2xl p-6 backdrop-blur-sm shadow-2xl hover:shadow-sky-500/20 hover:border-sky-400/70 transition-all duration-500 hover:scale-105 group overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-sky-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='relative z-10'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-3 h-3 bg-sky-400 rounded-full animate-pulse'></div>
                <h3 className='text-xl font-bold text-sky-400 group-hover:text-sky-300 transition-colors'>Brand Page</h3>
              </div>
              <p className='text-zinc-300 text-sm mb-6 leading-relaxed group-hover:text-zinc-200 transition-colors'>
                Modern Landing page for a fictional brand, showcasing responsive design and sleek UI elements, built in React.
              </p>
              <div className='mb-6 overflow-hidden rounded-xl relative'>
                <div className='absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <img
                  src='./assets/images/BrandPage.png'
                  alt='Brand Page Project'
                  className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 filter group-hover:brightness-110'
                />
              </div>
              <button
                onClick={() => window.open('https://brand-page-ten-mauve.vercel.app/', '_blank')}
                className='w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25 flex items-center justify-center gap-2'
              >
                <span>View Project</span>
                <i className='fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform cursor-pointer'></i>
              </button>
            </div>
          </div>

        </div>
      </div>
      </div>
     
    </div>
  )
}

export default Projects
