const express = require('express');
const articleRouter = require('./routes/articles')

const app = express();

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles =[{
        title : 'Test Title',
        createdAt: new Date().toDateString(),
        description: 'Test description'
    },
    {
        title : 'Test Title 2',
        createdAt: new Date().toDateString(),
        description: 'Test description'
    }]

    res.render('index', {articles : articles})
})

app.listen(5000);