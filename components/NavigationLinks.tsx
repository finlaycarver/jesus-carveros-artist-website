import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../constants';

interface NavigationLinksProps {
  vertical?: boolean;
}

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

export default NavigationLinks;
