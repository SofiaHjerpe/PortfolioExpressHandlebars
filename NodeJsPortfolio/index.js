const mongodb = require('mongodb')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main'
}))

app.set('view engine', 'hbs')
 app.use(express.static('public'))
app.get('/', (req, res)=> {
    res.render('home', { 
        title: 'Home Page',
        name: 'Sofia Hjerpe',
        isDisplayedName: false,
        style: 'home.css', 
        navigation: ''
    })
})
app.get('/about', (req, res)=> {
    res.render('about', { 
        title: 'About Me',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum nemo fugit doloribus tempore quibusdam, voluptatem id autem odio asperiores labore sequi consequuntur aliquam! Cupiditate officiis sint nesciunt eaque earum?',
        style: 'about.css',
        nava: 'about'
    } )
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        people: [
            "James", 
            "Peter",
            "Sadrack", 
            "Morissa"

       ],
       navc: 'contact'
});
})
app.get('/projects', async (req, res) => {
    const client = new mongodb.MongoClient("mongodb://127.0.0.1:27017")
    await client.connect()


    const db = client.db("ProjectssDB")

    const dbProjects = db.collection("Projects").find()

    const projects = []

    await dbProjects.forEach(p => {
        projects.push(p)
    })
    res.render('projects', 
    {
        projects,
        style: 'home.css'
    }
    )
   

})
app.listen(8000, () => {
    console.log("http://127.0.0.1:8000/");
})
