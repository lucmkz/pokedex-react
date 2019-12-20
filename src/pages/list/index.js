import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Card } from '../../styles';

const List = () => {
  const [repository, setRepository] = useState([]);

  // setRepository(async () => {});
  const arr = [];
  const req = async i => {
    const res = await api.get(i.toString());
    arr.push(res);
    // console.log('response', res);
  };

  console.log(arr);

  useEffect(() => {
    for (let i = 1; i < 802; i++) {
      req(i);
    }
  }, []);

  useEffect(() => {
    setRepository({
      repository: arr,
    });
    console.log('repositoryr', repository);
  }, []);

  console.log(repository);

  return <Card>{/* {repository.map(poke => ())} */}</Card>;
};

export default List;
