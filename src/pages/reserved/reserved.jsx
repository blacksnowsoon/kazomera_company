import { useState } from 'react'
import MinHeader from '../../components/header_minimum/minHeader'
import Notifications from '../../components/notifications_section/notific'

import MainNav from '../../components/nav_main/mainNav'
import Correspondence from '../../components/correspondence_section/corresp'
import './reserved.css';

import ArticleInvestments from '../../components/articles_investments/article_invest'
import ArticleNews from '../../components/articles_news/article_news'
import ArticleProjects from '../../components/articles_projects/article_projects'
import ArticleContributions from '../../components/articles_contributions/article_cont'
// import ArticlesProjects from '../../components/articles_projects/articles_projects'
// import ArticlesContributions from '../../components/articles_contributions/articles_cont'
// import ArticlesInvestments from '../../components/articles_investments/articles_invest'
import Foryou from '../../components/foryou_section/foryou'

const articlesAPI = [
	{
		name: "الكل", 
		type: "all"
	}, 
	{
		name: "الأخبار", 
		type: "news", 
		content: [
			<ArticleNews heading={"خبر 1"} />, 
			<ArticleNews heading={"خبر 2"} />
	]
	}, 
	{
		name: "المشروعات", 
		type: "projects", 
		content: [
			<ArticleProjects heading={"مشروع 1"} />
		]
	}, 
	{
		name: "المساهمات", 
		type: "contributions", 
		content: [
			<ArticleContributions heading={"مساهمة 1"} />, 
			<ArticleContributions heading={"مساهمة 2"} />, 
		]
	},
	{
		name: "الاستثمارات", 
		type: "investments", 
		content: [
			<ArticleInvestments heading={"استثمار 1"} />, 
			<ArticleInvestments heading={"استثمار 2"} />, 
			<ArticleInvestments heading={"استثمار 3"} />
		]
	} 
];

export default function Reserved() {

	const [currentFilter, setCurrentFilter] = useState(articlesAPI[0].type);

	return (
		<div className='reserved'>
      <div className='reserved__header'>
        <MinHeader />
      </div>
      <main className='reserved__body'>
			<div className='left-sidebar'>
				<Notifications />
			</div>
			<div className='reserved__content'>  
				<ul className='reserved__options--filters items-btns items-btns--blue-active'>
					{
						articlesAPI.map(({name, type}, i) => (
							<li key={i} 
									className={currentFilter === type ? "active":""}
									onClick={() => setCurrentFilter(type)}
									>{name}
							</li>
						))
					}
				</ul>
				<div className='reserved__articles'>
					{
						articlesAPI.map((item) => (
								currentFilter === "all" ? item.content : 
								currentFilter === item.type ? item.content : null
						))
					}
				</div>
				</div>
				<div className='reserved__right-sidebar'>
					<Foryou />
					<div style={{display:'flex',gap:'10px'}}>
						<Correspondence />
						<div className='right'>
							<MainNav />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
