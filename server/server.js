const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/', (req, res) => {
    const feedback = req.body;
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support","comments")
     VALUES ($1, $2, $3 ,$4);`,
    [feedback.feeling, feedback.understanding, feedback.supported,feedback.comments])
    .then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error with INSERT feedback query', error);
        res.sendStatus(500);
    });
})

app.get('/admin', (req, res) => {  // creates "get" route
    pool.query('SELECT * FROM "feedback" ORDER BY "id" DESC;') // selects all items from "todo" table, ordered by rank
        .then((result) => {
            console.log(result);
            res.send(result.rows); 
        }).catch((error) => {
            console.log('Error with SELECT tasks query', error);
            res.sendStatus(500);
        });
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});