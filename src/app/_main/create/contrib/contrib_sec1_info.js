import React, { useState } from 'react';
import './contrib.css';


const projectParts = [
  {id: 0, name: 'المجال', isActive: true},
  {id: 1, name: 'الوصف', isActive: true}, 
  {id: 2, name: 'التصنيف', isActive: true}, 
]

export default function ContribSecInfo() {

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
        <h3 className='create-section__heading'>123</h3>
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
      <div className="create-section__body project-sector__body">

        <div className="create-section__partitions contrib-section__partitions contrib-section__partitions--info">

          <div className="create-section__part" id="part_0">
            <h4 className="create-section__part-heading">: {projectParts[0].name}</h4>
            <div className="box">
              <label>
                <span>القطاع</span> 
                <input placeholder="...... في أي قطاعٍ ينتمي هذا المشروع" />
              </label>
              <label>
                <span>المجال</span> 
                <input placeholder="...... في أي مجال في هذا القطاع" />
              </label>
              <label>
                <span>التخصص</span> 
                <input placeholder="........ في أي تخصصٍ في هذا المجال" />
              </label>
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}
