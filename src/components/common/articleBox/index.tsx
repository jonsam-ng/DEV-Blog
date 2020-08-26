import React from 'react';
import {IArticle} from '../../../interface/index';
import Image from '../../../components/common/Image';
import {useTranslation} from 'react-i18next';
import HTMLRender from '../../../components/common/HTMLRender';
import './index.scss';

interface IProps {
  article: IArticle
}
const ab_tag_bg_colors = ['#56C4F6', '#1C1C1C', '#028334', '#2A2566', '#562865', '#F7DF1C'];

const ArticleBox = (props: IProps) => {
  const {t} = useTranslation();
  const {article} = props;
  const {article: articleDetail, user} = article;
  const {postID, album, title, tags, author, postDate, updateDate, readtime, content, like, thanks, comments, readinglist} = articleDetail;
  const {userID, name, avatar, github, website, email, intro, work, company, age, joinDate, links, labels, phone} = user;
  return (
    <div className="ab__container card">
      {/* 封面 */}  
      {
        album && <Image
          url={album as string}
          className='ab__image--album'
        />
      }
      <div className="ab__content--wrapper">
        {/* 标题 */}
        <div className="ab__title--wrapper">
          <h1>{title}</h1>
          <p>
            {
              tags.map((tag, index) => (
                <span className='ab__title--tags' 
                  style={{backgroundColor: ab_tag_bg_colors[index%ab_tag_bg_colors.length]}}
                  key={index}>
                  #{tag}
                </span>
              ))
            }
          </p>
          <div className="ab__title--author">
            <Image
              url={avatar as string}
              className='ab__author--avatar'
            />
            <p>
              <span><b>{author}</b></span>
              <span><i>{t('posted_on')}&nbsp;</i><b>{postDate}</b>・<i>{t('updated_on')}&nbsp;</i><b>{updateDate}</b>・<b>{readtime}</b><i>{t('min_read')}</i></span>
            </p>
          </div>
        </div>
        {/* 文章 */}
        <div className="ab__article--wrapper">
            <HTMLRender html={content}/>
        </div>
      </div>
    </div>
  )
}

export default ArticleBox;