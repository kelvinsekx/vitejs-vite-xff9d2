import { createWebHistory, createRouter } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Profile from './components/Profile.vue';
const history = createWebHistory();

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/:name', component: Profile },
];

const router = createRouter({ history, routes });
export default router;
