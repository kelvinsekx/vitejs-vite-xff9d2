import { createWebHistory, createRouter } from 'vue-router';
import HelloWorld from './HelloWorld.vue';
import Profile from './Profile.vue';
const history = createWebHistory();

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/:name', component: Profile },
];

const router = createRouter({ history, routes });
export default router;
