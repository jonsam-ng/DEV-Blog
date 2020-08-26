import React from 'react';
import Comment from '../../../components/common/comment';
import {IComment} from '../../../interface/index';
import './index.scss';

interface IProps {
  comments: Array<IComment>
}
const CommentTree = (props: IProps) => {
  const {comments} = props;
  return (
    <div className="commt__container"> 
      {/* TODO 将评论列表改为评论树 */}
      {
        comments.map((comment, index) => (
          <Comment comment={comment} key={comment.comment.commentID} />
        ))
      }
    </div>
  )
}

export default CommentTree;