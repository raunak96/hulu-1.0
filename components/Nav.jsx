import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
	const router = useRouter();
	return (
		<nav className="relative">
			<div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
				{Object.entries(requests).map(([key, { title }]) => (
					<h2
						onClick={() => router.push(`/?genre=${key}`)}
						className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24"
						key={key}>
						{title}
					</h2>
				))}
			</div>
			{/* TO create fading effect when scrolling horizontally, 
                last element will appear to fade in as gradient color same as background  */}
			<div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
		</nav>
	);
}

export default Nav;
