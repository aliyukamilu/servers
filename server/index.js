const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
let date = new Date().getMilliseconds();
const axios = require('axios');


var minutes = 0.1, the_interval = minutes * 60 * 1000;
const URL = 'https://auth-rock-and-art.herokuapp.com/api/auth/register/';

function pingFirstServer() {
  date = date + 1
  axios.get('http://localhost:5000/ping')
    .then(response => {
      console.log(response.data);

      app.get("/api", (req, res) => {
        res.json({ message: 'On premise server Pinged Server Connected' });
      });
      postAm()

      setInterval(postAm, the_interval);
    }).catch(err => {
      console.error(err)
      res.json({ message: `Their's an error. server not pinged, server is down.` });
    });
}
pingFirstServer();


function postAm() {
  date = date + 1
  axios.post(URL, {
    first_name: "Aliyu " + date,
    last_name: "foo " + date,
    password: "passsj" + date,
    email: "bar@gmail.com" + date

  }).then(response => {
    console.log(response.data);

    app.get("/pingMes", (req, res) => {
      res.json({ message: 'Server sent a report' });
    });
  })
    .catch(err => console.error(err));
}





app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});