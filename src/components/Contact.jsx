import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 relative overflow-hidden my-20'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-50'></div>
      
      <div className='max-w-4xl w-full relative z-10 space-y-8 md:space-y-12 border border-gray-600/50 rounded-2xl p-6 md:p-12 bg-gradient-to-br from-zinc-900/40 to-zinc-800/40 backdrop-blur-sm shadow-2xl hover:shadow-sky-500/10 transition-all duration-500'>
        <div className='text-center space-y-6'>
          <p className='text-sky-400 font-medium tracking-wide text-sm uppercase'>GET IN TOUCH</p>
          <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent'>
            Contact Me
          </h1>
        </div>
        
        <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
          {/* Contact Info */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-xl font-semibold text-sky-400 mb-4'>Let's Connect</h3>
              <p className='text-zinc-300 leading-relaxed'>
                I'm always open to discussing new opportunities, creative projects, or just having a chat about web development.
              </p>
            </div>
            
            <div className='space-y-4'>
              <div className='flex items-center gap-4 p-4 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/30 transition-all duration-300'>
                <i className='fas fa-envelope text-sky-400 text-xl cursor-pointer'></i>
                <span className='text-zinc-300'>tauheedkhan8324@gmail.com</span>
              </div>
              
              <div className='flex items-center gap-4 p-4 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/30 transition-all duration-300'>
                <i className='fas fa-phone text-sky-400 text-xl cursor-pointer'></i>
                <span className='text-zinc-300'>+91 9689107503</span>
              </div>
              
              <div className='flex items-center gap-4 p-4 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/30 transition-all duration-300'>
                <i className='fas fa-map-marker-alt text-sky-400 text-xl cursor-pointer'></i>
                <span className='text-zinc-300'>Aurangabad (MH), India</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className='flex gap-4 pt-4'>
              <a href='https://www.linkedin.com/in/mohammad-tauheed-khan-1994712a3/' target='_blank' rel='noopener noreferrer' className='p-4 rounded-xl bg-gradient-to-br from-zinc-800/40 to-zinc-700/40 hover:from-zinc-700/50 hover:to-zinc-600/50 transition-all duration-300 hover:scale-110 border border-zinc-700/50 hover:border-blue-400/50 group'>
                <i className='fab fa-linkedin text-zinc-400 group-hover:text-blue-400 transition-colors cursor-pointer text-xl'></i>
              </a>
              <a href='https://github.com/khantauheed77' target='_blank' rel='noopener noreferrer' className='p-4 rounded-xl bg-gradient-to-br from-zinc-800/40 to-zinc-700/40 hover:from-zinc-700/50 hover:to-zinc-600/50 transition-all duration-300 hover:scale-110 border border-zinc-700/50 hover:border-gray-400/50 group'>
                <i className='fab fa-github text-zinc-400 group-hover:text-gray-300 transition-colors cursor-pointer text-xl'></i>
              </a>
              <a href='https://www.instagram.com/_khantauheed77/' target='_blank' rel='noopener noreferrer' className='p-4 rounded-xl bg-gradient-to-br from-zinc-800/40 to-zinc-700/40 hover:from-zinc-700/50 hover:to-zinc-600/50 transition-all duration-300 hover:scale-110 border border-zinc-700/50 hover:border-pink-400/50 group'>
                <i className='fab fa-instagram text-zinc-400 group-hover:text-pink-400 transition-colors cursor-pointer text-xl'></i>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className='space-y-6 mt-8 md:mt-12'>
            <form className='space-y-4'>
              <div>
                <input 
                  type='text' 
                  placeholder='Your Name'
                  className='w-full p-4 rounded-xl bg-zinc-800/30 border border-zinc-700 text-zinc-300 placeholder-zinc-500 focus:border-sky-400 focus:outline-none transition-colors'
                />
              </div>
              
              <div>
                <input 
                  type='email' 
                  placeholder='Your Email'
                  className='w-full p-4 rounded-xl bg-zinc-800/30 border border-zinc-700 text-zinc-300 placeholder-zinc-500 focus:border-sky-400 focus:outline-none transition-colors'
                />
              </div>
              
              <div>
                <textarea 
                  rows='5'
                  placeholder='Your Message'
                  className='w-full p-4 rounded-xl bg-zinc-800/30 border border-zinc-700 text-zinc-300 placeholder-zinc-500 focus:border-sky-400 focus:outline-none transition-colors resize-none'
                ></textarea>
              </div>
              
              <button 
                type='submit'
                className='w-full px-6 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-sky-500/25 flex items-center justify-center gap-2 group'
              >
                <span>Send Message</span>
                <i className='fas fa-paper-plane group-hover:translate-x-1 transition-transform cursor-pointer'></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact