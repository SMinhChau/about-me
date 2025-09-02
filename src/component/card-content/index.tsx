import React, { CSSProperties, ReactNode } from 'react';
import './card-content.css';
import { formatDateTime } from '@/utils/common';
import Link from '../common/link';
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

  const { start_date, end_date, company_name, role, responsibilities, base, link } = item;

  return (
    <div className="card-list" style={styled}>
      <h2 className="card-time">
        {`Time: ${formatDateTime(start_date)} - ${
          isToday(end_date) ? 'Current' : formatDateTime(end_date)
        }`}
      </h2>
      <h4 className="card-name ">
        <span className="label">Company name:</span> <Link href={link}>{company_name}</Link>
      </h4>
      <span className="role">
        <span className="label">Role:</span> {role}
      </span>

      <div className="card-description">
        <span className="label">Responsibilities:</span>
        {responsibilities?.length > 0 && (
          <ul className="responsibilities-list">
            {responsibilities.map((resp, index) => {
              return (
                <li key={index} className="responsibilities">
                  {resp}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="card-description">
        <span className="label">Technology description: </span>
        <span>{base}</span>
      </div>

      {/* <span className="icon-bottom">
        <Link href="https://github.com/SMinhChau">
          <Github />
        </Link>
      </span> */}
    </div>
  );
};

export default CardContent;
