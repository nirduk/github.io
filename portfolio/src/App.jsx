import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Intro />
        <Projects />
      </ParallaxProvider>
    </div>
  );
}

export default App;
