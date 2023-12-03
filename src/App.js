import './index.css';
// importing react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// importing components
import HeroSection from './components/HeroSection';
import Exploration from './components/Exploration';
import About from './components/About';
import TraditionalFood from './components/TraditionalFood';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <HeroSection />
      <About />
      <TraditionalFood />
      <Exploration />
      <Footer />
    </div>
  );
}

export default App;
