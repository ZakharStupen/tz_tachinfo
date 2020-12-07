const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static('./app'))

app.post('/', urlencodedParser, (req, res) => {
    console.log(req.body)
    let a = Object.keys(req.body)
    console.log(a[0])
    res.json(a[0])
    res.end()
})


app.listen(5000, () => {
    console.log('strted ....')
})