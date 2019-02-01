const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const app = express();
app.use(bodyParser.json())
const massive = require('massive');
require('dotenv').config()

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
  }).catch(err => console.log(err));

  app.get('/api/houses', ctrl.getHouses)
  app.post('/api/houses', ctrl.addHouses)
  app.delete(`/api/houses:id`, ctrl.deleteHouses)
  

app.listen(4000, () => console.log( `we are at port 4000 now.` ))