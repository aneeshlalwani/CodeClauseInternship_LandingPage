import './App.css';
// importing react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// importing components
import HeroSection from './components/HeroSection';
import Exploration from './components/Exploration';
import About from './components/About';

function App() {
  return (
    <div>
      <HeroSection />
      <About />
      <Exploration />
    </div>
  );
}

export default App;
