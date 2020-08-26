import React from 'react';
import {IArticle} from '../../../interface/index';
import Image from '../../../components/common/Image';
import {useTranslation} from 'react-i18next'; 
import {Button} from 'antd';
import {GithubOutlined, HomeOutlined} from '@ant-design/icons';
import './index.scss';

interface IProps{
  article: IArticle
}
const PostInfo = (props: IProps) => {
  const {t} = useTranslation();
  const {article} = props;
  const {article: articleDetail, user} = article;
  const {postID, album, title, tags, author, postDate, updateDate, readtime, content, like, thanks, comments, readinglist} = articleDetail;
  const {userID, name, avatar, github, website, email, intro, work, company, age, joinDate, links, labels, phone} = user;
  return (
    <div className="postif__container card">
      <p className='postif__publish--wrapper'><span>
        <i>{t('posted_on')}&nbsp;</i><b>{postDate}</b>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <i>{t('posted_by')}&nbsp;</i><b>{name}</b>:
      </span></p>
      <div className="postif__author--wrapper">
        <Image
          url={avatar as string}
          className='ab__author--avatar'
        />
        <p>{name}</p>
        <p>{work || t('no_work_detail')}</p>
        <div className="postif__social--wrapper">
          {
            github && <Button size='large' shape='circle' icon={<GithubOutlined />} href={github} target='_blank' />
          }
          {
            website && <Button size='large' shape='circle' icon={<HomeOutlined />} href={website} target='_blank' />
          }
        </div>
      </div>
    </div>
  )
}

export default PostInfo;