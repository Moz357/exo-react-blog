import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './page/Home';
import Contact from './page/Contact';
import Profil from './page/Profil';
import Articles from './page/Articles';

function App() {
  return (
    <div className="App-header">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

/**
 * 



function App() {
  return (
    <div className="App-header">
      <Header />
      <Home />
      <Footer/>

    </div>
  );
}

export default App;
 */
