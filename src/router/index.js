import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: '/',
    },
    {
        path: '/',
        name: 'menu',
        component: () => import('@/views/Menu.vue'),
    },
    {
        path: '/parallax',
        name: 'parallax',
        component: () => import('@/views/Parallax.vue'),
        children: [
            {
                path: 'multiLayered',
                name: 'multiLayered',
                component: () => import('@/components/Parallax/MultiLayered.vue'),
            },
            {
                path: 'parallaxJs',
                name: 'parallaxJs',
                component: () => import('@/components/Parallax/ParallaxJs.vue'),
            },
            {
                path: 'parallaxScrolling',
                name: 'parallaxScrolling',
                component: () => import('@/components/Parallax/ParallaxScrolling')
            },
            {
                path: 'parallaxSwiper',
                name: 'parallaxSwiper',
                component: () => import('@/components/Parallax/ParallaxSwiper')
            },
            {
                path: 'laxJs',
                name: 'laxJs',
                component: () => import('@/components/Parallax/LaxJs')
            }
        ],
    },
    {
        path: '/carousel',
        name: 'carousel',
        component: () => import('@/views/Carousel.vue'),
        children: [
            {
                path: 'swiperParallaxBackground',
                name: 'swiperParallaxBackground',
                component: () => import('@/components/Carousel/SwiperParallaxBackground')
            },
            {
                path: 'swiperInfiniteLoop',
                name: 'swiperInfiniteLoop',
                component: () => import('@/components/Carousel/SwiperInfiniteLoop')
            },
            {
                path: 'owlCarousel',
                name: 'owlCarousel',
                component: () => import('@/components/Carousel/OwlCarousel')
            }
        ],
    },
    {
        path: '/scrolling',
        name: 'scrolling',
        component: () => import('@/views/Scrolling.vue'),
        children: [
            {
                path: 'aos',
                name: 'aos',
                component: () => import('@/components/Scrolling/aos')
            },
        ],
    },
    {
        path: '/home',
        name: 'homepage',
        component: () => import('@/components/HelloWorld.vue'),
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
