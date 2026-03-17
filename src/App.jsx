/** 
 * @copyright 2025 Mohammad Tauheed Khan
 * @license Apache-2.0
 */
import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='scroll-smooth'>
      <Header />
      <section id='home'><Home /></section>
      <section id='about'><About /></section>
      <section id='skills'><Skills /></section>
      <section id='projects'><Projects /></section>
      <section id='contact'><Contact /></section>

    </div>
  )
}

export default App
