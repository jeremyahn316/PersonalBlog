import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ArticlePage from '@/components/ArticlePage.vue';
import Admin from '@/components/Admin.vue';
import Edit from '@/components/Edit.vue';
import New from '@/components/New.vue';
import Login from '@/components/Login.vue';

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: ArticlePage
    },
    {
        path: '/login',
        name: "Login",
        component: Login
    }, 
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: {requiresAdmin: true}
    },
    {
        path: '/edit/:id',
        name: "Edit",
        component: Edit,
        meta: {requiresAdmin: true}
    },
    {
        path: '/new',
        name: "New",
        component: New,
        meta: {requiresAdmin: true}
    }
    
]



const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
    // Example authentication and role check function
    const isAuthenticated = localStorage.getItem('loggedIn') === 'true';
    console.log(`${isAuthenticated}`);

    if (requiresAdmin & !isAuthenticated) {
        next({ name: 'Login' });
    } else {
        next();
    }
    
})

export default router;