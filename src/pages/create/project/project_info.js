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
        // {...oldItem, isActive: true}
      ))
    ))
    return null;
  }


  return (
    <section className='create-section'>
			<header>
        <h3 className="create-section__heading">معلومات المشروع</h3>
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
      <div className="create-section__body project-section__body">
        {/* create-section__partitions */}
        <div className="create-section__partitions project-section__partitions project-section__partitions--info">

          {/* : المنافسين */}
          <div className="create-section__part" id="part_9">
            <h4 className="create-section__part-heading">: {projectParts[9].name}</h4>
            <input placeholder=".......... من هم منافسينك" />
          </div>
          
          {/* : الميزة التنافسية */}
          <div className="create-section__part" id="part_10">
            <h4 className="create-section__part-heading">: {projectParts[10].name}</h4>
            <input placeholder="............ ما هي الأشياء التي تميزك عن منافسينك" />
          </div>

          {/* : الملفات */}
          <div className="create-section__part create-section__part--rounded" id="part_11">
            <h4 className="create-section__part-heading">: {projectParts[11].name}</h4>
            <div className='files create-section__part--rounded-content'>
              <label>
                  <h5>الاسم</h5> 
                  <input placeholder="اكتب اسمًا يصف الملفات التي تليه" />
              </label>
              <label>
                  <h5>الوصف</h5> 
                  <input placeholder="..." />
              </label>
            </div>
          </div>

          {/* : الحساب البنكي */}
          <div className="create-section__part" id="part_12">
            <h4 className="create-section__part-heading">: {projectParts[12].name}</h4>
            <div className="box">
              <label>
                <h5>اسم الحساب</h5> 
                <input placeholder="......... اكتب اسم حسابك البنكي" />
              </label>
              <label>
                <h5>رقم الحساب</h5> 
                <input placeholder="......... اكتب رقم حسابك البنكي" />
              </label>
              <label>
                <h5>البنك</h5> 
                <input placeholder="اسم البنك الذي تضع فيه هذا الحساب" />
              </label>
              
              <div className='box'>
                <ul className='items-btns items-btns--blue-active'>
                  <li>إضافة عنصر</li>
                </ul>
              </div>
              <span>111</span>
            </div>
          </div>

          {/* : المنتجات */}
          <div className="create-section__part create-section__part--rounded" id="part_13">
            <h4 className="create-section__part-heading">: {projectParts[13].name}</h4>
            <div className='create-section__part--rounded-content'>
              <div className="box">
                <label>
                  <h5>اسم المنتج</h5> 
                  <input placeholder="اكتب اسم المنتج" />
                </label>
                <label>
                  <input placeholder="النوع" />
                </label>
                <label>
                  <h5>السعر الأدنى</h5> 
                  <input placeholder="0000000000" />
                </label>
                <label>
                  <input placeholder="إنشاء مزاد" />
                </label>
              </div>
              <label>
                <h5>الوصف</h5> 
                <input placeholder="اكتب مواصفات المنتج" width={"100%"} />
              </label>
              <div className='gallery'>
                <div className='arrow-left'>&lt;</div>
                <div className='galls'>
                  <div className='gall'>
                    <p>صورة أو فيديو</p>
                    <p>أو مقطع صوتي</p>
                    <p>أو ملف عن المنتج</p>
                  </div>
                  <div className='gall'>
                    <p>صورة أو فيديو</p>
                    <p>أو مقطع صوتي</p>
                    <p>أو ملف عن المنتج</p>
                  </div>
                  <div className='gall'>
                    <p>صورة أو فيديو</p>
                    <p>أو مقطع صوتي</p>
                    <p>أو ملف عن المنتج</p>
                  </div>
                  <div className='gall'>
                    <p>صورة أو فيديو</p>
                    <p>أو مقطع صوتي</p>
                    <p>أو ملف عن المنتج</p>
                  </div>
                  <div className='gall'>
                    <p>صورة أو فيديو</p>
                    <p>أو مقطع صوتي</p>
                    <p>أو ملف عن المنتج</p>
                  </div>
                </div>
                <div className='arrow-right'>&gt;</div>
              </div>
              <div className='create-section__part--rounded-content'>
                <div className='box'>
                  <label>
                    <h5>اسم الهدية</h5> 
                    <input placeholder="اكتب اسم الهدية" />
                  </label>
                </div>
                <label>
                  <h5>وصف الهدية</h5> 
                  <input placeholder="اكتب وصفًا لتلك الهدية" />
                </label>


                <div className='gallery'>
                <div className='arrow-left'>&lt;</div>
                <div className='galls'>
                  <div className='gall'>
                    <p>صورة أو فيديو</p>
                    <p>أو مقطع صوتي</p>
                    <p>أو ملف عن المنتج</p>
                  </div>
                  <div className='gall'>
                    <p>صورة أو فيديو</p>
                    <p>أو مقطع صوتي</p>
                    <p>أو ملف عن المنتج</p>
                  </div>
                  <div className='gall'>
                    <p>صورة أو فيديو</p>
                    <p>أو مقطع صوتي</p>
                    <p>أو ملف عن المنتج</p>
                  </div>
                  <div className='gall'>
                    <p>صورة أو فيديو</p>
                    <p>أو مقطع صوتي</p>
                    <p>أو ملف عن المنتج</p>
                  </div>
                  <div className='gall'>
                    <p>صورة أو فيديو</p>
                    <p>أو مقطع صوتي</p>
                    <p>أو ملف عن المنتج</p>
                  </div>
                </div>
                <div className='arrow-right'>&gt;</div>
              </div>
            </div>
          </div>
          </div>

          {/* الماليات */}
          <div className="create-section__part" id="part_14">
            <h4 className="create-section__part-heading">: {projectParts[14].name}</h4>
          </div>

          {/* الماليات */}
          <div className="create-section__part" id="part_15">
            <h4 className="create-section__part-heading">: {projectParts[15].name}</h4>
          </div>

          {/* الماليات */}
          <div className="create-section__part" id="part_16">
            <h4 className="create-section__part-heading">: {projectParts[16].name}</h4>
          </div>

          {/* الماليات */}
          <div className="create-section__part" id="part_17">
            <h4 className="create-section__part-heading">: {projectParts[17].name}</h4>
          </div>

          {/* الماليات */}
          <div className="create-section__part" id="part_18">
            <h4 className="create-section__part-heading">: {projectParts[18].name}</h4>
          </div>

          {/* الماليات */}
          <div className="create-section__part" id="part_19">
            <h4 className="create-section__part-heading">: {projectParts[19].name}</h4>
          </div>

          {/* الماليات */}
          <div className="create-section__part" id="part_20">
            <h4 className="create-section__part-heading">: {projectParts[20].name}</h4>
          </div>

          {/* الماليات */}
          <div className="create-section__part" id="part_21">
            <h4 className="create-section__part-heading">: {projectParts[21].name}</h4>
          </div>


        </div>
      </div>
		</section>
  )
}
