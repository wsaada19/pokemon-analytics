const formatCardArray = (cards) => {
  const formattedArray = [];
  cards.forEach((element) => {
    if (
      element.rarity === "Common" ||
      element.rarity === "Uncommon" ||
      element.rarity === "Rare"
    ) {
        return;
    }
    const data = {
      pokemonName: element.name,
      number: element.number,
      rarity: element.rarity,
      imageUrl: element.imageUrl,
    };
    formattedArray.push(data);
  });
  return formattedArray.sort((a, b) => a.number - b.number);
};

module.exports = {
  formatCardArray,
};
