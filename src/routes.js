import Home from './components/Home.vue';
import About from './components/About.vue';
import Project from './components/Project.vue';
import Contact from './components/Contact.vue';

const routes = [
    {
        path: '/',
        component: Home,
        meta: {scrollToTop: true}
    },
    {
        path: '/About',
        component: About
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