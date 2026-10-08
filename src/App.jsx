
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Menu from './components/Menu';
import MobileActions from './components/MobileActions';
import Navbar from './components/NavBar';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';

const App=() =>{
  return (
    <div className="noise bg-[#160d0d]">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <MobileActions />
    </div>
  );
}

export default App;