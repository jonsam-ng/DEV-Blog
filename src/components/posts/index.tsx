import React from 'react';
import PostNav from './components/postNav';
import Post from '../../components/common/post';
import {IPost} from '../../interface/index';
import './index.scss';
import { random } from 'lodash';

interface IProps {

}

const postData: IPost = {
  article: {
    album: 'https://res.cloudinary.com/practicaldev/image/fetch/s--0J-QW6Fv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/m33raj4cdipc5sv7c57y.png',
    postDate: new Date().getTime(),
    title: 'Three Cheers for the MLH Fellowship Graduates!',
    tags: ['mlhgrad', 'meta', 'opensource', 'github'],
    like: random(1000),
    comments: random(1000),
    readtime: random(10),
  },
  user: {
    avatar: 'https://res.cloudinary.com/practicaldev/image/fetch/s--mbsgKaXh--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.png',
    name: 'James Cox',
  }
}

let postsDataArr: Array<IPost> = [];
for(let i=0; i<10; i++) {
  postsDataArr.push(postData);
}



const Posts = (props: IProps) => {
  return (
    <div className="posts__container">
      <PostNav/>
      <div className="posts__content--wrapper">
        {
          postsDataArr.map((item, index) => {
            return <Post post={item} />
          })
        }
      </div>
    </div>
  )
}

export default Posts;