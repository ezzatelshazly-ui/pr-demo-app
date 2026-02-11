const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.ENVIRONMENT || 'unknown';

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World from PR Environment Demo!',
    environment: ENV,
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${ENV} environment`);
});
