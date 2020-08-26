import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Input} from 'antd';
import './index.scss';

const PostComment = () => {
  const {t} = useTranslation();
  return (
    <div className="cb__post--comment">
        <div className="pc__title--wrapper">
          <h1>{t('discussion')}</h1>
          <Button shape='round'>{t('subscribe')}</Button>
        </div>
        {/* 评论框 */}
        <Input.TextArea
          placeholder={t('comment_box_placeholder')}
          autoSize={{ minRows: 3, maxRows: 6 }}
        />
        <div className="cb__post--now">
          {/*TODO 评论的高级功能 */}
          <div className="cb__post--more">more</div> 
          <div className="cb__post--btns">
            <Button shape='round'>{t('preview')}</Button>
            <Button shape='round'>{t('submit')}</Button>
          </div>
        </div>
      </div>
  )
}

export default PostComment;