const express = require("express")
const app = express()
app.get('/test', (req, res) => {
res.json("Test passed, all good")
})
app.listen(4000)