var express = require('express')
var cors = require('cors')
var request = require('request');
var app = express()

app.use(cors())

app.get('/servers', (req, res) => {
  let Url = `https://nwnlist.herokuapp.com/servers/NWN2`

  request(
    { url: Url },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})
