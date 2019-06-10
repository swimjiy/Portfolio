import Home from './components/Home.vue';
import HtmlTemplate from './components/HtmlTemplate.vue';
import Lifecycle from './components/Lifecycle.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/htmlTemplate',
        component: HtmlTemplate
    },
    {
        path: '/lifecycle',
        component: Lifecycle
    }
]

export default routes;