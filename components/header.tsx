import Image from "next/image";
import React from "react";
import {
	ChevronDownIcon,
	HomeIcon,
	SearchIcon,
	MenuIcon,
} from "@heroicons/react/solid";
import {
	BellIcon,
	ChatIcon,
	GlobeIcon,
	PlusIcon,
	SparklesIcon,
	SpeakerphoneIcon,
	VideoCameraIcon,
} from "@heroicons/react/outline";

const Header = () => {
	return (
		<div className="sticky-top0 flex bg-white px-4 py-2 shadow-sm">
			<div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
				<Image
					objectFit="contain"
					src="https://upload.wikimedia.org/wikipedia/en/5/58/Reddit_logo_new.svg"
					layout="fill"
				/>
			</div>
			<div className="flex items-center mx-7 cursor-pointer xl:min-w-[300px]">
				<HomeIcon className="h-5 w-5" />
				<p className="hidden flex-1 ml-2 lg:inline">Home</p>
				<ChevronDownIcon className="h-5 w-5" />
			</div>
			<form className="flex flex-1 items-center space-x-2 border rounded-lg border-gray-200 px-3 py-1 bg-gray-100">
				<SearchIcon className="h-6 w-6 text-gray-400" />
				<input
					className="flex-1 bg-transparent outline-none"
					type="text"
					placeholder="Search Reddit"
				/>
				<button type="submit" hidden />
			</form>
			<div className="mx-5 items-center space-x-2 hidden lg:inline-flex">
				<SparklesIcon className="icon" />
				<GlobeIcon className="icon" />
				<VideoCameraIcon className="icon" />
				<hr className="h-10 border border-gray-100" />
				<ChatIcon className="icon" />
				<BellIcon className="icon" />
				<PlusIcon className="icon" />
				<SpeakerphoneIcon className="icon" />
			</div>
			<div className="ml-5 lg:hidden">
				<MenuIcon className="icon" />
			</div>
			<div className="hidden lg:inline-flex border rounded-lg items-center space-x-2 px-2 hover:bg-gray-100 cursor-pointer">
				<div className="relative h-8 w-6 flex-shrink-0">
					<Image
						src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_Snoo.png"
						alt="sign in"
						layout="fill"
					/>
				</div>
				<div>Sign In</div>
			</div>
		</div>
	);
};

export default Header;
