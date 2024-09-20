import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../states/hooks';
import SkeletonImage from '../../loader/SkeletonImage';

interface CategoryItemType {
	name?: string;
	image?: string;
	link: string;
}

function CategoryItem({ name, image, link }: CategoryItemType) {
	const isLoading = useAppSelector((state) => state.isLoading);
	const [isMouseEnter, setIsMouseEnter] = useState(false);
	return isLoading ? (
		<div className='w-440 h-373'>
			<SkeletonImage />
		</div>
	) : (
		<div className="relative overflow-hidden w-440 h-373 bg-white rounded-2xl">
			<div className="absolute bottom-10 left-10 z-10">
				<h3 className="font-bold text-white text-5xl mb-7">{name}</h3>
				<Link
					to={link}
					onMouseEnter={() => setIsMouseEnter(true)}
					onMouseLeave={() => setIsMouseEnter(false)}
					className="bg-white py-4 px-10 rounded-lg font-bold hover:bg-green-light hover:text-white transition-colors"
				>
					See Products
				</Link>
			</div>
			<img
				src={image}
				alt={name + ' category'}
				className={
					'w-full h-full object-cover object-center rounded-xl transition-transform ' +
					(isMouseEnter && 'scale-125')
				}
			/>
		</div>
	);
}

export default CategoryItem;
