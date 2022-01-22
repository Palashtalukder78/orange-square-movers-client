import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header';
import Home from './components/Home/Home'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
