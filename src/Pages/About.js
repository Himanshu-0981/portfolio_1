import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import './About.css'

function About() {
  return (
    <>
      <main className="about-container">
        <div className="about-img">
          <img src="./Files/about_me2.png" alt="pic" />
        </div>
        <div className="about-desc">
          <h1>ABOUT ME</h1>
          <h3>RAHUL KAPOOR - WEB DEVLOPER</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exped Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, deserunt. ita vero reprehenderit atque nam! Nobis recusandae mollitia id fugit ad magni. ci sagittis eu volutpat odio facilisis mauris sit amet massa</p>

          <div className="about-social-media-icons">
              <BsTwitter className='twitter' />
              <FaLinkedin className='linkedin' />
              <AiFillGithub className='github' />
              <AiFillInstagram className='instagram' />
          </div>
        </div>
      </main>
    </>
  )
}

export default About;