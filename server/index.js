const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
let date = new Date().getMilliseconds();
const axios = require('axios');


var minutes = 1, the_interval = minutes * 60 * 1000;
const URL = 'https://auth-rock-and-art.herokuapp.com/api/auth/register/';

function pingFirstServer() {
  date = date + 1
  axios.post(URL, {
    first_name: "Aliyu " + date,
    last_name: "foo " + date,
    password: "passsj" + date,
    email: "aliyukamilu@gmail.com" + date
  })
    .then(response => {
      console.log(response.data);
    }).catch(err => console.error(err));
}


function postAm() {
  date = date + 1
  axios.post(URL, {
    first_name: "Aliyu " + date,
    last_name: "foo " + date,
    password: "passsj" + date,
    email: "bar@gmail.com" + date

  }).then(response => {
    console.log(response.data);

    // app.get("/api", (req, res) => {
    //   res.json({ message: response });
    // });
  })
    .catch(err => console.error(err));
}

postAm()
setInterval(postAm, the_interval);



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});