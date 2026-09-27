const express = require('express');
const analyzeRouter = require('./routes/analyze');
const askRouter    = require('./routes/ask');
const onboardRouter = require('./routes/onboard');
const docRouter    = require('./routes/doc');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

const cors = require("cors");

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://codebasebrain.netlify.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

// Handle preflight requests (VERY IMPORTANT)
app.options("*", cors());

app.use(express.json());
app.use(analyzeRouter);
app.use(askRouter);
app.use(onboardRouter);
app.use(docRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Run server using: node app.js