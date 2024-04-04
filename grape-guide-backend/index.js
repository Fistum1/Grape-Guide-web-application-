const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'grape_guide',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// API to get recommended wine for a food
app.get('/api/food/:food', (req, res) => {
  const food = req.params.food;
  const query = `SELECT wines.name AS wine FROM foods
                 JOIN wines ON foods.wine_id = wines.id
                 WHERE foods.name = ?`;

  db.query(query, [food], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length === 0) {
      res.status(404).send('Food not found');
    } else {
      res.send(result[0]);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
