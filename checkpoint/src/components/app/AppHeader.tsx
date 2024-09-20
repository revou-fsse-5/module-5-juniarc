import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryType, UserType } from '../../types/type';
import DropdownMenu from './header/dropdown/DropdownMenu';
import ChartDropdownMenu from './header/chart/ChartDropdownMenu';
import DropdownUser from './user/DropdownUser';

interface AppHeaderType {
	user: UserType;
	categories: CategoryType[];
}

function AppHeader({ user, categories }: AppHeaderType) {
	return (
		<header className="px-10 py-5 flex items-center justify-between w-full relative z-50">
			<div>
				<Link to="/" className="font-black text-black text-4xl">
					Urban.
				</Link>
			</div>
			<nav className="absolute right-1/2 translate-x-1/2">
				<ul className="flex items-center gap-20">
					<li className="text-lg">
						<Link to="/">Home</Link>
					</li>
					<li className="text-lg">
						<Link to="/products">Products</Link>
					</li>
					<li className="text-lg">
						<DropdownMenu categories={categories}/>
					</li>
				</ul>
			</nav>
			<div className="flex items-center gap-4">
				<ChartDropdownMenu />
				{Object.keys(user).length > 0 ? (
					<DropdownUser user={user} />
				) : (
					<Link to="/sign-in" className="text-lg">
						Sign In
					</Link>
				)}
			</div>
		</header>
	);
}

export default AppHeader;
