const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Allow cross-origin requests and parse JSON
app.use(cors());
app.use(express.json());

// POST route to receive logs
app.post('/log', (req, res) => {
  const { type, message, timestamp } = req.body;
  console.log(`[${timestamp}] ${type.toUpperCase()}: ${message}`);
  res.send({ status: 'ok' });
});

// OPTIONAL: GET route to show message when accessing in browser
app.get('/', (req, res) => {
  res.send(`
    <h2 style="font-family: Arial; color: green;">
      🟢 Server is running!<br/>POST your logs to <code>/log</code>
    </h2>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`🟢 Logging server running at http://localhost:${PORT}`);
});
