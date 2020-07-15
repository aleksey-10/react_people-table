import React, { FC, useEffect, useState } from 'react';
import ReactLoader from 'react-loader';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { api } from '../../api/api';
import { Person, PersonOriginal } from '../../interfaces/Person';
import { PeopleTable } from '../PeopleTable';
import { FilterField } from '../FilterField';

export const PeoplePage: FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [peopleToShow, setPeopleToShow] = useState<Person[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    api.getPeople<PersonOriginal[]>().then((data: PersonOriginal[]) => {
      setPeople(data.map(person => ({
        ...person,
        mother: data.find(human => human.name === person.motherName) || null,
        father: data.find(human => human.name === person.fatherName) || null,
      })));
    });
  }, []);

  const { search } = useLocation();
  const { sortBy, query, sortOrder } = queryString.parse(search);

  useEffect(() => {
    if (sortBy === 'name' || sortBy === 'sex') {
      people.sort((a, b) => (
        sortOrder === 'desc'
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy])
      ));
    } else if (sortBy === 'born' || sortBy === 'died') {
      people.sort((a, b) => (
        sortOrder === 'desc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy]
      ));
    }

    setPeopleToShow([...people].filter((person) => {
      const pattern = new RegExp(query ? query.toString() : '', 'gi');

      return pattern.test(person.name)
        || pattern.test(person.motherName) || pattern.test(person.fatherName);
    }));
  }, [sortBy, sortOrder, query, people]);

  return (
    <>
      <h2>People page</h2>
      <ReactLoader loaded={isLoading}>
        <FilterField />
        <PeopleTable people={peopleToShow} />
      </ReactLoader>
    </>
  );
};
