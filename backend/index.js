const express = require('express');
const { connectToDatabase, secret } = require('./connect/db');
var cors = require('cors')
connectToDatabase();
const app = express();
app.use(express.json());

app.use('/api/notes', require('./routes/notes'));

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`at the port ${port}`);  
})

