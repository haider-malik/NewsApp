import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
	return (
		<div>
			<nav
				className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
			>
				<div className="container-fluid">
					<Link
						className="navbar-brand"
						to="/"
						style={{
							fontWeight: "bolder",
						}}
					>
						Newstation
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link className="nav-link" to="/business">
								Business
							</Link>
							<Link className="nav-link" to="/entertainment">
								Entertainment
							</Link>
							<Link className="nav-link" to="/health">
								Health
							</Link>
							<Link className="nav-link" to="/science">
								Science
							</Link>
							<Link className="nav-link" to="/sports">
								Sports
							</Link>
							<Link className="nav-link" to="/technology">
								Technology
							</Link>
						</div>
					</div>
					<button
						type="button"
						onClick={props.toggleMode}
						className={`btn mr-3`}
						style={{
							width: "110px",
							height: "40px",
							right: "20px",
							color: props.mode === "dark" ? "white" : "black",
							backgroundColor:
								props.mode === "dark" ? "rgb(29, 29, 29)" : "white",
						}}
					>
						{props.mode === "dark" ? "Light Mode" : "Dark Mode"}
					</button>
				</div>
			</nav>
		</div>
	);
};
export default Navbar;
