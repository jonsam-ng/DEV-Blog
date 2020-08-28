import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Input, Button} from 'antd';
import {CommentOutlined, BellOutlined, MenuOutlined, TranslationOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';

import './index.scss';

const Header:React.FC = (props: any) => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  return (
    <div className='header__container'>
      <div className="header__wrapper--center">
        {/* 左边图标和搜索栏 */}
        <div className="header__logo--left">
          <div className="header__blk--logo" onClick={() => history.push('/home')}>{t('site_name')}</div>
          <Input.Search
            placeholder={t("search_tip")}
            onSearch={value => console.log(value)}
            className="header__input--search"
          />
        </div>
        {/* 右边创建按钮和快捷按钮 */}
        <div className="header__profle--right">
          <Button type="primary" shape="round" size='middle'>{t('write_a_post')}</Button>
          <Button type="primary" icon={<CommentOutlined />}  shape="circle" size='middle' />
          <Button type="primary" icon={<BellOutlined />}  shape="circle" size='middle' />
          <Button type="primary" icon={<MenuOutlined />}  shape="circle" size='middle' />
          <Button type="primary" icon={<TranslationOutlined />}  shape="circle" size='middle'
            onClick={()=>i18n.changeLanguage(i18n.language === 'en'?'zh_CN':'en')}
          ></Button>
        </div>
      </div>

    </div>
  )
}

export default Header;