import React from 'react';
import {IUser} from '../../../interface/index';
import Image from '../../../components/common/Image';
import HTMLRender from '../../../components/common/HTMLRender';
import {Button} from 'antd';
import {useTranslation} from 'react-i18next';
import './index.scss';

interface IProps {
  user: IUser
}
const AuthorBox = (props: IProps) => {
  const {t} = useTranslation();
  const {user} = props;
  const {userID, name, avatar, github, website, email, intro, work, company, age, joinDate, links, labels, phone} = user;
  
  const infoItem = (title: string, detail: string) => {
    return (
      <div className="ab__info--item">
        <p>{title}</p>
        <p>{detail}</p>
      </div>
    )
  }
  
  return (
    <div className="authorbox__container card">
      <div className="ab__title--wrapper">
        <Image
          url={avatar as string}
          className='ab__user--avatar'
        />
        <p>{name}</p>
      </div>
      {
        intro && <HTMLRender html={intro as string} />
      }
      <Button className='ab__btn--follow'>{t('follow')}</Button>
      {
        joinDate && infoItem(t('joined'), joinDate.toString())
      }
      {
        age && infoItem(t('age'), age.toString())
      }
      {
        work && infoItem(t('work'), work as string)
      }
      {
        company && infoItem(t('company'), company)
      }
      {
        labels && infoItem(t('labels'), labels.reduce((pre, cur) => {
          return pre + ' | ' + cur
        }))
      }
    </div>
  )
}

export default AuthorBox;