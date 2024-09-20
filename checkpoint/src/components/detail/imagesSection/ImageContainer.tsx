import React, { useState } from 'react';
import SkeletonImage from '../../loader/SkeletonImage';
import { useAppSelector } from '../../../states/hooks';
import ListImage from './ListImage';
import { urlParser } from '../../../utils/urlParser';

interface ContainerType {
	images: string[];
}

function ImageContainer({ images }: ContainerType) {
	console.log(images)
	const isLoading = useAppSelector((state) => state.isLoading);
	const [selectedImage, setSelectedImage] = useState(0);
	const parsedImages = urlParser(images);

	const handleSelectImage = (id: number) => {
		setSelectedImage(id);
	};

	return (
		<div className="h-full flex gap-10">
			<ListImage images={parsedImages} selectImage={handleSelectImage} />
			<div className="h-full w-500 max-w-500 rounded-2xl py-4">
				{isLoading ? (
					<SkeletonImage/>
				) : (
					<img
						src={parsedImages[selectedImage]}
						alt="Product"
						className="rounded-2xl w-full h-full object-cover object-center"
					/>
				)}
			</div>
		</div>
	);
}

export default ImageContainer;
