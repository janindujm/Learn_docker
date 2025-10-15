const express  = require('express');
const app = express();
const PORT = process.env.PORT ;

app.get('/', (req, res) => {
    res.send(`Hello! Your ${process.env.App_NAME} is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//curl http://localhost:5000