import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from 'antd';
import {LoginOutlined, UserAddOutlined} from '@ant-design/icons';
import './index.scss';

interface IProps {}

const LoginBox = (props: IProps) => {
  const {t} = useTranslation();
  return (
    <div className="loginbox__container">
      <div className="loginbox__wrapper--title">
        {t('join_site')}
      </div>
      <div className="loginbox__wrapper--btns">
        <Button type="primary" icon={<LoginOutlined />} size='large'>
          {t('login_in')}
        </Button>
        <Button type="primary" icon={<UserAddOutlined />} size='large'>
          {t('sign_up')}
        </Button>
      </div>
    </div>
  )
}

export default LoginBox;