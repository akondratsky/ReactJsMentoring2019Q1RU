const express = require('express');
const app = express();

app.get('/api/movies', (req, res) => {
  res.send(JSON.stringify({ text: 'Not implemented yet' }));
});

app.get('/api/movies/:id', (req, res) => {
  res.send(`Not implemented yet (but got id: ${req.params.id})`);
});

app.listen(3000, () => {
  console.log('Listening on port 3000 now');
});
