const express = require('express');
const analyzeRouter = require('./routes/analyze');
const askRouter    = require('./routes/ask');
const onboardRouter = require('./routes/onboard');
const docRouter    = require('./routes/doc');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(analyzeRouter);
app.use(askRouter);
app.use(onboardRouter);
app.use(docRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Run server using: node app.js
