import React from 'react';
import {IPost} from '../../../interface/index';
import Image from '../Image';
import {useTranslation} from 'react-i18next';
import {HeartOutlined, MessageOutlined, ReadOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom';
import './index.scss';

interface IProps{
  post: IPost
}

const Post = (props: IProps) => {
  const {post} = props;
  const {article, user} = post;
  const {album, postDate, title, tags, like, comments, readtime} = article;
  const {avatar, name} = user;
  const {t} = useTranslation();
  const history = useHistory();
  return (
    <div className="post__container" onClick={() => {history.push(`/post/${1}`)}}>
      {/* 封面 */}
      {
        album && <Image
          url={album as string}
          className='post__image--album'
        />
      }
      {/* 内容 */}
      <div className="post__board--wrapper">
        {/* 封面 */}
        <Image
          url={avatar}
          className='post__image--avatar'
        />
        {/* 用户 */}
        <div className="post__user--info">
          <p>{name}</p>
          <p>{postDate}</p>
        </div>
        {/* 标题与标签 */}
        <div className="post__article--title">
          <h1>{title}</h1>
          {
            tags.length && tags.map((item, index) => (
              <span className="post__article--tag" key={index}>#{item}</span>
            ))
          }
        </div>
        {/* 数据 */}
        <div className="post__article--count">
          <div className="post__count--left">
            <p>
              <span><HeartOutlined style={{marginRight: 10}}/>{`${like} ${t('like')}`}</span>
              <span><MessageOutlined style={{marginRight: 10}}/>{`${comments} ${t('comment')}`}</span>
            </p>
          </div>
          <div className="post__count--read">
            <p>
              <span><ReadOutlined style={{marginRight: 10}}/>{`${readtime} ${t('min_read')}`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;