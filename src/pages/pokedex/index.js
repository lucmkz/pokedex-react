import React, { useState, useEffect } from 'react';
import { Container, SubmitButton } from './styles';
import { Card } from '../../styles';
import { ReactComponent as PokedexLogo } from '../../icons/pokeball.svg';
import { ReactComponent as PokedexIcon } from '../../icons/pokeball_icon.svg';
import { getValidNumber } from '../../utils';
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

  useEffect(() => {
    setInterval(() => {
      setImg(im => {
        if (im >= 6) {
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

    let error = '';
    const handleError = err => {
      error = err;
    };

    let response = await api.get(pokeNameOrNamber).catch(handleError);

    if (error) {
      response = await api
        .get(getValidNumber(pokeNameOrNamber))
        .catch(handleError);
    }

    setPokesStatus({ ...pokesStatus, atualPokeData: response });

    const a = Object.values([response.data.sprites][0]) || '';

    // gabiarra para ter sempre a quantidade de itens necessários no array
    const data = {
      name: response.data.name,
      sprites: Object.values(
        a.concat(a).concat(
          a
            .concat(a)
            .concat(a)
            .concat(a)
        )
      ).filter(x => x),
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
        <h1>Descubra um pokémon</h1>
        <form onSubmit={handleSubmit}>
          <input
            focus
            type="text"
            placeholder="Nome e idade"
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
