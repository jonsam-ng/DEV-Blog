import React, {useState} from 'react';
// import icons
import arrowDown from '@/assets/icons/svg/arrow_down.svg';
// import info from '@/utils/utils';
import './index.scss';

const NavBar = (props: any) => {

  const [activeTab, setActiveTab] = useState(0) // active tab

  const pushTo = (url: string) => {
    // Info.log(`Push to ${url}`);
  }

  const renderBoard = () => {

  }
  // const handleClick = (param: any) => {
    // setActiveTab()
    // render different content base on different type
  //   switch (tab.type) {
  //     case 1:
        
  //       break;
  //     case 2:

  //       break;
  //     case 3:
  //       pushTo(tab.ref);
  //       break;
    
  //     default:
  //       break;
  //   }
  // }

  const tabItems = props.data.map((tab: any, index: number) => {
  return (
    <li data-type={tab.type} onClick={() => {}}>
        {tab.name}
        {tab.type === 3 ? null : <img src={arrowDown} className="style.nav__span__arrow" alt="" />}
        {activeTab === index ? renderBoard() : null}
    </li>
  )
  })

  return (
    <div className="style.container">
      <ul className="style.nav__ul__tab">
        {tabItems} 
      </ul>
    </div>
  )
}

export default NavBar;