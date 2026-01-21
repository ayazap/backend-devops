const express = require('express');
const app = express();
const port = 3000;

// 1. Root Endpoint
app.get('/', (req, res) => {
  res.status(200).json({ status: "Active" });
});

// 2. Health Endpoint (THIS IS WHAT YOUR TEST WANTS)
app.get('/health', (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Only listen if not running via test
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
