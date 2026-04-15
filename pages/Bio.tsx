import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Bio: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = 'Biography — Jesus Carveros';
  }, []);

  return (
    <div id="cat_main">
      <div id="cat_left">
        <div className="pt-7">
          <ul className="cat-list">
            <li>
              <Link to="/biography" className={location.pathname === '/biography' ? 'active' : ''}>BIO</Link>
            </li>
            <li>
              <Link to="/biography/contact" className={location.pathname === '/biography/contact' ? 'active' : ''}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="cat_right" className="!pt-0 !mt-0 !flex !flex-row !justify-start !items-start !h-auto !min-h-0">
        <div className="max-w-[800px] text-left !pt-0 !mt-0 flex flex-col items-start self-start">
          <h1 className="text-[13px] font-semibold uppercase tracking-widest text-black mb-8">Biography</h1>
          <div className="space-y-7 text-[15px] leading-[1.85] text-black/80 pt-0 mt-0">
            <p>
              Jesus Carveros works across photography, film, installation and performance.<br />
              He uses headlines and text that reference a career in advertising, to critique interest in mass consumerism and media culture.
            </p>
            <p>
              His practice is informed by Richard Prince, Donald Judd, Jackson Pollock, Andy Warhol, Jeff Koons, Cy Twombly, Jenny Holzer and Barbara Kruger.
            </p>
            <p>
              Jesus Carveros explores notions of identity, mental health, vulnerability, social media, authenticity, agitation, masking, personal connection and artificial intelligence.
            </p>
            <p>
              He believes art should not represent anything in particular, but that it should unequivocally stand on its own and simply exist.
            </p>
            <p>
              Work is split between minimal and maximal, frequently facilitated by computers, machines, artisans and fabricators.
            </p>
            <p>
              Jesus Carveros readily bares his soul, examining the dynamics of intimate, personal relationships and sense of self.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;