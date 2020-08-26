import React, {useRef} from 'react';
import './index.scss';

interface IProps {
  url: string,
  onErr?: () => void,
  lazy?: boolean, // TODO 图片懒加载
  style?:object,
  className?: string, 
}

const Image = (props: IProps) => {
  const img = useRef();
  const initProps = {
    url: props.url || '',
    onErr: props.onErr || function() {},
    lazy: props.lazy || false,
    className: props.className || '',
  }
  return (
    <div className={`img__container ${initProps.className}`} style={props.style}>
      <img 
        src={initProps.url}
        onError={initProps.onErr}
        alt=""/>
    </div>
  )
}

export default Image;