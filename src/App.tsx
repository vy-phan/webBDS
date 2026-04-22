import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="font-sans antialiased text-gray-900 scroll-smooth">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/gioi-thieu" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
