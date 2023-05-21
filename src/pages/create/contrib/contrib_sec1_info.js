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
			<h3 className='create-section__heading'>123</h3>
      <div className="create-section__body project-sector__body">
        <ul className='items-btns items-btns--blue-active'>
          {
            projectPartsState.map(({id, name, isActive}, i) => (
              <li key={i} onClick={() => checkActive(id)} className={isActive ? "active" : ""}>
                {name}
              </li> 
            ))
          }
        </ul>
        <div className="project__partitions">

          <div className="project__part" id="part_0">
            <h3 className="project__part-heading">: {projectParts[0].name}</h3>
            <div className="project__part-content">
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
