const express = require('express')

const app = express()


app.get('/', (req, res) => {
    console.log('Hello Server')


})

app.listen(5000, () => {
    console.log('Server Started!')
})