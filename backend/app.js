const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/test', (req, res) => {
  res.json({ message: 'API working' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
