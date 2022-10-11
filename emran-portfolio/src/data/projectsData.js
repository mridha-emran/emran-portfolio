import one from '../assest/weather-gif.gif'
import two from '../assest/new-blog.gif'
import three from '../assest/movie01-gif.gif'



export const projectsData = [
    {
        id: 1,
        projectName: 'Weather App',
        projectDesc: "une application Créée à partir d'une API qui permet aux utilisateurs de se renseigner sur la météo de n'importe quelle ville du monde. changement background-image selon de la météo et les utilisateurs peuvent ajouter 3 favoris  dans le Favorites (stockage local)",
        // projectDesc: 'an application Created from an API that allows users to learn about the weather in any city in the world. background change according to weather and users can add 3 favorite cities in Favorites (localstorage)',
        tags: ['React', 'BOOTSTRAP', 'wather API'],
        code: 'https://github.com/mridha-emran/wather-app',
        demo: 'https://mridha-emran.github.io/wather-app/',
        delay: 0.3,
        image: one
    },
    {
        id: 2,
        projectName: 'Blog-Fullstak',
        projectDesc:"une application de blog full-stack où les utilisateurs peuvent exécuter des fonctions CRUD avec leur post et compte." ,
        // projectDesc: 'This project is a railway tracking system that allows users to obtain relevant information about train timing.',
        tags: [' React', ' Axios' , 'CSS', 'Node.js(express)','Mongodb'],
        code: 'https://github.com/mridha-emran/full-stack-app-blog',
        demo: 'https://emran-blog.herokuapp.com/',
        delay: 0.6,
       image: two
    },
    {
        id: 3,
        projectName: 'Moviec',
        projectDesc: "une application créée à partir d'une API. Il permet aux utilisateurs de découvrir les films et sorties les plus populaires de la semaine. Il est également possible de choisir entre 2 films celui que vous préférez et de l'enregistrer dans les Favoris (localStorage)",
        // projectDesc: 'an application created from an API. It allows users to discover the most popular movies and releases of the week. It is also possible to choose between 2 films the one you prefer and to save it in Favorites (localStorage)',
        tags: ['React', 'BOOTSTRAP', 'wather API'],
        code: 'https://github.com/mridha-emran/react/tree/master/chapitre_06/movice',
        demo: '',
        delay: 1,
        image: three
    }
   
    
    
]