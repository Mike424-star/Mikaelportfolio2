import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Skills from './components/Skills'
import Home from './components/Home'


const App = () => {
  return(
  <div className="App">
  < Navbar />
  < Home />
   <About />
  < Skills />
  < Education />
  < Contact />
  </div>
  );
}

export default App;
