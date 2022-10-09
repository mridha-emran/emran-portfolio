import one from '../assest/weather-gif.gif'
import two from '../assest/new-blog.gif'
import three from '../assest/movie01-gif.gif'



export const projectsData = [
    {
        id: 1,
        projectName: 'Weather App',
        projectDesc: 'an application Created from an API that allows users to learn about the weather in any city in the world. background change according to weather and users can add 3 favorite cities in Favorites (localstorage)',
        tags: ['React', 'BOOTSTRAP', 'wather API'],
        code: 'https://github.com/mridha-emran/wather-app',
        demo: 'https://mridha-emran.github.io/wather-app/',
        delay: 0.3,
        image: one
    },
    {
        id: 2,
        projectName: 'Blog-Fullstak',
        projectDesc: 'This project is a railway tracking system that allows users to obtain relevant information about train timing.',
        tags: [' React', ' Axios' , 'CSS', 'Node.js(express)','Mongodb'],
        code: 'https://github.com/mridha-emran/full-stack-app-blog',
        demo: 'https://emran-blog.herokuapp.com/',
        delay: 0.6,
       image: two
    },
    {
        id: 3,
        projectName: 'Moviec',
        projectDesc: 'an application created from an API. It allows users to discover the most popular movies and releases of the week. It is also possible to choose between 2 films the one you prefer and to save it in Favorites (localStorage)',
        tags: ['React', 'BOOTSTRAP', 'wather API'],
        code: '',
        demo: 'https://github.com/mridha-emran/react/tree/master/chapitre_06/movice',
        delay: 1,
        image: three
    }
   
    
    
]