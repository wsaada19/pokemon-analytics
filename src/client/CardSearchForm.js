import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const setOptions = [
  { key: "swsh4", value: "swsh4", text: "Vivid Voltage" },
  { key: "swsh3", value: "swsh3", text: "Darkness Ablaze" },
];

const CardSearchForm = () => {
  const [pokemonset, setPokemonset] = useState("");
  const [cardlist, setCardlist] = useState([]);
  const [card, setCard] = useState("")

  useEffect(() => {

  });

  const updateSetName = async (e, { value }) => {
    setPokemonset(value);
    await fetch(`/api/pokemontcg/sets/${value}`)
      .then((res) => res.json())
      .then((data) => setCardlist(createDropDownOptions(data.cards)));
  };

  const updateCardName = async (e, { value }) => {
    console.log(value);
    setCard(value);
  };

  const createDropDownOptions = (cards) => {
    const filteredCards = [];
    cards.forEach((element) => {
      filteredCards.push( {
        key: element.number,
        value: element.name,
        text: `${element.pokemonName} ${element.rarity} ${element.number}`,
      });
    });
    console.log(filteredCards);
    return filteredCards;
  };
  return (
    <div className="search-form">
      <Dropdown
        placeholder="Select a Pokemon Card Set"
        fluid
        search
        selection
        options={setOptions}
        onChange={updateSetName}
      />
      <Dropdown
        placeholder="Select a Pokemon Card"
        fluid
        search
        selection
        disabled={cardlist.length === 0}
        options={cardlist}
        onChange={updateCardName}
      />
    </div>
  );
};

export default CardSearchForm;
