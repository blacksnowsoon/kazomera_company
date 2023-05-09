import ArticlesProjects from '../articles_projects/articles_projects'
import ArticlesContributions from '../articles_contributions/articles_cont'
import ArticlesInvestments from '../articles_investments/articles_invest'
import './foryou.css';
import { GrClose } from 'react-icons/gr';

export default function Foryou() {
	return (
		<div className='foryou'>
			<div className='foryou__articles'>
				<div className='foryou__articles-header'>
					<h3>مشروعات قد تناسبك</h3>
					<i><GrClose fontSize={20} style={{color:"var(--clr-brown)"}} /></i>
				</div>
				<div className='foryou__articles-body'>
					<ArticlesProjects />
				</div>
				<div className='foryou__articles-more'>عرض المزيد</div>
			</div>

			<div className='foryou__articles'>
				<div className='foryou__articles-header'>
					<h3>مساهمات قد تناسبك</h3>
				</div>
				<div className='foryou__articles-body'>
					<ArticlesContributions />
				</div>
				<div className='foryou__articles-more'>عرض المزيد</div>
			</div>

			<div className='foryou__articles'>
				<div className='foryou__articles-header'>
					<h3>استثمارات قد تناسبك</h3>
				</div>
				<div className='foryou__articles-body'>
					<ArticlesInvestments />
				</div>
				<div className='foryou__articles-more'>عرض المزيد</div>
			</div>
		</div>
	)
}
