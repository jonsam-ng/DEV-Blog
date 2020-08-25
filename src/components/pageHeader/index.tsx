import React from 'react';
import logo from '@/assets/images/logo.png';
// import icons
import location from '@/assets/icons/svg/location.svg';
import phone from '@/assets/icons/svg/phone.svg';

// import components
// import ImgTextRow from "@/components/common/img-test-row";
// import NavBar from '@/components/navigator';

// import inteface
// import { INav } from '@/components/interface';

// import style
import './index.scss';

const PageHeader = (props: any) => {
	// define navigator items
	const navData = [										
		{
			name: 'HOME',
			type: 3,
			ref: 'http://www.baidu.com',
			content: []
		},
		{
			name: 'ABOUT US',
			type: 3,
			ref: 'http://www.baidu.com',
			content: []
		},
		{
			name: 'MENU',
			type: 0,
			ref: '',
			content: [
				{
					img: 'https://livedemo00.template-help.com/wt_62172/images/menu-food-01.png',
					detail: 'SUSHI',
					group: '',
					url: 'https://livedemo00.template-help.com/wt_62172/images/menu-food-01.png'
				},
				{
					img: 'https://livedemo00.template-help.com/wt_62172/images/menu-food-01.png',
					detail: 'SUSHI',
					group: '',
					url: 'https://livedemo00.template-help.com/wt_62172/images/menu-food-01.png'
				}
			]
		},
		{
			name: 'PAGES',
			type: 1,
			ref: '',
			content: [
				{
					img: '',
					detail: 'CAREER',
					group: 'Pages',
					url: 'http://www.baidu.com'
				},
				{
					img: '',
					detail: 'CAREER',
					group: 'Pages',
					url: 'http://www.baidu.com'
				}
			]
		},
		{
			name: 'GALLERY',
			type: 2,
			ref: '',
			content: [
				{
					img: '',
					detail: 'GRID GALLERY',
					group: '',
					url: 'http://www.baidu.com'
				}
			]
		}
	]
	return (
		<div className="container">
			<div className="header__wrapper">
				{/* logo */}
				<div className="header__block__logo">
					<img src={logo} className="header__img__logo" alt="xylink-logo" />
          <span className="header__text__title">𝕩𝕪𝕝𝕚𝕟𝕜 𝕗𝕠𝕠𝕕</span>
				</div>
				{/* location & phone */}
				<div className="header__block__location">
					{/* <ImgTextRow img={location} title="Tangyan Avenue" detail="Xi'an China" />
					<ImgTextRow img={phone} title="1-800-1234-567" detail="Mon–Sat: 9:00–18:00" /> */}
				</div>
			</div>
			{/* <NavBar data={navData} /> */}
		</div>
	);
};

export default PageHeader;