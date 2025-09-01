import './footer.css';
import { Facebook, Github, Phone } from 'lucide-react';

import Link from '../common/link';

const Footer = () => {
  return (
    <footer className="footer-content">
      <span className="">@2025</span>

      <div className="group-icon">
        <Link href="https://github.com/SMinhChau">
          <Github className="icon-footer" />
        </Link>
        <Link href="https://www.facebook.com/minhchau.141">
          <Facebook className="icon-footer" />
        </Link>

        <Phone className="icon-footer" />
      </div>
    </footer>
  );
};

export default Footer;
