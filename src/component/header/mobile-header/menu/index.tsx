import React from 'react';
import './menu-mobile.css';

import { useLocation } from 'react-router-dom';
import { NotebookTabs, PanelTop, UserRound, X } from 'lucide-react';

type Props = {
  handleMenu: () => void;
};

const HeaderMenus = [
  { id: 1, name: 'About me', url: '/#info', icon: <UserRound />, hash: '#info' },
  {
    id: 2,
    name: 'Experiences',
    url: '/#experiences',
    icon: <UserRound />,
    hash: '#experiences',
  },
  { id: 3, name: 'Blog', url: '/blog', hash: '#blog' },
  {
    id: 4,
    name: 'Projects',
    url: '/#projects',
    icon: <PanelTop />,

    hash: '#projects',
    disable: true,
  },
  { id: 5, name: 'Contact', url: '/#contact', icon: <NotebookTabs />, hash: '#contact' },
];

const MobileMenu: React.FC<Props> = ({ handleMenu }: Props) => {
  const location = useLocation();

  return (
    <div className="nar-mobile">
      <div className="content">
        <span className="close-icon">
          <X onClick={handleMenu} />
        </span>

        <nav className="menus">
          {HeaderMenus.map(item => {
            return (
              <a
                className="item-menu"
                key={item.id}
                href={item?.disable ? `javascript:void(0)` : item.url || '#'}
              >
                <span className="icon">{item.icon}</span>
                <h3
                  className={`item-title ${
                    item.hash == location?.hash && 'item-selected'
                  } ${item} `}
                >
                  {item.name}
                </h3>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
