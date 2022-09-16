import React from 'react'
import './Home.css'
import { IoIosArrowDown } from 'react-icons/io'
import Project from './Projects'
import About from './About'
import Contact from './Contact'
import Button from '../Button/Button'
import { FaDownload } from 'react-icons/fa'
import { saveAs } from 'file-saver'

function Home() {

  const handleResumeDownload = () => {
    saveAs(
      './Files/Resume.pdf',
      "resume.pdf"
    )
  }

  return (
    <>
      <main className='home'>
        <div className="left">
          <img src="./Files/image.png" alt="" />
        </div>
        <div className="right">
          <p>Hi there,</p>
          <p>I am a web devloper !! </p>
          <Button title="Resume" btnIcon={FaDownload} onhandleClick={handleResumeDownload} customClass="custom-btn-1" />
        </div>
        <IoIosArrowDown className='icon' />
      </main>
      <Project />
      <About />
      <Contact />
    </>
  )
}

export default Home