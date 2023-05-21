import React from "react"
import ProjectInfo from "./project_info";
import ProjectSectionReq from "./project_section_req";
import { Link } from "react-router-dom";
import "./project.css";

export default function ProjectSector() {
  return (
    <div className="sector project-sector">
      <header className="sector__header project-sector__header">
        <ul className="items-btns items-btns--black">
          <li><Link to="">المعلومات</Link></li>
          <li><Link to="">المتطلبات</Link></li>
        </ul>
        <ul className="items-btns">
          <li>تعديل</li>
          <li>إظهار</li>
          <li>مشاركة</li>
          <li>حذف</li>
        </ul>
      </header>
      <ProjectInfo />
      <ProjectSectionReq />
    </div>
  )
}
