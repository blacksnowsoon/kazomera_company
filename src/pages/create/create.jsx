import { Outlet } from "react-router-dom";
import MinHeader from "../../components/header_minimum/minHeader";
import MainNav from "../../components/nav_main/mainNav";
import "./create.css";

import { AccountCircle } from "../../assets/svgs";


export default function Create() {
  return (
    <div className="create">
			<header className="create__header">
				<MinHeader />
			</header>
			<main className="create__body">
				<div className="create__content">
					<div className="create__content-info">
						<div>
							<div><img alt="اسم المشروع" /></div>
							<h2 style={{fontWeight: 600}}>اسم المشروع</h2>
						</div>
						<div>
							<span>تغيير الحساب</span>
							<div>
								<AccountCircle fontSize={34} />
							</div>
						</div>
					</div>
					<Outlet />
				</div>
				<div className="create__left-sidebar">
					<div className="right">
						<MainNav />
					</div>
				</div>
			</main>
		</div>
  )
}
