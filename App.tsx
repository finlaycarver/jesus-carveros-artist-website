// Added React import to provide access to the React namespace for FC types.
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from './constants';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Bio from './pages/Bio';
import Exhibitions from './pages/Exhibitions';
import Writings from './pages/Writings';
import Architecture from './pages/Architecture';
import Recordings from './pages/Recordings';
import Films from "./pages/Films";

interface NavigationLinksProps {
  vertical?: boolean;
}

/**
 * Reusable Navigation Links component
 * Supports horizontal multi-row (Home) or vertical stack (All other pages)
 */
export const NavigationLinks: React.FC<NavigationLinksProps> = ({ vertical = false }) => {
  const location = useLocation();
  
  if (vertical) {
    return (
      <div className="nav-container nav-vertical">
        <ul className="nav-row">
          {NAVIGATION.map(item => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const row1 = NAVIGATION.filter(item => item.row === 1);
  const row2 = NAVIGATION.filter(item => item.row === 2);

  const renderRow = (items: typeof NAVIGATION) => (
    <ul className="nav-row justify-center">
      {items.map(item => (
        <li key={item.id}>
          <Link
            to={item.path}
            className={`nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <React.Fragment>
      <div className="nav-container gap-y-3 nav-desktop">
        {renderRow(row1)}
        {renderRow(row2)}
      </div>
      <ul className="nav-row nav-mobile justify-center">
        {NAVIGATION.map(item => (
          <li key={item.id}>
            <Link
              to={item.path}
              className={`nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const Header: React.FC = () => {
  const location = useLocation();

  // Hide the global header (Logo + Nav) on the homepage as requested
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
        <Header />
        <main id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photographs" element={<Gallery type="photographs" />} />
            
            {/* Architecture Routes */}
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/architecture/duneland" element={<Architecture />} />
            <Route path="/architecture/larkrise" element={<Architecture />} />
            <Route path="/architecture/tide-view" element={<Architecture />} />
            <Route path="/architecture/chandlers-reach" element={<Architecture />} />
            <Route path="/architecture/starvecrow" element={<Architecture />} />
            
            {/* Work Routes */}
            <Route path="/work" element={<Gallery type="work" />} />
            <Route path="/work/but-i-love-you" element={<Gallery type="but-i-love-you" isSubCategory />} />
            <Route path="/work/adhd" element={<Gallery type="adhd" isSubCategory />} />
            <Route path="/work/be-present" element={<Gallery type="be-present" isSubCategory />} />
            <Route path="/work/me" element={<Gallery type="me" isSubCategory />} />
            <Route path="/work/punk-plates" element={<Gallery type="punk-plates" isSubCategory />} />
            <Route path="/work/trip" element={<Gallery type="trip" isSubCategory />} />

            {/* Portraits Routes */}
            <Route path="/portraits" element={<Gallery type="portraits" />} />
            <Route path="/portraits/mexican-wrestler-one" element={<Gallery type="mexican-wrestler-one" isSubCategory />} />
            <Route path="/portraits/mexican-wrestler-two" element={<Gallery type="mexican-wrestler-two" isSubCategory />} />
            <Route path="/portraits/mexican-wrestler-three" element={<Gallery type="mexican-wrestler-three" isSubCategory />} />
            
            {/* Exhibitions Routes */}
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
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;