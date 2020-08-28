import React from 'react';
import {Row, Col, Button, Divider} from 'antd';
import {useTranslation} from 'react-i18next';
import {ILink} from '../../interface/index';
import {GithubOutlined, WechatOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons';
import logo from '../../assets/images/rainbowdev.png';
import fun from '../../assets/images/footer_fun.png';
import './index.scss';
const Footer = () => {
	const {t} = useTranslation();

	interface ILinkGroup {
		title: string,
		links: Array<ILink>,
	}
	// TODO 完善外链信息
	const siteLinks: Array<ILinkGroup> = [
		{
			title: 'Home',
			links: [
				{
					name: 'Home',
					url: '',
				},
				{
					name: 'Home',
					url: '',
				},
				{
					name: 'Home',
					url: '',
				},
				{
					name: 'Home',
					url: '',
				},
			]
		},
		{
			title: 'Home',
			links: [
				{
					name: 'Home',
					url: '',
				},
				{
					name: 'Home',
					url: '',
				},
				{
					name: 'Home',
					url: '',
				},
				{
					name: 'Home',
					url: '',
				},
			]
		},
		{
			title: 'Home',
			links: [
				{
					name: 'Home',
					url: '',
				},
				{
					name: 'Home',
					url: '',
				},
				{
					name: 'Home',
					url: '',
				},
				{
					name: 'Home',
					url: '',
				},
			]
		}
	]

	return (
		<div className="foot__container">
			<Row gutter={16}>
					{/* 站点简介 */}
					<Col span={8} className='footer_logo--wrapper'>
						<img src={logo} alt="footer_logo" />
						<p>{t('made_by_heart')}</p>
						<p>{t('website_desc')}</p>
						<div className="foot__contact-grp">
							<Button type="link" icon={<GithubOutlined />} />
							<Button type="link" icon={<WechatOutlined />} />
							<Button type="link" icon={<MailOutlined />} />
							<Button type="link" icon={<PhoneOutlined />} />
						</div>
						<p>{t('website_copyright')}</p>
					</Col>
					{/* 外链 */}
					<Col span={12} className='footer__links--wrapper'>
						{
							siteLinks.map(({title, links}, index) => (
								// 外链组
								<div className='footer__link--grp' key={index}>
									<h1>{title}</h1>
									<Divider />
									{/* 外链 */}
									<ul>
										{
											links.map(({name, url}, index) => (
											<li key={index}><a href={url} rel="noopener noreferrer" target='_blank'>{name}</a></li>
											))
										}
									</ul>
								</div>
							))
						}
					</Col>
					{/* 图案 */}
					<Col span={4} className='footer__fun--wrapper'>
						<img src={fun} alt="footer_fun" className='footer__fun-img' />
					</Col>
			</Row>
		</div>
	)
};

export default Footer;

