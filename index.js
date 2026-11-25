require('dotenv').config();

const express = require('express');
const expressHandlebars = require('express-handlebars');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const productRoutes = require('./routers/ProductRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'index',
}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('homepage', {
        currentPageStyle: 'homepage.css'
    });
})

app.get('/login', (req, res) => {
    res.render('login', {
        layout: 'loginlayout'
    });
});

app.get('/register', (req, res) => {
    res.render('register', {
        layout: 'loginlayout'
    });
});

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(port, () => console.log(
            `Express started on http://localhost:${port}; ` +
            'press Ctrl-C to terminate. '))
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });