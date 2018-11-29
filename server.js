const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, './app/assets')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routes/htmlRoutes')(app);

app.listen(PORT, function() {
  console.log('Listening at PORT:', PORT);
});
