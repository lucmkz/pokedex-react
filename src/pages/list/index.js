import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Card } from '../../styles';

const List = () => {
  const [repository, setRepository] = useState([]);

  // setRepository(async () => {});

  const req = async () => {
    const res = await api.get('1');

    setRepository({
      repository: res,
    });

    console.log('response', res);
  };

  useEffect(() => req(), []);

  const a = 0;

  return (
    <Card>
      <li>teste</li>
    </Card>
  );
};

export default List;
