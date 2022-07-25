import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavbarItemEnum from "../../Utils/enums/NavbarItem.enum";

const Logo = () => {
	return (
		<div className="flex flex-row justify-between xl:absolute">
			{/* Logo */}
			<Link href={"/"} passHref>
				<a>
					<Image
						src={"/Logo.svg"}
						width={"75px"}
						height={"11px"}
						alt={NavbarItemEnum.LOGO}
					/>
				</a>
			</Link>
		</div>
	);
};

export default Logo;
