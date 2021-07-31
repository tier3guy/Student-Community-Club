import Hero from './Hero';
import About from './AboutUs';
import Contact from './Contact';

function Home() {
  return (
    <>
      <div className="app">
        <Hero/>
        <About/>
        <Contact/>
      </div>
    </>
  );
}

export default Home;