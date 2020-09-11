const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('./dist/golf-score-frontend'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'dist/golf-score-frontend' }
  );
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
