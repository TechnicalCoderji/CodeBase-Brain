const express = require('express');
const analyzeRouter = require('./routes/analyze');
const askRouter = require('./routes/ask');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(analyzeRouter);
app.use(askRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Run server using: node app.js
