import React, { FC, lazy, Suspense } from 'react';
import Router from './router';
import useStore from './stores/index';
import { observer } from 'mobx-react';
import { Spin, BackTop } from 'antd';
// import CircleLoading from './components/common/loading/circleLoading';
import './App.scss';
// import * as Sentry from '@sentry/browser';
const Header = lazy(() => import('./components/header'));

// const onError = e => {
//   Sentry.withScope(scope => {
//     scope.setExtras({ componentStack: e.message }); 
//     // 因为我用的是tsx，对类型要求的比较严格，所以才会写成对象的方式传参，componentStack是componentDidcatch的error参数的key
//     Sentry.captureException(e.error);
//   });
// };
// // 必须要用addEventListener，并且第三个参数为true，不然错误无法冒泡到app.jsx中
// window.addEventListener('error', onError, true);

const App: FC = () => {
  const { baseStoreDecorate, baseStore } = useStore();
  const { idx, strIdx, add } = baseStore;
  return (
    <Suspense fallback={<Spin tip="Loading..." style={{marginTop: '2%'}}></Spin>}>
      <div className="App">
        <Header></Header>
        <Router></Router>
        <BackTop />
      </div>
    </Suspense> 
  );
}

export default observer(App);