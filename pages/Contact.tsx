import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Contact: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = 'Contact — Jesus Carveros';
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
          <h1 className="text-[13px] font-semibold uppercase tracking-widest text-black mb-8">Contact</h1>
          <div className="space-y-7 text-[15px] leading-[1.85] text-black/80">
            <p>
              For enquiries, commissions, collaborations, or exhibitions,<br />
              please get in touch.
            </p>
            <p>
              <a
                href="mailto:contact@jesuscarveros.com"
                className="text-black text-[15px] leading-[1.85] border-b border-black/40 hover:border-black hover:text-black transition-colors duration-150 no-underline"
              >
                contact@jesuscarveros.com
              </a>
            </p>
            <p>Serious enquiries are welcome.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;