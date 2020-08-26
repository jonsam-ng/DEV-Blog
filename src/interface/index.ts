/*
 * @Descripttion: 
 * @version: 
 * @Author: wuqingshan
 * @Date: 2020-08-03 18:19:20
 * @LastEditors: wuqingshan
 * @LastEditTime: 2020-08-26 10:14:10
 */
// -------------------------------------------------- //
// -------------------------------------------------- //
// ------------------- HOME文章接口  --------------------- //
// -------------------------------------------------- //
// -------------------------------------------------- //
 export interface IPost{
  article: {
    album?: string,
    postDate: number,
    title: string,
    tags: Array<string>,
    like: number,
    comments: number,
    readtime: number,
  },
  user: {
    avatar: string,
    name: string,

  }
}

// -------------------------------------------------- //
// -------------------------------------------------- //
// -------------  --------------------- //
// -------------------------------------------------- //
// -------------------------------------------------- //
export interface IPostDetail{
  article: IArticle,
  comments: Array<IComment>,
  next: Array<INext>,
}

export interface IArticle {
  article: {
    postID: number,
    title: string,
    tags: Array<string>,
    author: string,
    postDate: number,
    readtime: number,
    content: string,
    like: number,
    thanks: number,
    readinglist: number,
  },
  user: {
    userID: number,
    name: string,
    avatar: string,
    github?: string,
    website?: string,
    email: string,
    intro?: string,
    work?: string,
    company?: string,
    age?: number,
    joinDate: number,
    links?: Array<string>,
    labels?: Array<string>,
    phone?: number,
  }
}
// -------------------------------------------------- //
// -------------------------------------------------- //
// -------------------- 评论接口 --------------------- //
// -------------------------------------------------- //
// -------------------------------------------------- //

export interface IComment {
  user: {
    userID: number,
    avatar: string,
    name: string,
  },
  comment: {
    content: string,
  }
}

// -------------------------------------------------- //
// -------------------------------------------------- //
// ----------------- 阅读推荐接口 --------------------- //
// -------------------------------------------------- //
// -------------------------------------------------- //
export interface INext {
  user: {
    userID: number,
    avatar: string,
  },
  article: {
    postID: number,
    title: string,
    author: string,
    postDate: number,
  }
}