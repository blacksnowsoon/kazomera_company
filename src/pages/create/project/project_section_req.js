import React, { useState } from 'react'

const projectParts = [
  {id: 0, name: 'المجال', isActive: true},
  {id: 1, name: 'الوصف', isActive: true}, 
  {id: 2, name: 'التصنيف', isActive: true}, 
]

export default function ProjectSectionReq() {
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
      <h3 className='create-section__heading'>: المتطلبات</h3>
      <div className="create-section__body project-section__body">
        <ul className='items-btns items-btns--blue-active'>
          {
            projectPartsState.map(({id, name, isActive}, i) => (
              <li key={i} onClick={() => checkActive(id)} className={isActive ? "active" : ""}>
                {name}
              </li> 
            ))
          }
        </ul>
        <div className="create-section__partitions project-section__partitions project-section__partitions--req">

          <div className="create-section__part create-section__part-0" id="part_0">
            <h3 className="create-section__part-heading">: {projectParts[0].name}</h3>
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

          <div className="create-section__part" id="part_1">
            <h3 className="create-section__part-heading">: {projectParts[1].name}</h3>
            <input placeholder=" ........ اكتب سطر أو أكثر عن وصف المشروع" />
          </div>

          <div className="create-section__part" id="part_2">
            <h3 className="create-section__part-heading">: {projectParts[2].name}</h3>
          </div>

        </div>
      </div>
		</section>
  )
}
