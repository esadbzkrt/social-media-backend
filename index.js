const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

const PORT = process.env.PORT;
const MONGO = process.env.MONGO;

mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log('Connected to MongoDB');

}
);

// Middleware

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/', (req, res) => {
    res.send('Hello World');

}
);



app.listen(PORT, () => {
    console.log("Server started on port", `${PORT}`);
}
);

