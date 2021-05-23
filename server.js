const express = require('express');
const app = express();
const  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

app.use('/',swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// app.get('/', (req, res) => {
//   res.send(`Helloo World from node.js and port number is ${port}`);
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})