import React, {useState, useEffect} from 'react'

const projectParts = [
  {id: 0, name: 'المجال', isActive: true},
  {id: 1, name: 'الوصف', isActive: true}, 
  {id: 2, name: 'التصنيف', isActive: true}, 
  {id: 3, name: 'المرحلة', isActive: false}, 
  {id: 4, name: 'الموقع', isActive: false}, 
  {id: 5, name: 'المشكلة', isActive: false}, 
  {id: 6, name: 'الماليات', isActive: false}, 
  {id: 7, name: 'مرحلة التمويل', isActive: false},
  {id: 8, name: 'فريق العمل', isActive: false}, 
  {id: 9, name: 'المنافسين', isActive: false}, 
  {id: 10, name: 'الميزة التنافسية', isActive: false}, 
  {id: 11, name: 'الملفات', isActive: false}, 
  {id: 12, name: 'الحساب البنكي', isActive: false}, 
  {id: 13, name: 'المنتجات', isActive: false},
  {id: 14, name: 'الخدمات', isActive: false}, 
  {id: 15, name: 'الهدايا', isActive: false}, 
  {id: 16, name: 'العروض', isActive: false}, 
  {id: 17, name: 'القسيمات', isActive: false}, 
  {id: 18, name: 'المعرض', isActive: false}, 
  {id: 19, name: 'الأخبار', isActive: false}, 
  {id: 20, name: 'قسم جديد', isActive: false}, 
  {id: 21, name: 'إضافة قسم', isActive: false},
]

export default function ProjectInfo() {
  const [projectPartsState, setProjectParts] = useState(projectParts);
  function checkActive(id) {
    setProjectParts(oldItems => (
      oldItems.map((oldItem) => (
        {...oldItem, isActive: oldItem.id === id ? !oldItem.isActive : oldItem.isActive}
      ))
    ))
    return null;
  }

  useEffect(() => {
    projectPartsState.map((part, i) => (
      document.getElementById(`part_${part.id}`).style.display = part.isActive ? 'block' : 'none'
    ))
  }, [projectPartsState])

  return (
    <section className='create-section'>
			<h3 className="create-section__heading">123</h3>
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
        {/* create-section__partitions */}
        <div className="create-section__partitions">
          <div className="create-section__part" id="part_0">
            <h3 className="create-section__part-heading">: {projectParts[0].name}</h3>
            <div className="box">
              <label>
                <h4>القطاع</h4> 
                <input placeholder="...... في أي قطاعٍ ينتمي هذا المشروع" />
              </label>
              <label>
                <h4>المجال</h4> 
                <input placeholder="...... في أي مجال في هذا القطاع" />
              </label>
              <label>
                <h4>التخصص</h4> 
                <input placeholder="........ في أي تخصصٍ في هذا المجال" />
              </label>
              <span>111</span>
            </div>
          </div>

          <div className="create-section__part" id="part_1">
            <h3 className="create-section__part-heading">: {projectParts[1].name}</h3>
            <input placeholder=" ........ اكتب سطر أو أكثر عن وصف المشروع" />
            <span>111</span>
          </div>

          <div className="create-section__part" id="part_2">
            <h3 className="create-section__part-heading">: {projectParts[2].name}</h3>
          </div>

          <div className="create-section__part" id="part_3">
            <h3 className="create-section__part-heading">: {projectParts[3].name}</h3>
          </div>

          <div className="create-section__part" id="part_4">
            <h3 className="create-section__part-heading">: {projectParts[4].name}</h3>
          </div>

          <div className="create-section__part" id="part_5">
            <h3 className="create-section__part-heading">: {projectParts[5].name}</h3>
          </div>
          <div className="create-section__part" id="part_6">
            <h3 className="create-section__part-heading">: {projectParts[6].name}</h3>
          </div>
          <div className="create-section__part" id="part_7">
            <h3 className="create-section__part-heading">: {projectParts[7].name}</h3>
          </div>
          <div className="create-section__part" id="part_8">
            <h3 className="create-section__part-heading">: {projectParts[8].name}</h3>
          </div>
          <div className="create-section__part" id="part_9">
            <h3 className="create-section__part-heading">: {projectParts[9].name}</h3>
          </div>
          <div className="create-section__part" id="part_10">
            <h3 className="create-section__part-heading">: {projectParts[10].name}</h3>
          </div>
          <div className="create-section__part" id="part_11">
            <h3 className="create-section__part-heading">: {projectParts[11].name}</h3>
          </div>
          <div className="create-section__part" id="part_12">
            <h3 className="create-section__part-heading">: {projectParts[12].name}</h3>
          </div>
          <div className="create-section__part" id="part_13">
            <h3 className="create-section__part-heading">: {projectParts[13].name}</h3>
          </div>
          <div className="create-section__part" id="part_14">
            <h3 className="create-section__part-heading">: {projectParts[14].name}</h3>
          </div>
          <div className="create-section__part" id="part_15">
            <h3 className="create-section__part-heading">: {projectParts[15].name}</h3>
          </div>
          <div className="create-section__part" id="part_16">
            <h3 className="create-section__part-heading">: {projectParts[16].name}</h3>
          </div>
          <div className="create-section__part" id="part_17">
            <h3 className="create-section__part-heading">: {projectParts[17].name}</h3>
          </div>
          <div className="create-section__part" id="part_18">
            <h3 className="create-section__part-heading">: {projectParts[18].name}</h3>
          </div>
          <div className="create-section__part" id="part_19">
            <h3 className="create-section__part-heading">: {projectParts[19].name}</h3>
          </div>
          <div className="create-section__part" id="part_20">
            <h3 className="create-section__part-heading">: {projectParts[20].name}</h3>
          </div>
          <div className="create-section__part" id="part_21">
            <h3 className="create-section__part-heading">: {projectParts[21].name}</h3>
          </div>


        </div>
      </div>
		</section>
  )
}
