import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Input} from 'antd';

import './index.scss';

const Header:React.FC = (props: any) => {
  const { t, i18n } = useTranslation();
  // const [ idx, setIdx ] = useState(0);
  return (
    <div className='header__container'>
      <div className="header__wrapper--center">
        <div className="header__logo--left">
          <div className="header__blk--logo">DEV</div>
          <Input.Search
            placeholder={t("Search_tip")}
            onSearch={value => console.log(value)}
            className="header__input--search"
          />
        </div>
        <button onClick={()=>i18n.changeLanguage(i18n.language === 'en'?'zh_CN':'en')}>{i18n.language === 'en'?'English':'中文'}</button>
      </div>
      {/* <span>{t('loading')}</span> */}
      {/* <h1 onClick={() => {setIdx(idx+1)}}>{idx}</h1> */}
    </div>
  )
}

export default Header;