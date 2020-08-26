import React, { FC, Fragment, lazy} from 'react';
import chunk from "lodash/chunk";
import { useBoolean } from 'ahooks';
import DocumentTitle from 'react-document-title';
import { Row, Col } from 'antd';
import {useTranslation} from 'react-i18next';
const Posts = lazy(() => import('../posts'));
const Righter = lazy(() => import('./components/righter'));
  
const Home: FC = () => {
  // const [light, { toggle }] = useBoolean(false);
  // console.log(chunk(['a', 'b', 'c', 'd'], 2));
  const {t} = useTranslation();
  return (
  <DocumentTitle title={t('dev_community')}>
    <Fragment>
      {/* <h1 onClick={() => toggle()}>Home</h1>
      <h2>Light is { light ? 'on' : 'off' }.</h2> */}
      <Row gutter={20}>
        <Col className="gutter-row" span={6}>
          {/* 左侧侧边栏 */}
          <div style={{border: '2px solid red'}}>左侧侧边栏</div>
        </Col>
        <Col className="gutter-row" span={12}>
          {/* 文章列表 */}
          <Posts/>
        </Col>
        <Col className="gutter-row" span={6}>
          {/* 右侧侧边栏 */}
          <Righter />
        </Col>
      </Row>
    </Fragment>
  </DocumentTitle>)

}

export default Home;