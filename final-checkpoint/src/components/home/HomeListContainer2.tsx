import React, { useState } from 'react';
import Link from 'next/link';
import { useAppSelector } from '../../states/hooks';
import HomeListProduct from './HomeListProduct';
import Loader from '../loader/Loader';
import { CategoryType, ProductItemType } from '../../types/type';
import SkeletonImage from '../loader/SkeletonImage';

interface HomeListContainer1Type {
	products: ProductItemType[];
	categories: CategoryType[];
}

function HomeListContainer2({ products, categories }: HomeListContainer1Type) {
	const SLIDE_INTERVAL = 6000;
	const isLoading = useAppSelector((states) => states.isLoading);
	const [isTextShow, setIsTextShow] = useState(false);

	return (
		<section className="w-full h-413 mt-10 flex gap-4 items-center relative">
			{isLoading ? (
				<div className="flex items-center justify-center gap-4 h-413 w-2/3">
					<Loader width="w-14" height="h-14" />
				</div>
			) : products.length === 0 ? (
				<p className="w-2/3 text-center align-middle">
					There are no products avaible
				</p>
			) : (
				<HomeListProduct products={products} slideInterval={SLIDE_INTERVAL} />
			)}
			<div
				className="w-572 h-full rounded-2xl relative overflow-hidden"
				onMouseEnter={() => setIsTextShow(true)}
				onMouseLeave={() => setIsTextShow(false)}
			>
				{isTextShow && (
					<Link
						href={'/products/category/' + categories[1]?.id}
						className="absolute w-full h-full top-0 left-0 hover:bg-trans-black transition-all rounded-2xl z-20 flex justify-center items-center"
					>
						<p className="text-white">See all products</p>
					</Link>
				)}
				<h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-7xl font-bold">
					{categories[1]?.name}
				</h2>
				{isLoading ? (
					<div className='w-572 h-full'>
						<SkeletonImage />
					</div>
				) : (
					<img
						src={categories[1]?.image || "./images/img-shoe.jpg"}
						alt="Shoes category"
						className={
							'rounded-2xl w-full h-413 object-cover object-center transition-transform ' +
							(isTextShow && 'scale-125')
						}
					/>
				)}
			</div>
		</section>
	);
}

export default HomeListContainer2;
