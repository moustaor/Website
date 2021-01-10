import MainPage from './components/MainPage.vue'
import Resume from './components/Resume.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import ContactMe from './components/ContactMe.vue'


export default[
    {path: '/',component:MainPage},
    {path: '/Resume',component:Resume},
    {path: '/Experience',component:Experience},
    {path: '/Projects',component:Projects},
    {path: '/ContactMe',component:ContactMe},
]
