const express = require('express');
const analyzeRouter = require('./routes/analyze');
const askRouter = require('./routes/ask');
const onboardRouter = require('./routes/onboard');
const docRouter = require('./routes/doc');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ DEFINE CORS OPTIONS ONCE
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://codebasebrain.netlify.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

// ✅ USE SAME CONFIG EVERYWHERE
app.use(cors(corsOptions));

// ✅ HANDLE PREFLIGHT PROPERLY
app.options("*", cors(corsOptions));

app.use(express.json());

// ✅ ROUTES
app.use(analyzeRouter);
app.use(askRouter);
app.use(onboardRouter);
app.use(docRouter);

// ✅ ROOT ROUTE (helps testing)
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});