import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Intro />
        <Projects />
        <Contacts />
      </ParallaxProvider>
    </div>
  );
}

export default App;
