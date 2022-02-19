import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import Services from './components/Services/Services';
import Refferal from './components/Referral/Refferal';
import Contact from './components/Contact/Contact';
import AuthProvider from './contexts/AuthProvider';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/refferal" element={<Refferal />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
