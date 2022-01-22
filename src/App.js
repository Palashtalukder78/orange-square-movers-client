import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header';
import Home from './components/Home/Home'
import Services from './components/Services/Services';
import Refferal from './components/Referral/Refferal';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/refferal" element={<Refferal />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
