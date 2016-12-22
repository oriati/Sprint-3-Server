
import About            from './pages/about.vue';
import Home             from './pages/home.vue';

import Cars             from './pages/cars.vue';
import CarCenter        from './cars/car-center.vue';
import CarDetails       from './cars/car-details.vue';
import CarEdit          from './cars/car-edit.vue';


export default [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/car', component: Cars, children: [
        {path: '', component: CarCenter},
        {path: 'edit', component: CarEdit},
        {path: ':id/edit', component: CarEdit},
        {path: ':id', component: CarDetails},
    ]},
    {path: '*', redirect: '/'}

]
