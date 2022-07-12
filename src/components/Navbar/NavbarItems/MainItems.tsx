import React from "react";
import Link from "next/link";
import NavbarItemEnum from "../../../../lib/enums/NavbarItem.enum";

const MainItems = () => {
	return (
		<div className="absolute xl:static invisible xl:visible flex flex-row mr-auto xl:space-x-5 text-[#961203] font-RMO text-[0.75rem]">
			<li>
				<Link href={"/projects"}>
					<p>{NavbarItemEnum.PROJECTS}</p>
				</Link>
			</li>
			<li>
				<Link href={"/contact"}>
					<p>{NavbarItemEnum.CONTACT}</p>
				</Link>
			</li>
		</div>
	);
};

export default MainItems;
