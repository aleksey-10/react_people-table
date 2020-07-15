import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import queryString from 'query-string';

type Props = {
  value: string;
};

export const SortByCellButton: FC<Props> = ({ value }) => {
  const { search, pathname } = useLocation();
  const parsed = queryString.parse(search);

  parsed.sortBy = value;
  parsed.sortOrder = parsed.sortOrder === 'ask' ? 'desc' : 'ask';

  const stringified = queryString.stringify(parsed);

  const link = `${pathname}?${stringified}`;

  return (
    <NavLink to={link} style={{ color: '#000' }}>
      {value.replace(/^\w/, match => match.toUpperCase())}
      <img src="sort_both.png" alt="Sort both" />
    </NavLink>
  );
};
