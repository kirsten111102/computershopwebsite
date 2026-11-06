const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

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

app.get('/products', (req, res) => {
    res.render('product', {
        currentPageStyle: 'product.css'
    });
});

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    'press Ctrl-C to terminate. '))