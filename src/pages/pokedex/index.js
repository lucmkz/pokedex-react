import React from 'react';
import Container from './styles';
import { ReactComponent as PokedexLogo } from '../../icons/pokeball.svg';
import { ReactComponent as PokedexIcon } from '../../icons/pokeball_icon.svg';

const Pokedex = () => (
  <Container>
    <PokedexLogo />
    <h1>Digite o nome ou o número</h1>
    <div>
      <input type="text" />
      <button type="button">
        <PokedexIcon />
      </button>
    </div>
  </Container>
);

export default Pokedex;
