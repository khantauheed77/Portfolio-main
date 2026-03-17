import React from 'react'

const Skills = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 relative overflow-hidden py-10'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-50'></div>
      
      <div className='max-w-6xl w-full relative z-10 space-y-8 md:space-y-12 border border-gray-600 rounded-2xl p-6 md:p-12 bg-zinc-900/30 backdrop-blur-sm shadow-2xl'>
        <div className='text-center space-y-6'>
          <p className='text-sky-400 font-medium tracking-wide text-sm uppercase'>WHAT I KNOW</p>
          <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent'>
            Skills
          </h1>
        </div>
        {/* Skills Grid */}
        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
          {/* Frontend Skills */}
          <div className="border border-gray-600 rounded-2xl p-4 md:p-8 bg-zinc-900/30 backdrop-blur-sm shadow-2xl hover:border-sky-400/50 transition-all duration-300 group cursor-pointer">
            <h2 className='text-sky-400 text-center text-lg md:text-xl font-semibold mb-6 md:mb-8 group-hover:text-sky-300 transition-colors'>Frontend Development</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
              {[
                { name: 'HTML5', icon: 'devicon-html5-plain colored' },
                { name: 'CSS3', icon: 'devicon-css3-plain colored' },
                { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
                { name: 'React', icon: 'devicon-react-original colored' },
                { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
                { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' }
              ].map((skill, index) => (
                <div key={index} className='flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/30 transition-all duration-300 hover:scale-105'>
                  <i className={`${skill.icon} text-2xl md:text-4xl cursor-pointer`}></i>
                  <span className='text-zinc-300 font-medium text-sm md:text-lg'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="border border-gray-600 rounded-2xl p-4 md:p-8 bg-zinc-900/30 backdrop-blur-sm shadow-2xl hover:border-sky-400/50 transition-all duration-300 group cursor-pointer">
            <h2 className='text-sky-400 text-center text-lg md:text-xl font-semibold mb-6 md:mb-8 group-hover:text-sky-300 transition-colors'>Tools & Technologies</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
              {[
                { name: 'Git & GitHub', icon: 'devicon-git-plain colored' },
                { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
                { name: 'npm/yarn', icon: 'devicon-npm-original-wordmark colored' },
                { name: 'Figma', icon: 'devicon-figma-plain colored' },
                { name: 'Responsive Design', icon: 'devicon-css3-plain colored' }
              ].map((skill, index) => (
                <div key={index} className='flex items-center gap-4 p-4 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/30 transition-all duration-300 hover:scale-105'>
                  <i className={`${skill.icon} text-4xl cursor-pointer`} ></i>
                  <span className='text-zinc-300 font-medium text-lg'>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Currently Learning Section */}
        <div className="border border-gray-600 rounded-2xl p-4 md:p-8 bg-zinc-900/30 backdrop-blur-sm shadow-2xl hover:border-sky-400/50 transition-all duration-300 group mx-auto max-w-4xl">
          <h2 className='text-sky-400 text-center text-lg md:text-xl font-semibold mb-6 md:mb-8 group-hover:text-sky-300 transition-colors'>Currently Learning</h2>
          <div className='flex flex-wrap justify-center items-center gap-4 md:gap-8'>
            {[
              { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
              { name: 'Express.js', icon: 'devicon-express-original', color: 'text-white' },
              { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' }
            ].map((tech, index) => (
              <div key={index} className='flex flex-col items-center gap-2 md:gap-3 p-4 md:p-6 rounded-xl bg-zinc-800/30 hover:bg-zinc-700/30 transition-all duration-300 hover:scale-105 cursor-pointer border border-zinc-700 hover:border-sky-400/50'>
                <i className={`${tech.icon} ${tech.color || ''} text-3xl md:text-5xl cursor-pointer`}></i>
                <span className='text-zinc-300 text-xs md:text-sm font-medium text-center'>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
