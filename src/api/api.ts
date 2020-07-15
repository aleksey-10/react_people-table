interface Api {
  getPeople<T>(): Promise<T>;
}

export const api: Api = {
  getPeople: async <T>(): Promise<T> => {
    const response = fetch('https://mate-academy.github.io/react_people-table/api/people.json')
      .then(reply => reply.json());

    return response;
  },
};
