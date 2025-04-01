import "./styles/layout.scss";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
	const location = useLocation();

	return (
		<>
			{location.pathname === "/" ? (
				<> landing page </>
			) : (
				<div className="layout">
					<Outlet />
				</div>
			)}
		</>
	);
};

export default Layout;