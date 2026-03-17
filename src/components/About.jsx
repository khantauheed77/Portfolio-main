import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 relative overflow-hidden my-20'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-50'></div>
      
      <div className='max-w-6xl w-full relative z-10 space-y-8 md:space-y-12 border border-gray-600/50 rounded-2xl p-6 md:p-12 bg-gradient-to-br from-zinc-900/40 to-zinc-800/40 backdrop-blur-sm shadow-2xl hover:shadow-sky-500/10 transition-all duration-500'>
        <div className='text-center space-y-6'>
          <p className='text-sky-400 font-medium tracking-wide text-sm uppercase'>GET TO KNOW MORE</p>
          <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent'>
            About Me
          </h1>
        </div>
        
        <div className='grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl blur-xl opacity-20 animate-pulse'></div>
            <img src="/assets/images/tauheedkhan2.jpg" alt="Mohammad Tauheed Khan" className='relative w-full h-[300px] sm:h-[400px] md:h-[560px] object-cover rounded-2xl shadow-2xl border-2 border-zinc-700 hover:scale-105 transition-transform duration-300' />
          </div>
          
          <div className='space-y-6'>
            <div className='text-base sm:text-lg text-zinc-300 leading-relaxed space-y-6'>
              <p>
                I'm a <span className='text-sky-400 font-semibold'>Frontend Developer</span> with strong skills in HTML, CSS, JavaScript, and React. I focus on creating clean, responsive, and intuitive user interfaces that work smoothly across all devices. I enjoy transforming ideas into functional designs and writing code that is both simple and efficient.
              </p>
              
              <p>
                With growing experience in modern tools and workflows, I constantly aim to improve the way users interact with the web. I pay attention to structure, layout, and aesthetics while ensuring performance and usability remain at the center of everything I build.
              </p>
              
              <p>
                I love learning new technologies, experimenting with creative UI patterns, and working on projects that challenge my thinking. My goal is to become a well-rounded developer who can blend technical skills with meaningful user experience to build impactful digital products.
              </p>
            </div>
            
            <div className='flex gap-6 text-center'>
              
            </div>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default About
