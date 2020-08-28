import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from 'antd';
import {LoginOutlined, UserAddOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import './index.scss';

interface IProps {}

const LoginBox = (props: IProps) => {
  const {t} = useTranslation();
  const history = useHistory()

  return (
    <div className="loginbox__container">
      <div className="loginbox__wrapper--title">
        {t('join_site')}
      </div>
      <div className="loginbox__wrapper--btns">
        <Button type="primary" icon={<LoginOutlined />} size='large'
          onClick={() => history.push('/login')}
        >
          {t('login')}
        </Button>
        <Button type="primary" icon={<UserAddOutlined />} size='large'>
          {t('signup')}
        </Button>
      </div>
    </div>
  )
}

export default LoginBox;