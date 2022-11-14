import './intro.css'
import { Parallax } from 'react-scroll-parallax';

function Intro() {
  return (
    <div className="intro">
      <div className="intro-name">
        <Parallax translateX={['-150px', '100px']}>
          <h2 >HI</h2>
        </Parallax>
        <Parallax translateX={['260px', '-400px']}>
          <h1>I'm Kudrin</h1>
        </Parallax>
          <div className="mask-up"></div>
          <div className="mask-bot"></div>
      </div>
    </div>
  )
}

export default Intro