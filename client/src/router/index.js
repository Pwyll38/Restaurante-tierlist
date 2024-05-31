import { createRouter, createWebHistory } from 'vue-router';
import RestaurantView from '../components/RestaurantView.vue';
import RestaurantCardEdit from '../components/RestaurantCardEdit.vue';

const routes = [
    { path: '/', component: RestaurantView },
    {
        path: '/edit',
        name: 'edit',
        component: RestaurantCardEdit
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
