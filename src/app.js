import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

//settings
app.set('port', 4000);


// middlewares
app.use(bodyParser.json());
app.use(cors());

app.use((_, res, next) => {
    res.set({ Tk: '!' })
    next()
});

// routes
app.use('/api/vehicle', require('./infrastruture/routes/vehicle'));
app.use('/api/vehicleType', require('./infrastruture/routes/vehicleType'));

module.exports = app;