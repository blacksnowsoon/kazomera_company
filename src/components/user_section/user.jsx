import './user.css';

export default function User() {
  return (
    <div className='user'>
      <div className='user__header'>
				<div className='user__background'>
					<img alt="backgroud img" />
				</div>
				<figure className='user__img'>
					<img alt="user img" />
					<figcaption>اسم المستخدم</figcaption>
				</figure>
			</div>
			<div className='user__body'>
				<div className='user__about'>
					
				</div>
				<div className='user__info'>
					<div>
						<h5>نبذة مختصرة</h5>
						<p>صاحب مشروع . مساهم . مستثمر</p>
						<p>المهنة</p>
					</div>
					<div>
						<h5>المعلومات الشخصية</h5>
						<p>عنوانه المختصر: <span></span> </p>
						<p>عدد العلاقات: <span></span> </p>
						<p>عدد المتابعين: <span></span> </p>
						<p>بعض حسابات الأشخاص المشتركة في شبكة علاقتنا: <span></span> </p>
					</div>
					<div>
						{/* <p>: <span></span> </p> */}
						{/* <p>: <span></span> </p> */}
					</div>
				</div>
				<div className='user__footer'>
					<button><i></i> إضافة</button>
					<button><i></i> مراسلة</button>
					<ul className='user__footer-more'>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
    </div>
  )
}
