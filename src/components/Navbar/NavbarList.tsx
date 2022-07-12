import React from "react";
import BurgerMenu from "./NavbarItems/BurgerMenu";
import Logo from "./NavbarItems/Logo";
import MainItems from "./NavbarItems/MainItems";
import SocialMedia from "./NavbarItems/SocialMedia";

const NavbarList = () => {
	return (
		<ul className="flex flex-row m-[1rem] mx-[10rem] w-full h-full xl:justify-center xl:items-center">
			{/* Main Navbar Items */}
			<MainItems />

			{/* Hamburger Menu */}
			<BurgerMenu />

			{/* Site Logo */}
			<Logo />

			{/* Social Media icons for navbar */}
			<SocialMedia />
		</ul>
	);
};

export default NavbarList;
