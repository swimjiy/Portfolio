import Home from './views/Home.vue';
import About from './views/About.vue';
import Project from './views/Project.vue';

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
    }
]

export default routes;