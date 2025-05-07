import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import BanhoTosa from './pages/BanhoTosa'
import HotelResort from './pages/HotelResort'
import Adestramento from './pages/Adestramento'
import NavbarMenu from './pages/NavbarMenu';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Router>

      <NavbarMenu />
    <main>
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="banho-e-tosa" element={ <BanhoTosa />} />
          <Route path="hotel-resort" element={ <HotelResort />} />
          <Route path="/adestramento" element={ <Adestramento />} />
      </Routes>
      </main>

    </Router>
  );
}

export default App;
