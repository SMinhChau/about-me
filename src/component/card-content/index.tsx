import React, { CSSProperties, ReactNode } from 'react';
import './card-content.css';
import { formatDateTime } from '@/utils/common';
import Link from '../common/link';
import { FaGithub } from 'react-icons/fa';
import { isToday } from 'date-fns';
import { ExperiencesType } from '@/utils/content';

type Props = {
  children?: ReactNode;
  styled?: CSSProperties;
  item?: ExperiencesType;
};

const CardContent: React.FC<Props> = ({ item, styled }) => {
  if (!item) {
    return null;
  }

  const { start_date, end_date, company_name, description } = item;

  return (
    <div className="card-list" style={styled}>
      <h2 className="card-time">
        {`Time: ${formatDateTime(start_date)} - ${
          isToday(end_date) ? 'Current' : formatDateTime(end_date)
        }`}
      </h2>
      <h4 className="card-name">{company_name}</h4>

      <div className="card-description">
        <p>{description}</p>

        <span className="icon-bottom">
          <Link href="https://github.com/SMinhChau">
            <FaGithub className="icon-footer" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default CardContent;
