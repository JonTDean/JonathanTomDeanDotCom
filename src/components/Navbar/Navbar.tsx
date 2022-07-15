import React from "react";
import NavbarList from "./NavbarList";

const Navbar = () => {
	return (
		<nav className="sticky top-0 left-0 flex flex-row justify-center align-center w-full z-10 bg-[#4718FF]">
			<NavbarList />
		</nav>
	);
};

export default Navbar;
