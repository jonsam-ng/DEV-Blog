import React from 'react';
import {IComment} from '../../../interface/index';
import PostComment from '../../../components/common/postComment';
import CommentTree from '../../../components/common/commentTree';
import {useTranslation} from 'react-i18next';
import {Button, Input} from 'antd';
import './index.scss';

interface IProps {
  comments: Array<IComment>
}

const CommentBox = (props: IProps) => {
  const {t} = useTranslation();
  const {comments} = props;
  return (
    <div className="cb__container card">
      {/* 发表评论框 */}
      <PostComment />
      {/* 评论列表 */}
      <CommentTree comments={comments} />
    </div>
  )
}

export default CommentBox;