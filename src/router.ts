import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import DetalheTarefa from './pages/DetalheTarefa';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', 
            component: Home,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/detalhe', 
            component: DetalheTarefa,
            name: 'detalhe',
            props : true,
            meta: {
                title: 'Detalhe'
            }
        },
        {
            path: '*',
            component: NotFound,
            meta: {
                title: '404'
            }
        }
    ]
});