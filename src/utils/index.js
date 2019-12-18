export const pokePictures = poke => {
  const imgs = Object.values(poke.sprites[0]).filter(x => x);
  return imgs[0];
};
