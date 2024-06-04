import { createRouter, createWebHistory } from 'vue-router';
import RestaurantView from '../components/RestaurantView.vue';
import RestaurantCardEdit from '../components/RestaurantCardEdit.vue';
import RestaurantCardCreate from '../components/RestaurantCardCreate.vue';

const routes = [
    { path: '/', component: RestaurantView },
    {
        path: '/edit',
        name: 'edit',
        props: (route) => ({
            id: route.query.id,
            name: route.query.name,
            quality: route.query.quality,
            price: route.query.price,
            ambience: route.query.ambience
          }),
        component: RestaurantCardEdit
    },
    {path: '/create',
    name: 'create',
    props: (route) => ({
        id: route.query.id
    }),
     component: RestaurantCardCreate }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
