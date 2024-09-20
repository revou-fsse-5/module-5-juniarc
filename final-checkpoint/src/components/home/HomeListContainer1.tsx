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

function HomeListContainer1({ products, categories }: HomeListContainer1Type) {
	const SLIDE_INTERVAL = 5000;

	const [isTextShow, setIsTextShow] = useState(false);
	const isLoading = useAppSelector((states) => states.isLoading);

	return (
		<section className="w-full h-413 max-h-413 mt-10 flex gap-4 items-center relative">
			<div
				className="w-572 h-413 rounded-2xl relative overflow-hidden"
				onMouseEnter={() => setIsTextShow(true)}
				onMouseLeave={() => setIsTextShow(false)}
			>
				{isTextShow && (
					<Link
						href={"/products/category/" + categories[0]?.id}
						className="absolute w-full h-full top-0 left-0 hover:bg-trans-black transition-all rounded-2xl z-20 flex justify-center items-center"
					>
						<p className="text-white">See all products</p>
					</Link>
				)}
				<h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-7xl font-bold transition-all">
					{categories[0]?.name || ''}
				</h2>
				{isLoading ? (
					<div className='h-413 w-572'>
						<SkeletonImage />
					</div>
				) : (
					<img
						src={categories[0]?.image || "./images/img-clothe.jpg"}
						alt="Clothes category"
						className={
							'rounded-2xl w-full h-413 object-cover object-center transition-transform ' +
							(isTextShow && 'scale-125')
						}
					/>
				)}
			</div>
			{isLoading ? (
				<div className="flex items-center justify-center gap-4 h-413 w-2/3 ">
					<Loader width="w-14" height="h-14" />
				</div>
			) : products.length === 0 ? (
				<p className="w-2/3 text-center align-middle">
					There are no products avaible
				</p>
			) : (
				<HomeListProduct products={products} slideInterval={SLIDE_INTERVAL} />
			)}
		</section>
	);
}

export default HomeListContainer1;
