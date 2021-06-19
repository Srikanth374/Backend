const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./routers/auth.router');
const productRouter = require('./routers/product.router');
const orderRouter = require('./routers/order.router');
const middlewares = require('./middlewares');
const reviewRouter = require('./routers/review.router');
const todolistRouter = require('./routers/todo-list.router');

var cors = require('cors')

app.use(cors());
app.use(express.static('uploads'));
app.use(bodyParser.json({limit: '1mb'}));
// app.use(middlewares.authorization);
app.use('/v1/users', authRouter);
app.use('/v1/products', productRouter);
app.use('/v1/orders', orderRouter);
app.use('/v1/reviews/', reviewRouter);
app.use('/todolist/', todolistRouter);

mongoose.connect(`${config.MONGODB_URL}`, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`db is runing on port: 27017`);
    }
});


app.listen(config.portNo, () => {
    console.log(`Server is runing on:${config.portNo}`);
});




