import React from 'react';
import Link from 'next/link';
import { CategoryType, UserType } from '../../types/type';
import DropdownMenu from './header/dropdown/DropdownMenu';
import DropdownUser from './user/DropdownUser';
import dynamic from 'next/dynamic';

const ChartDropdownMenu = dynamic(() => import('./header/chart/ChartDropdownMenu'), { ssr: false })

interface AppHeaderType {
	user: UserType;
	categories: CategoryType[];
}

function AppHeader({ user, categories }: AppHeaderType) {
	return (
		<header className="px-10 py-5 flex items-center justify-between w-full relative z-50">
			<div>
				<Link href="/" className="font-black text-black text-4xl">
					Urban.
				</Link>
			</div>
			<nav className="absolute right-1/2 translate-x-1/2">
				<ul className="flex items-center gap-20">
					<li className="text-lg">
						<Link href="/">Home</Link>
					</li>
					<li className="text-lg">
						<Link href="/products">Products</Link>
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
					<Link href="/sign-in" className="text-lg">
						Sign In
					</Link>
				)}
			</div>
		</header>
	);
}

export default AppHeader;
