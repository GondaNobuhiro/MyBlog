import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="bg-blue-600 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold">My Blog</h1>
				<nav>
					<Link to="/" className="px-4">Home</Link>
					<Link to="/contact" className="px-4">Contact</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;
