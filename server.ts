const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("OK");
})



app.listen(2222, () => {
  console.log("Server listenning on port 2222");
})