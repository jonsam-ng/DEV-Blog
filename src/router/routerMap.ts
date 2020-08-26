/*
 * @Descripttion: 
 * @version: 注册路由
 * @Author: wuqingshan
 * @Date: 2020-08-25 17:53:41
 * @LastEditors: wuqingshan
 * @LastEditTime: 2020-08-25 20:14:11
 */
import React, {lazy} from 'react';
const Home = lazy(() => import('../components/home'));
const Article = lazy(() => import('../components/article'));

const routerMap: any = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    showHeader: true,
  },
  {
    path: '/post/:id',
    name: 'Article',
    component: Article,
    showHeader: true,
  },
]

export default routerMap;