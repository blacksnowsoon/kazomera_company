import React, { useState } from 'react';
import {
  Field,
  Description,
  Classification,
  Stage,
  Location,
  Problems,
  Finance,
  FinancingStage,
  Team,
} from '../parts';

const projectParts = [
  {id: 0, name: 'المجال', Part: Field, isActive: false},
  {id: 1, name: 'الوصف', Part: Description, isActive: true}, 
  {id: 2, name: 'التصنيف', Part: Classification, isActive: true}, 
  {id: 3, name: 'المرحلة', Part: Stage, isActive: true}, 
  {id: 4, name: 'الموقع', Part: Location, isActive: true}, 
  {id: 5, name: 'المشكلة', Part: Problems, isActive: true}, 
  {id: 6, name: 'الماليات', Part: Finance, isActive: true}, 
  {id: 7, name: 'مرحلة التمويل', Part: FinancingStage, isActive: true}, 
  {id: 8, name: 'فريق العمل', Part: Team, isActive: true}, 
  {id: 9, name: 'المنتجات', Part: null, isActive: true}, 
  {id: 10, name: 'الخدمات', Part: null, isActive: true}, 
  {id: 11, name: 'قسم جديد', Part: null, isActive: true}, 
]

export default function InvestSecInfo() {

  const [projectPartsState, setProjectParts] = useState(projectParts);
  function checkActive(id) {
    setProjectParts(oldItems => (
      oldItems.map((oldItem) => (
        {...oldItem, isActive: oldItem.id === id ? !oldItem.isActive : oldItem.isActive}
      ))
    ))
    return null;
  }

  return (
    <section className="create-section">
      <header>
        <h3 className='create-section__heading'>المشروعات المستهدفة</h3>
        <ul className='items-btns items-btns--blue-active'>
            {
              projectPartsState.map(({id, name, isActive}, i) => (
                <li key={i} onClick={() => checkActive(id)} className={isActive ? "active" : ""}>
                  {name}
                </li> 
              ))
            }
        </ul>
      </header>
      <div className="create-section__body invest-sector__body">

        <div className="create-section__partitions invest-section__partitions invest-section__partitions--info">
            {
              projectPartsState.map(({Part, isActive}, i) => {
                return (
                  isActive && Part !== null && <Part key={i} />
                )
              })
            }
        </div>
      </div>
    </section>

  )
}
