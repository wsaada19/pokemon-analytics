const express = require('express');
const { getSetInformation } = require('./pokemontcg');


const app = express();

app.use(express.static('dist'));
// app.get('/api/sets', (req, res) =>
//   res.send({ sets: [] })
// );

app.get('/api/pokemontcg/sets/:setid', async (req, res) => {
  const setInformation = await getSetInformation(req.params.setid);
  res.send({ cards: setInformation });
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
