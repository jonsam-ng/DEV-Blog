import React from 'react';
import {IComment} from '../../../interface/index';
import Image from '../../../components/common/Image';
import HTMLRender from '../../../components/common/HTMLRender';
import {MoreOutlined, HeartOutlined} from '@ant-design/icons';
import {useTranslation} from'react-i18next';
import './index.scss';

interface IProps {
  comment: IComment,
  style?: {},
  className?: string 
}

const Comment = (props: IProps) => {
  const {t} = useTranslation();
  const {comment, style={}, className=''} = props;
  const {user, comment: commentDetail} = comment;
  const {userID, avatar, name} = user;
  const {commentID, time, like, content} = commentDetail;
  return (
    <div className={`comment__container ${className}`} style={style}>
      <div className="comment__user--wrapper">
        <div className="user__avatar--left">
          <Image
            url={avatar as string}
            className='comment__user--avatar'
          />
          <span>{name}</span>
        </div>
        <div className="user__date--right">
          <span>{time}</span><MoreOutlined />
        </div>
      </div>
      {/* 评论内容 */}{/* 将评论内容按照html渲染 */}
      <HTMLRender html={content}/>
      <div className="comment__reply-wrapper">
        <div className="reply__count--left">
          <p><HeartOutlined /><span>{like}</span></p>
        </div>
        <div className="reply__right">
          <span>{t('reply')}</span>
        </div>
      </div>
    </div>
  )
}

export default Comment;