const express = require('express');
const { AllRouter } = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AllRouter);

app.listen(4000, () => console.log('Client running on port 4000'))