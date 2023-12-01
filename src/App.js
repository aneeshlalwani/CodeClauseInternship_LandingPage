import './App.css';
// importing react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// importing components
import HeroSection from './components/HeroSection';
import Exploration from './components/Exploration';

function App() {
  return (
    <div>
      <HeroSection />
      <Exploration />
    </div>
  );
}

export default App;
