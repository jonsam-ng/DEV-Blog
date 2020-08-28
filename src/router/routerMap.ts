/*
 * @Descripttion: 
 * @version: 注册路由
 * @Author: wuqingshan
 * @Date: 2020-08-25 17:53:41
 * @LastEditors: wuqingshan
 * @LastEditTime: 2020-08-28 10:03:23
 */
import React, {lazy} from 'react';
const Home = lazy(() => import('../components/home'));
const Article = lazy(() => import('../components/article'));
const Login = lazy(() => import('../components/login'));

const routerMap: any = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    showHeader: true,
  },
  {
    path: '/post/:id',
    name: 'article',
    component: Article,
    showHeader: true,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    showHeader: true,
  },
]

export default routerMap;