import Link from "next/link";
import Image from "next/image";
import React, { ReactElement } from "react";

const NavbarList = () => {
	return (
		<ul className="flex flex-row justify-between h-full">
			{/* Hamburger Menu */}
			<div className="visible xl:invisible static xl:absolute ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</div>

			{/* Main Navbar Items */}
			<div className="invisible xl:visible absolute xl:static flex flex-row ">
				{NavbarItemsLeft.map((item: NavbarItemTypes, idx: number) => {
					return (
						<li className="xl:px-[2.5rem]" key={`navItem_${idx}`}>
							{item.component}
						</li>
					);
				})}
			</div>

			{/* Logo */}
			<div>
				<Link href={"/"}>
					<Image
						src={"/Logo.svg"}
						width={"75px"}
						height={"11px"}
						alt={NavbarItemEnum.LOGO}
					/>
				</Link>
			</div>

			{/* Social Media */}
			<div className="invisible xl:visible absolute xl:static flex flex-row">
				{NavbarItemsRight.map((item: NavbarItemTypes, idx: number) => {
					return (
						<li className="xl:px-[1rem]" key={`navItem_${idx}`}>
							{item.component}{" "}
						</li>
					);
				})}
			</div>
		</ul>
	);
};

export default NavbarList;

enum NavbarItemEnum {
	PROJECTS = "Projects",
	CONTACT = "Contact",
	GITHUB = "Github",
	LOGO = "JTDean",
	LINKEDIN = "LinkedIn",
	MEDIUM = "Medium",
	TWITTER = "Twitter",
}

type NavbarItemTypes = {
	name: NavbarItemEnum;
	component?: ReactElement;
};

const NavbarItemsLeft: NavbarItemTypes[] = [
	{
		name: NavbarItemEnum.PROJECTS,
		component: (
			<Link href={"/projects"}>
				<p className="">{NavbarItemEnum.PROJECTS}</p>
			</Link>
		),
	},
	{
		name: NavbarItemEnum.CONTACT,
		component: (
			<Link href={"/contact"}>
				<p className="">{NavbarItemEnum.CONTACT}</p>
			</Link>
		),
	},
];

const NavbarItemsRight: NavbarItemTypes[] = [
	{
		name: NavbarItemEnum.LINKEDIN,
		component: (
			<a
				className=""
				href={"https://www.linkedin.com/in/jonathan-dean-ab67aa150/"}
				target="_blank"
				rel="noreferrer"
			>
				<Image
					src={"/LinkedIn.svg"}
					width={"15px"}
					height={"15px"}
					alt={NavbarItemEnum.LINKEDIN}
				/>
			</a>
		),
	},
	{
		name: NavbarItemEnum.GITHUB,
		component: (
			<a
				className=""
				href={"https://github.com/JonTDean"}
				target="_blank"
				rel="noreferrer"
			>
				<Image
					src={"/Github.svg"}
					width={"15px"}
					height={"15px"}
					alt={NavbarItemEnum.GITHUB}
				/>
			</a>
		),
	},
	{
		name: NavbarItemEnum.MEDIUM,
		component: (
			<a
				className=""
				href={"https://medium.com/@jonathantomdean"}
				target="_blank"
				rel="noreferrer"
			>
				<Image
					src={"/Medium.svg"}
					width={"15px"}
					height={"15px"}
					alt={NavbarItemEnum.MEDIUM}
				/>
			</a>
		),
	},
	{
		name: NavbarItemEnum.TWITTER,
		component: (
			<a
				className=""
				href={"https://twitter.com/JonTDean"}
				target="_blank"
				rel="noreferrer"
			>
				<Image
					src={"/Twitter.svg"}
					width={"15px"}
					height={"15px"}
					alt={NavbarItemEnum.TWITTER}
				/>
			</a>
		),
	},
];
