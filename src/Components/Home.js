import Hero from './Hero';
import About from './AboutUs';
import Contact from './Contact';
import NavBar from './NavBar';
import Footer from './Footer';

function Home() {
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

export default Home;