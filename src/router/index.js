import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index.vue'

Vue.use(Router)
const routes = [{
        path: '/',
        name: 'index', //首页
        meta: {
            title: '首页',
            auth: false
        },
        component: Index
    },
    {
        path: '/all',
        name: 'all', //全部商品
        meta: {
            title: '全部商品',
            auth: false
        },
        component: resolve => require(['../views/all-product/all-product.vue'], resolve)
    },
    {
        path: '/lottery',
        name: 'lottery', //最新揭晓
        meta: {
            title: '最新揭晓',
            auth: false
        },
        component: resolve => require(['../views/lottery/lottery.vue'], resolve)
    },
    {
        path: '/mycart',
        name: 'mycart', //购物车
        meta: {
            title: '购物车',
            auth: false
        },
        component: resolve => require(['../views/mycart/mycart.vue'], resolve),
        children: [{
            path: 'pay',
            meta: {
                title: '结算'
            },
            component: resolve => require(['../views/mycart/pay.vue'], resolve)
        }]
    },
    {
        path: '/user',
        name: 'user', //用户页
        meta: {
            title: '用户页',
            auth: false
        },
        component: resolve => require(['../views/user/user.vue'], resolve),
        children: [{
                path: 'record',
                component: resolve => require(['../views/user/record.vue'], resolve),
                meta: {
                    title: '云购记录'
                }
            },
            {
                path: 'haveWin',
                component: reslove => require(['../views/user/have-win.vue'], reslove),
                meta: {
                    title: '获得的商品'
                }
            },
            {
                path: 'orderDetail',
                component: reslove => require(['../views/user/order-detail.vue'], reslove),
                meta: {
                    title: '订单详情'
                }
            },
            {
                path: 'ShowDelivery',
                component: reslove => require(['../views/user/Show-delivery.vue'], reslove),
                meta: {
                    title: '物流详情'
                }
            },
            {
                path: 'my-postlist',
                component: reslove => require(['../views/user/my-postlist.vue'], reslove),
                meta: {
                    title: '我的晒单'
                }
            },
            {
                path: 'wallet',
                component: reslove => require(['../views/user/wallet.vue'], reslove),
                meta: {
                    title: '钱包'
                }
            },
            {
                path: 'consumption',
                component: reslove => require(['../views/user/consumption.vue'], reslove),
                meta: {
                    title: '账户明细'
                }
            },
            {
                path: 'userpoints',
                component: reslove => require(['../views/user/userpoints.vue'], reslove),
                meta: {
                    title: '福分'
                }
            },
            {
                path: 'commission',
                component: reslove => require(['../views/user/commission.vue'], reslove),
                meta: {
                    title: '佣金'
                }
            },
            {
                path: 'charge',
                component: reslove => require(['../views/user/charge/charge.vue'], reslove),
                meta: {
                    title: '充值'
                }
            },
            {
                path: 'sets',
                component: reslove => require(['../views/user/sets.vue'], reslove),
                meta: {
                    title: '设置'
                }
            },{
                 path: 'delivery-address',
                component: reslove => require(['../views/user/delivery-address.vue'], reslove),
                meta: {
                    title: '收货地址管理'
                }
            },
            {
                 path: 'add-address',
                component: reslove => require(['../views/user/add-address.vue'], reslove),
                meta: {
                    title: '添加地址'
                }
            }

        ]
    },
    {
        path: "/goods/:goods_id/period/:period", //goods_id是商品的id,period是批次
        name: "goodDetail", //商品详情页
        component: require('../views/good-detail.vue'),
        meta: {
            title: '商品详情',
            auth: false
        }
    }, {
        path: "/search",
        name: "search", //搜索页
        component: reslove => require(['../views/search.vue'], reslove),
        meta: {
            title: '搜索',
            auth: false
        }
    },
    {
        path: '/loginIn',
        name: 'loginIn',
        component: reslove => require(['../views/login.vue'],reslove),
        meta: {
            title: '登录',
            auth: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component:  reslove => require(['../views/register.vue'],reslove),
        meta: {
            title: '注册',
            auth: false
        }
    },
    {
        path: '/forgetPassword',
        name: 'forgetPassword',
        component:  reslove => require(['../views/forget-password.vue'],reslove),
        meta: {
            title: '找回密码',
            auth: false
        }
    },
    {
        path: '/postList',
        name: 'postList',
        component:  reslove => require(['../views/post-list.vue'],reslove),
        meta: {
            title: '晒单',
            auth: false
        }
    },
    {
        path: '*', //默认跳转页
        redirect: '/'
    }
]
const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes
})
export default router;