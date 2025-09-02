import './card.css';
import { BlogType } from './data';

type Props = {
  item: BlogType;
};

const CardBLog: React.FC<Props> = ({ item }) => {
  return (
    <a
      href={item.href}
      className={`card-list blog-card-list`}
      target={item.is_blank ? '_blank' : ' _self'}
    >
      <div className={'blog-card-top'}>{item.title}</div>
      <div className="blog-tags">
        {item.tags.map(tag => (
          <span className="blog-tag-item">#{tag}</span>
        ))}
      </div>
      <div className="blog-time">{item.create_date}</div>
    </a>
  );
};

export default CardBLog;
