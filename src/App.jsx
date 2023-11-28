
import './App.css'
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills'

function App() {
  return (
    <div>
      <Header />
       <About />
      {/* <Projects />
      <Skills/>
      <Contact />
      <Footer />  */}
    </div>
  );
}

export default App;
