import React, {lazy} from 'react';
import './index.scss';
const LoginBox = lazy(() => import('../../../common/loginBox'));

interface IProps {

}

const Righter = (props: IProps) => {
  return (
    <div className="homerit__container">
      <LoginBox />
    </div>
  )
}

export default Righter;