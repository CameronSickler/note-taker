const app = express();

const fs = require('fs');
const path = require('path');

const htmlRoutes = require('./server')

const PORT = process.env.PORT || 3001;


app.get('/api/animals', (req, res) => {
    res.send('Hello!');
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});

