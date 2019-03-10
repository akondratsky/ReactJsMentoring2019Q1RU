let express = require('express');
let app = express();

app.get('/movies', (req, res) => {
  res.send('Not implemented yet');
});

app.get('/movies/:id', (req, res) => {
  res.send(`Not implemented yet (but got id: ${req.params.id})`);
}); 

app.listen(3000, () => {
  console.log('Listening on port 3000 now');
});
