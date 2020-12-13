const axios = require('axios');
const { formatCardArray } = require('./pokemontcgFormatters.js');

const cardsPerPage = 100;

// Send a GET request
const getSetInformation = async (setid) => {
  try {
    const cards = [];
    let count = 1;
    while (true) {
      const res = await axios.get(
        `https://api.pokemontcg.io/v1/cards?setCode=${setid}&page=${count}`
      );
      cards.push(...res.data.cards);
      if (res.data.cards < cardsPerPage) {
        break;
      }
      count += 1;
    }
    console.log(cards);
    const formattedResult = formatCardArray(cards);
    return formattedResult;
  } catch (err) {
    console.error(err);
    return {};
  }
};

module.exports = {
  getSetInformation,
};
