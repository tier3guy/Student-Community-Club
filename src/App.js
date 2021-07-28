import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import About from './Components/AboutUs';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Contributers from './Components/Contributers';

function App() {
  return (
    <>
   <NavBar/>
    <div className="app">
      <Hero/>
      <About/>
      <Contact/>
    </div>
   <Footer/>
    </>
  );
}

export default App;
