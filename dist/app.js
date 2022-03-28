const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
mongoose.connect('mongodb://localhost:27017/test1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
}))
    .catch((err) => console.log(err));
const model = require('./model');
app.post('/add-date', (req, res) => {
    const dateDetails = new model({
        date: new Date(),
        x: { y: "z" }
    });
    // add current date to mongoDB asynchrenously
    dateDetails.save();
    // send success response
    res.send('Success');
});
//# sourceMappingURL=app.js.map