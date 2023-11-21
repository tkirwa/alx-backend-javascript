const express = require('express');
const controllerRouting = require('./routes/index');

const app = express();

controllerRouting(app);

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
