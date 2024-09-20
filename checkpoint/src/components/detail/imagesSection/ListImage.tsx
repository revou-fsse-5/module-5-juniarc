import React from 'react';
import { useAppSelector } from '../../../states/hooks';
import ItemImage from './ItemImage';
import SkeletonImage from '../../loader/SkeletonImage';

interface ListImageType {
	images: string[];
	selectImage: (id: number) => void;
}

function ListImage({ images, selectImage }: ListImageType) {
	const isLoading = useAppSelector((state) => state.isLoading);
	return (
		<div className="flex flex-col h-full justify-around min-w-36">
			{isLoading ? (
				<div className="w-36 h-36 rounded-lg ">
					<SkeletonImage />
				</div>
			) : (
				images.map((image, index) => (
					<ItemImage
						key={index}
						image={image}
						selectImage={selectImage}
						id={index}
					/>
				))
			)}
		</div>
	);
}

export default ListImage;
