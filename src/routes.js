import Home from './components/Home.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Project from './components/Project.vue';
import Contact from './components/Contact.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/About',
        component: About
    },
    {
        path: '/Skills',
        component: Skills
    },
    {
        path: '/Project',
        component: Project
    },
    {
        path: '/Contact',
        component: Contact
    }
]

export default routes;