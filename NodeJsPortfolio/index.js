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
app.get('/', async (req, res) => {
    
   
    res.render('home', { 
        title: 'Home Page',
    
    })
})
app.get('/about', (req, res)=> {
    res.render('about', { 
        title: 'About Me',
        description: 'My name is Sofia and I am 24 years old. In the summer of 2022, I took my bachelors degree from the ICT, media and design program at Södertörn University. During my education I learned more about programming. I have worked at Wellfish as a Junior Frontend developer. During my time at Wellfish, I learned more about structuring code. I also learned more about design and User experience. During my time at Wellfish, I learned more about the programming languages Vue.js, CSS, HTML, Javascript and Typescript. I also got to learn about Figma and CMS. ' +
       'I chose to quit working at Wellfish because I wanted a job with more collaboration. I was also interested to learn more about programming.'+
        ' On my free time I like to dance salsa and be with friends and family. Now Im taking a course called "Programmering fortsättning" at Distansakademin. In the course I learn about the following programming languages; C#, HTML, Javascript, .Net Core WebAPI/MVC, Entity framework, Node js and Vue.js.'+   
        ' In my studies at Södertörn University I learned about User interaction design, User interfaces and User friendly design. I made a website to my uncle. When making the website to my uncle I followed the Design thinking process. The Design thinking process consist of 5 elements. Empathy phase, Define phase, Idea generation phase, Prototyping phase and Iteration phase. For example I used the Prototyping phase by making a Hifi-prototype in Figma. I also used the Iteration phase by having contact with my uncle during the process. To see my projects go to Projects.'+   
        ' Im open for jobs as a UX/UI designer and as a Junior Frontend developer. If you are interested you are very welcome to contact me at; sofia.hjerpe@yahoo.com or send a message to Linkedin at @Sofia Hjerpe.',
        regards: 'Best regards,',
        myName: 'Sofia Hjerpe',
    } )
})


app.get('/projects', async (req, res) => {

    res.render('projects', 
    { 
        projects: [
            {
           title: 'Recipe App',
           description:  'I made a Recipe app in C# .NET MVC. The Recipe app consists of a list of recipes. The recipe has a title, summary and an image. If you click on details you come to a seperate page where you can take a closer look at the recipe. I also have a seperate console app where the user can add more recipes to the Recipe app.', 
           languages:'C# .NET MVC'
            },
            {
                title: 'Company Page',
                description: 'I made a website for a company that I named Traning.nu. The website includes a map and a form. For the design I used a lighter pink. For the design I used a lighter green color on buttons. I used the default C# and .NET MVC template. I used a light hovering color on links and buttons.',
                languages: 'C# .NET MVC, Console App, CSS, Javascript'
            },
            {
                title: 'Training App',
                description: 'I made a Training app. Here the user can create an exercise. The user can then go to Training history to tell how the training went.',
                languages: 'C# .NET MVC'
            },
            {
                title: 'My Relatives Website',
                description: 'During my studies I made a website to my Uncle that is an Music writer and an Illustrator. I made a web shop for his artwork. When I made the website I followed the Design Thinking process. The Design Thinking process has 5 phases. The 5 phases are; The empathy phase, the define phase, the idea generation phase, the prototype phase and the iteration phase. When building the website I for example used the prototyping phase to make a Hifi-prototype in Figma.',
                languages: 'Wordpress, Elementor, WooCommerce, Figma , CSS'
            },
            {
                title: 'Blogg App',
                description: 'I made a Blogg app. In the blogg app the user can view the blogg posts on the first page. The user can take a closer look att each post by clicking on details. The user can also create a new post by clicking on Create new.',
                languages: 'C# .NET MVC, Sql-databaser'
            },
            {
                title: 'Recipe Api App',
                description: 'I made a Recipe Api App. In this app the user are able to Create, Show, Edit and Delete recipes. To edit one recipe the user can copy the id of the recipe. The user can then update the values and click on execute.',
                languages: 'ASP .NET Core Web Api, Mongodb'
            },

        ],
        title: 'Projects'

       
});
        
app.get('/contact', (req, res) => {
    res.render('contact', {
        contactme: 'You can contact me in dm or on my email address!',
        contact: {
         Email: 'Sofia.hjerpe@yahoo.com', 
         GitHub: 'SofiaHjerpe',
         Linkedin: 'Sofia Hjerpe'
        },
        title: 'Contact',

});
})

   

})
app.listen(8000, () => {
    console.log("http://127.0.0.1:8000/");
})
