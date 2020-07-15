import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Person } from '../../interfaces/Person';
import { PersonRow } from '../PersonRow';
import { SortByCellButton } from '../SortByCellButton';

type Props = {
  people: Person[];
};

export const PeopleTable: FC<Props> = ({ people }) => {
  const { pathname } = useLocation();

  const match = pathname.replace(/\/+$/, '').match(/\/([^/]+)$/g);
  const activePerson = match ? match[0].replace('/', '') : null;

  return (
    <table>
      <thead>
        <tr>
          <th>
            <SortByCellButton value="name" />
          </th>
          <th>
            <SortByCellButton value="sex" />
          </th>
          <th>
            <SortByCellButton value="born" />
          </th>
          <th>
            <SortByCellButton value="died" />
          </th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>
      <tbody>
        {
          people.map(person => (
            <tr
              key={person.slug}
              className={`${activePerson === person.slug ? 'highlighted' : ''}`}
            >
              <PersonRow {...person} />
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};
