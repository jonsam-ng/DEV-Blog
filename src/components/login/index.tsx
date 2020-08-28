import React, {useState} from 'react';
import RainbowDev from '../../assets/images/rainbowdev.png';
import {Switch, Route, useRouteMatch, NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {Form, Input, Button, Switch as AntSwitch, Divider} from 'antd';
import {GithubOutlined, WechatOutlined} from '@ant-design/icons';
import './index.scss';

const Login = () => {
  const {t} = useTranslation();
  const {path, url} = useRouteMatch();
  const [form] = Form.useForm();
  return (
    <div className="login__container">
      <div className="lo__banner--wrapper">
        <img src={RainbowDev} alt="dev_banner" />
        <h1>{t('welcome_banner')}</h1>
        <h2>{t('welcome_detail')}</h2>
      </div>
      <div className="lo__login--wrapper">
        <ul className='lo__login--tabs'>
          <li>
            <NavLink to={url} exact activeClassName='active'>{t('login')}</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/new`} exact activeClassName='active'>{t('signup')}</NavLink>
          </li>
        </ul>
        {/* 登录和注册组件 */}
        <Switch>
          <Route exact={true} path={path}>
            <div className="lo__login--box">
              <p className='lo__login--tip'>{t('have_account')}</p>
              <Form
                form={form}
                layout="vertical"
              >
                {/* 邮箱 */}
                <Form.Item label={t('email')} required>
                  {/* TODO 邮箱格式验证 */}
                  <Input placeholder={t('email_placeholder')} />
                </Form.Item>
                {/* 密码 */}
                <Form.Item label={t('password')} required>
                  <Input type='password' placeholder={t('password_placeholder')} />
                </Form.Item>
                {/* 记住我 */}
                <Form.Item className='lo__login--remme'>
                  <label>
                    <AntSwitch defaultChecked /><span>{t('remember_me')}</span>
                  </label>
                </Form.Item>
                <Form.Item className='lo__login--now'>
                  <Button type="primary">{t('login')}</Button>
                </Form.Item>
              </Form>
              <Divider />
              <div className="lo__social--wrapper">
                <p>{t('social_login_tip')}</p>
                <div className="loginbox__wrapper--btns">
                <Button type="primary" icon={<GithubOutlined />} size='large'
                  onClick={() => {}}
                >
                  {t('gh_login')}
                </Button>
                <Button type="primary" icon={<WechatOutlined />} size='large'>
                  {t('wechat_login')}
                </Button>
              </div>
              </div>
              <div className="lo__forget--pass">
                <p><b><i>{t('gotget_password')}</i></b></p>
              </div>
            </div>
          </Route>
          <Route exact path={`${path}/new`}>
            <div className="lo__login--box">
                <p className='lo__login--tip'>{t('signup_tip')}</p>
                <Form
                  form={form}
                  layout="vertical"
                >
                  {/* 邮箱 */}
                  <Form.Item label={t('email')} required>
                    {/* TODO 邮箱格式验证 */}
                    {/* TODO 获取验证码的按钮, 验证码发送提醒 */}
                    <Input placeholder={t('email_placeholder')} />
                  </Form.Item>
                  {/* 密码 */}
                  <Form.Item label={t('password')} required>
                    <Input type='password' placeholder={t('password_placeholder')} />
                  </Form.Item>
                  {/* 确认密码 */}
                  <Form.Item label={t('check_password')} required>
                    <Input type='password' placeholder={t('re_password_placeholder')} />
                  </Form.Item>
                  {/* 验证码 */}
                  <Form.Item label={t('captcha')} required>
                    <Input type='password' placeholder={t('captcha_placeholder')} />
                  </Form.Item>
                  {/* 立即登录 */}
                  <Form.Item className='lo__login--remme'>
                    <label>
                      <AntSwitch defaultChecked /><span>{t('login_after_signup')}</span>
                    </label>
                  </Form.Item>
                  <Form.Item className='lo__login--now'>
                    <Button type="primary">{t('signup')}</Button>
                  </Form.Item>
                </Form>
                <Divider />
                <div className="lo__social--wrapper">
                  <p>{t('social_login_tip')}</p>
                  <div className="loginbox__wrapper--btns">
                  <Button type="primary" icon={<GithubOutlined />} size='large'
                    onClick={() => {}}
                  >
                    {t('gh_login')}
                  </Button>
                  <Button type="primary" icon={<WechatOutlined />} size='large'>
                    {t('wechat_login')}
                  </Button>
                </div>
                </div>
              </div>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Login;