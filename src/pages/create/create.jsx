import { Outlet } from "react-router-dom";
import MinHeader from "../../components/header_minimum/minHeader";
import MainNav from "../../components/nav_main/mainNav";
import "./create.css";


export default function Create() {
  return (
    <div className="create">
			<header className="create__header">
				<MinHeader />
			</header>
			<main className="create__body">
				<div className="create__content">
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
