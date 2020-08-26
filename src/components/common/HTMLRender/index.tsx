import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './index.scss';

interface IProps {
  html: string,
  escape?: true,
}

// TODO html escape

const HTMLRender = (props: IProps) => {
  const {html, escape} = props;
  return (
    <div className="htr__container">
      {/* // dangerouslySetInnerHTML={{__html: html}} // Deprecated 原生DOM渲染效率低；XSS 详见： https://www.yuque.com/u116378/vtu6np/gos26e
      // ---------- 使用react-html-parser ---------- // */}
      { ReactHtmlParser(html, {
        transform: function transform (node: any) {
            // 过滤 input 标签
            if (node.type === 'input') {
                return null;
            }
        }
      })}
    </div>
  )
}

export default HTMLRender;