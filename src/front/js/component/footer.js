import React from "react";

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="footer mt-auto py-4 text-center bg-dark text-light">
			<div className="container">
				<p className="mb-2">
					Follow Gaby on:
				</p>
				<div className="mb-3">
					<a
						href="https://www.instagram.com/gabrielatbadra/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-light mx-2"
					>
						<i className="fab fa-instagram fa-lg"></i>
					</a>
					<a
						href="https://x.com/BadraGabriela"
						target="_blank"
						rel="noopener noreferrer"
						className="text-light mx-2"
						title="Follow on X"
					>
						<span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>X</span>
					</a>
					<a
						href="https://www.linkedin.com/in/gaby" // reemplazar con real
						target="_blank"
						rel="noopener noreferrer"
						className="text-light mx-2"
					>
						<i className="fab fa-linkedin fa-lg"></i>
					</a>
				</div>
				<p className="mb-0">
					&copy; {year} Gaby's Universe. All rights reserved.
				</p>
			</div>
		</footer>
	);
};