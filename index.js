const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

app.listen(3000, () => {
    console.log('Server started on port 3000');

}
);

