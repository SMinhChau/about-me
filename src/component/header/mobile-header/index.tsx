import './mobile-header.css';
import ToggleMode from '@/component/common/toggle-mode';
import { Menu } from 'lucide-react';
import React from 'react';

type Props = {
  handleMenu: () => void;
};

const MobileHeader: React.FC<Props> = ({ handleMenu }: Props) => {
  return (
    <div className="wrapper">
      <div className="content">
        <ToggleMode />
      </div>

      <button onClick={handleMenu}>
        <Menu />
      </button>
    </div>
  );
};

export default MobileHeader;
