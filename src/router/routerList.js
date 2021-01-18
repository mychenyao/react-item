import {lazy} from 'react'
const Home = lazy(() => import("../pages/home/index.jsx"));
const Order = lazy(() => import("../pages/order/order"));
const Rotary = lazy(() => import("../pages/rotary/rotary"));
const User = lazy(() => import("../pages/user/user"));
const Music = lazy(() => import("../pages/music/music"));
export const routerList = [
    {
        path: '/home',
        component: Home,
        exact: true
    },
    {
        path: '/order',
        component: Order,
        exact: true
    }, {
        path: '/rotary',
        component: Rotary,
        exact: true
    }, {
        path: '/user',
        component: User,
        exact: true
    }, {
        path: '/music',
        component: Music,
        exact: true
    },
]
