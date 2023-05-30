export const Finance = () => {
  return (
    <div className="create-section__part" id="part_6">
      <h4 className="create-section__part-heading">: الماليات</h4>
      <div className="box">
        <label>
          <h5>الإيردات</h5> 
          <input placeholder="0000000000" />
        </label>
        <label>
          <h5>التكاليف</h5> 
          <input placeholder="0000000000" />
        </label>
        <label>
          <h5>الإرباح</h5> 
          <input placeholder="0000000000" />
        </label>
        <label>
          <h5>العملة</h5> 
          <input placeholder="$" />
        </label>
        <div className='box'>
          <h5>الفترة الزمنية</h5> 
          <ul className='items-btns items-btns--blue-active'>
            <li>شهريًا</li>
            <li>سنويًا</li>
          </ul>
        </div>
        <span>111</span>
      </div>
    </div>
  )
}
