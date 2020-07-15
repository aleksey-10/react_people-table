import React, { FC } from 'react';
import { Person } from '../../interfaces/Person';
import { PersonName } from '../PersonName';

type Props = Person;

export const PersonRow: FC<Props> = ({
  name,
  sex,
  born,
  died,
  mother,
  father,
  motherName,
  fatherName,
  slug,
}) => (
  <>
    <td>
      <PersonName
        name={name}
        slug={slug}
        sex={sex}
      />
    </td>
    <td>{sex}</td>
    <td>{born}</td>
    <td>{died}</td>
    <td>
      <PersonName
        name={motherName}
        slug={mother?.slug}
        sex="f"
      />
    </td>
    <td>
      <PersonName
        name={fatherName}
        slug={father?.slug}
        sex="m"
      />
    </td>
  </>
);
