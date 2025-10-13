const express  = require('express');
const app = express();
const PORT = process.env.PORT ;

app.get('/', (req, res) => {
    res.send(`Hello! Your application is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});