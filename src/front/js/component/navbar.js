import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();

	const isActive = (path) => location.pathname === path ? "nav-link active" : "nav-link";

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Gaby's Universe
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className={isActive("/about")} to="/about">About</Link>
						</li>
						<li className="nav-item">
							<Link className={isActive("/books")} to="/books">Books</Link>
						</li>
						<li className="nav-item">
							<Link className={isActive("/news")} to="/news">News</Link>
						</li>
						<li className="nav-item">
							<Link className={isActive("/contact")} to="/contact">Contact</Link>
						</li>
						<li className="nav-item">
							<Link className={isActive("/admin")} to="/admin">Admin</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
