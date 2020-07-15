import React, { FC, useState, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { debounce } from 'lodash';

export const FilterField: FC = () => {
  const [fieldValue, setFieldValue] = useState('');
  const { search, pathname } = useLocation();
  const { push } = useHistory();

  const parsed = queryString.parse(search);

  const setQueryString = (value: string) => {
    parsed.query = value;
    const stringified = queryString.stringify(parsed);

    push(`${pathname}?${stringified}`);
  };

  const planQueryUpdate = useCallback(debounce(setQueryString, 500), []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFieldValue(value);
    planQueryUpdate(value);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      value={fieldValue}
    />
  );
};
