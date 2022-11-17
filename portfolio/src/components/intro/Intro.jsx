import './intro.css'
import { Parallax } from 'react-scroll-parallax';

function Intro() {
  return (
    <div className="intro">
      <div className="intro-name">
        <Parallax
          translateX={['-150px', '100px']}
          opacity={[2.5, 0, 'easeInOut']}
        >
          <h2 >HI</h2>
        </Parallax>
        <Parallax
          translateX={['260px', '-400px']}
          opacity={[1.3, 0, 'easeInOut']}
        >
          <h1>I'm Kudrin</h1>
        </Parallax>
        <div className="mask-up"></div>
        <div className="mask-bot"></div>
      </div>
    </div>
  )
}

export default Intro