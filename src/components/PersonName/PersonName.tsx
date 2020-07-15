import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

type Props = {
  name: string;
  slug: string | undefined;
  sex: string;
};

export const PersonName: FC<Props> = ({ name, slug, sex }) => {
  const color = sex === 'f' ? 'red' : '';
  const { search } = useLocation();

  return (
    <div>
      {
        slug
          ? (
            <NavLink to={`/people/${slug}/${search}`} style={{ color }}>
              {name}
            </NavLink>
          )
          : <strong>{name}</strong>
      }
    </div>
  );
};
