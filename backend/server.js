const express = require('express')
const app = express()
const port = 4000;

//Setup to get variables from .env file
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

//Allow CORS for call endpoints
const cors = require('cors');
app.use(cors());

const { Config, Events } = require('invirtu-javascript-api');
Config.setAuthToken(process.env.ORGANIZER_TOKEN);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/events', (req, res) => {

    const query = {
      organizer_id : process.env.ORGANIZER_ID,
    }
  
    Events.getEvents(query).then(response => {
  
      //Axios response requires to get data
      let result = response.data;
  
      if(result.status == "success") {
          res.json(result.data);
      } else {
          res.status(500).send(result.errors)
      }
  
    }).catch(error => {
      console.error(error);
    });
});

app.post('/events', (req, res) => {

    const data = {
      template_id : process.env.TEMPLATE_ID,
      organizer_id : process.env.ORGANIZER_ID,
      type: 7
    };
  
    Events.createEvent(data).then(response => {
  
      //Axios response requires to get data
      let result = response.data;
  
      if(result.status == "success") {
          res.json(result.data);
      } else {
          res.status(500).send(result.errors)
      }
  
    }).catch(error => {
      console.error(error);
    });
        
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});