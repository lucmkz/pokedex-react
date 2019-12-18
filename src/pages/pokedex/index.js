import React, { useState, useEffect } from 'react';
import { Container, Card, SubmitButton } from './styles';
import { ReactComponent as PokedexLogo } from '../../icons/pokeball.svg';
import { ReactComponent as PokedexIcon } from '../../icons/pokeball_icon.svg';
import api from '../../services/api';

const Pokedex = () => {
  const [pokesStatus, setPokesStatus] = useState({
    pokeNameOrNamber: '',
    atualPokeData: {},
    repository: [],
    loading: false,
    actualShowingPokemonImg: 0,
  });

  const [img, setImg] = useState(0);

  const { repository, loading, pokeNameOrNamber } = pokesStatus;

  // const { actualImg } = img;
  useEffect(() => {
    setInterval(() => {
      setImg(im => {
        if (im > 1) {
          im = 0;
        }
        return im + 1;
      });
    }, 1000);
  }, []);

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
      sprites: Object.values([response.data.sprites][0]).filter(x => x),
    };

    setPokesStatus({
      ...pokesStatus,
      pokeNameOrNamber: '',
      repository: [...repository, data],
    });
  };

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
          <SubmitButton loading={loading}>{<PokedexIcon />}</SubmitButton>
        </form>
      </Container>

      <Card>
        {repository.map(poke => (
          <li key={poke.name}>
            <h1>{poke.name}</h1>
            <img src={poke.sprites[img]} alt={poke.name} />
          </li>
        ))}
      </Card>
    </>
  );
};

export default Pokedex;
