import React from 'react';
import {IArticle} from '../../../interface/index';
import './index.scss';

interface IProps {
  article: IArticle
}

const ArticleBox = (props: IProps) => {
  const {article} = props;
  const {article: articleDetail, user} = article;
  const {postID, title, tags, author, postDate, readtime, content, like, thanks, readinglist} = articleDetail;
  const {userID, name, avatar, github, website, email, intro, work, company, age, joinDate, links, labels, phone} = user;
  return (
    <div className="ab__container">
      {/* 封面 */}
      {/* 标题 */}
      {/* 文章 */}
    </div>
  )
}

export default ArticleBox;