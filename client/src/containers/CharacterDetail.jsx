import React from "react";
import { inject, observer } from "mobx-react";

const CharacterDetail = ({ characterId, store }) => {
  const { characters } = store;

  const current = characters.find(character => character.id === characterId);

  return <h2>Detailpage ${characterId}} </h2>;
};

export default inject(`store`)(observer(CharacterDetail));
