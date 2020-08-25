import React from 'react';
import './index.scss';

interface IProps{
  img: string,
  title: string,
  detail: string
}

const ImgTextRow = (props: IProps) => {
  return (
    <div className="container">
      <img src={props.img} className="itr__img__icon" alt="" />
      <div className="itr__block">
        <p>{props.title}</p>
        <p>{props.detail}</p>
      </div>
    </div>
  )
}

export default ImgTextRow;