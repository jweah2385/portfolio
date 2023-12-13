
import './App.css'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Home from './pages/Home/Home'

function App() {
  return (
     <div>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
