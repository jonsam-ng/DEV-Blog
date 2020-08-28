import React from 'react';
import {HeartOutlined, PayCircleOutlined, TagsOutlined, ShareAltOutlined} from '@ant-design/icons';
import './index.scss';
interface IOptIcon {
  icon: any,
  onclick: () => void,
}
const opts: Array<IOptIcon> = [
  {
    icon: <HeartOutlined />,
    onclick: () => {},
  },
  {
    icon: <PayCircleOutlined />,
    onclick: () => {},
  },
  {
    icon: <TagsOutlined />,
    onclick: () => {},
  },
  {
    icon: <ShareAltOutlined />,
    onclick: () => {},
  },
]

const OptBox = () => {
  return (
    <div className="optbox__container">
      {
        opts.map((opt, index) => (
          <div className="opt__icon--wrapper"
          key={index}
          onClick={opt.onclick}
          >
            {opt.icon}
          </div>
        ))
      }
    </div>
  )
}

export default OptBox;