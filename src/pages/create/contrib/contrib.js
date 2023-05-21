import React from 'react';
import { Link } from 'react-router-dom';
import './contrib.css';
import ContribSecInfo from './contrib_sec1_info';


export default function ContribSector() {

  return (
    <div className="sector contrib-sector">
      <header className="sector__header contrib-sector__header">
        <ul className="items-btns items-btns--black">
          <li><Link to="">المساهمة</Link></li>
          <li><Link to="">المشروعات المستهدفة</Link></li>
          <li><Link to="">العروض</Link></li>
          <li><Link to="">توزيعة العروض والمشروعات</Link></li>
          <li><Link to="">الأراء والاستفسارات</Link></li>
          <li><Link to="">طلبات المساهمة</Link></li>
          <li><Link to="">الأخبار</Link></li>
        </ul>
        <ul className="items-btns">
          <li>تعديل</li>
          <li>إظهار</li>
          <li>مشاركة</li>
          <li>حذف</li>
        </ul>
      </header>
      {/* <div className='sector-sections contrib-sector__body'>
        
      </div> */}
      <ContribSecInfo />
    </div>

  )
}
