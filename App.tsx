import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { NavigationLinks } from './components/NavigationLinks';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Bio from './pages/Bio';
import Exhibitions from './pages/Exhibitions';
import Writings from './pages/Writings';
import Architecture from './pages/Architecture';
import Recordings from './pages/Recordings';
import Films from "./pages/Films";

const ScrollToTop: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

const Header: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/') return null;

  return (
    <header id="menu">
      <div className="header-inner">
        <Link to="/" className="logo-minimal">
          Jesus Carveros
        </Link>
        <NavigationLinks vertical />
      </div>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div id="wrap">
        <ScrollToTop />
        <Header />
        <main id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photographs" element={<Gallery type="photographs" />} />
            
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/architecture/duneland" element={<Architecture />} />
            <Route path="/architecture/larkrise" element={<Architecture />} />
            <Route path="/architecture/tide-view" element={<Architecture />} />
            <Route path="/architecture/chandlers-reach" element={<Architecture />} />
            <Route path="/architecture/starvecrow" element={<Architecture />} />
            
            <Route path="/work" element={<Gallery type="work" />} />
            <Route path="/work/but-i-love-you" element={<Gallery type="but-i-love-you" isSubCategory />} />
            <Route path="/work/adhd" element={<Gallery type="adhd" isSubCategory />} />
            <Route path="/work/be-present" element={<Gallery type="be-present" isSubCategory />} />
            <Route path="/work/me" element={<Gallery type="me" isSubCategory />} />
            <Route path="/work/punk-plates" element={<Gallery type="punk-plates" isSubCategory />} />
            <Route path="/work/trip" element={<Gallery type="trip" isSubCategory />} />

            <Route path="/portraits" element={<Gallery type="portraits" />} />
            <Route path="/portraits/mexican-wrestler-one" element={<Gallery type="mexican-wrestler-one" isSubCategory />} />
            <Route path="/portraits/mexican-wrestler-two" element={<Gallery type="mexican-wrestler-two" isSubCategory />} />
            <Route path="/portraits/mexican-wrestler-three" element={<Gallery type="mexican-wrestler-three" isSubCategory />} />
            
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/exhibitions/common-ground" element={<Exhibitions />} />
            <Route path="/exhibitions/ordered-chaos" element={<Exhibitions />} />
            <Route path="/exhibitions/transformation" element={<Exhibitions />} />

            <Route path="/originals" element={<Gallery type="work" />} />
            <Route path="/sculptures" element={<Gallery type="sculptures" />} />
            <Route path="/new-work" element={<Gallery type="new-work" />} />
            <Route path="/writings" element={<Writings />} />
            <Route path="/recordings" element={<Recordings />} />
            <Route path="/films" element={<Films />} />
            <Route path="/biography" element={<Bio />} />
            <Route path="/biography/contact" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div style={{ padding: '40px' }}><h1 style={{ fontSize: '12px', marginBottom: '12px' }}>Page not found</h1><p style={{ fontSize: '12px' }}>The page you’re looking for does not exist.</p></div>} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;