import React from 'react';
import {useTranslation} from 'react-i18next';
import {Menu} from 'antd';
import './index.scss';

interface IProps {

}

const postNavData = {
  items: ['feed', 'week', 'month', 'year', 'infinity', 'latest']
}

const PostNav = (props: IProps) => {
  const {t} = useTranslation();
  return (
    <div className="postnav__container">
      {/* 左侧标题 */}
      <h1>{t('posts')}</h1>
      {/* 右侧导航 */}
      <div className="postnav__nav--wrapper">
        <Menu
          defaultSelectedKeys={['0']}
          mode='horizontal'
          theme='light'
          className='postnav__nav--menu'
        >
          {
            postNavData.items.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  {t(item)}
                </Menu.Item>
              )
            })
          }
        </Menu>
      </div>
    </div>
  )
}

export default PostNav;