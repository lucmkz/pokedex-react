import React, { useState } from 'react';
import { Container, Card } from './styles';
import { ReactComponent as PokedexLogo } from '../../icons/pokeball.svg';
import { ReactComponent as PokedexIcon } from '../../icons/pokeball_icon.svg';
import api from '../../services/api';

const Pokedex = () => {
  const [pokesStatus, setPokesStatus] = useState({
    pokeNameOrNamber: '',
    atualPokeData: {},
    repository: [],
    loading: false,
  });

  const { atualPokeData, repository, loading, pokeNameOrNamber } = pokesStatus;

  const handleInputSubmit = e => {
    setPokesStatus({ ...pokesStatus, pokeNameOrNamber: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setPokesStatus({ ...pokesStatus, loading: true });

    const response = await api.get(pokeNameOrNamber);

    setPokesStatus({ ...pokesStatus, atualPokeData: response });

    const data = {
      name: response.data.name,
      sprites: [response.data.sprites],
    };

    setPokesStatus({
      ...pokesStatus,
      pokeNameOrNamber: '',
      repository: [...repository, data],
    });
  };

  console.log(repository);

  return (
    <>
      <Container>
        <PokedexLogo />
        <h1>Digite o nome ou o número</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="..."
            value={pokeNameOrNamber}
            onChange={handleInputSubmit}
          />
          <button type="submit">
            <PokedexIcon />
          </button>
        </form>
      </Container>

      <Card>
        {repository.map(poke => (
          <li key={poke.name}>
            <h1>{poke.name}</h1>
            <img src={poke.sprites[0].back_default} alt={poke.name} />
          </li>
        ))}
      </Card>
    </>
  );
};

export default Pokedex;
