const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const db = require('./queries')
const port = 3000

app.use(cors());

//app.options('*', cors());

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//GET Request to root URL(/)
/*app.get('/',(request, response)=>{

  response.json({Welcome: 'How to create API with Node.js,EXPRESS and PostgreSQL'})
})*/
// Handle the GET request
app.get('/', (req, res) => {
  // Return dummy data for demonstration
  const data = {
    message: 'Hello, world!',
  };
  res.json(data);
});


// Endpoints
app.get('/countries', db.getCountries)
app.get('/countries/:id', db.getCountryById)
app.post('/countries', db.createCountry)
app.put('/countries/:id', db.updateCountry)
app.delete('/countries/:id', db.deleteCountry)


// Endpoints
app.get('/capital', db.getCapitals)
app.get('/capital/:id', db.getCapitalById)
app.post('/capital', db.createCapital)
app.put('/capital/:id', db.updateCapital)
app.delete('/capital/:id', db.deleteCapital)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
