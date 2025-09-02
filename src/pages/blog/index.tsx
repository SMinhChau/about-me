import CardBLog from '@/component/blog/card';
import './blog.css';
import { Star } from 'lucide-react';
import { BlogCards } from '@/component/blog/card/data';

const BlogPage = () => {
  return (
    <div className="blog ">
      <div className="blog-title">
        <Star color="#fbbf24" />
        <span>Summary of what I have researched</span>
        <Star color="#fbbf24" />
      </div>
      <div className="blog-cards">
        {BlogCards.map((item, index) => (
          <CardBLog key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
