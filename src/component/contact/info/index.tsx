import { Mail, MapPin, Phone } from 'lucide-react';
import './styled.css';

interface InfoStyled {
  id: number;
  label: string;
  value: string;
}

const Info = [
  { id: 1, label: 'address', value: 'Ho Chi Minh', icon: <MapPin /> },
  { id: 2, label: 'phone', value: '+84 795 815 992', icon: <Phone color="#3e9392" /> },
  { id: 3, label: 'email', value: 'chaunguyen.141201@gmail.com', icon: <Mail color="#38bdf8" /> },
];

const ContactInfo = () => {
  const renderItemValue = (item: InfoStyled) => {
    switch (item.id) {
      case 1:
        return <div className={`contact-value`}>{item.value}</div>;
      case 2:
        return (
          <span>
            <a href={`tel:${item.value}`} className={`contact-value`}>
              {item.value}
            </a>
          </span>
        );
      case 3:
        return <div className={`contact-value email`}>{item.value}</div>;
    }
  };

  return (
    <div className="contact-information">
      {Info.map((item, index) => {
        return (
          <div key={item.id || index} className="content-item">
            <div className="contact-label">{item.icon}</div>
            {renderItemValue(item)}
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
