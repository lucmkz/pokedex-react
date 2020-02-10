import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Card } from '../../styles';

const List = () => {
  const [repository, setRepository] = useState([]);

  // setRepository(async () => {});
  // const arr = [];
  const req = async i => {
    const res = await api.get(i.toString());
    // arr = [...arr, { name: res.data.name }];
    const { name } = res.data;
    setRepository({
      repository: [...repository, name],
    });
    // console.log(repository);
  };

  useEffect(() => {
    for (let i = 1; i < 10; i += 1) {
      req(i);
    }
  }, []);

  // useEffect(() => {

  // }, []);

  // console.log('repository', repository);

  return (
    <Card>
      {/* {repository.map(poke => (
        <li key={repository.data.id}>
          <h1>{poke.data.name}</h1>
        </li>
      ))} */}
    </Card>
  );
};

export default List;
