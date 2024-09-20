import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useAppDispatch } from '../../states/hooks';
import { urlParser } from '../../utils/urlParser';
import DeleteModal from './DeleteModal';
import { deleteFromChart } from '../../states/chart/action';

interface ChartItemType {
	id: number;
	product: {
		id: number;
		title: string;
		price: number;
		images: string[];
	};
}

function ChartItem({ id, product }: ChartItemType) {
	const [openModal, setOpenModal] = useState(false);

	const dispatch = useAppDispatch();

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleDelete = () => {
		dispatch(deleteFromChart(id));
	};
	const parsedImages = urlParser(product.images);
	return (
		<div className="flex items-center justify-between gap-6 w-full">
			<div className="w-28 h-28 rounded-lg">
				<img
					src={parsedImages[0]}
					alt={product.title}
					className="w-full h-full rounded-lg"
				/>
			</div>
			<p className="font-bold text-ellipsis text-start text-xl overflow-hidden w-3/5">
				{product.title}
			</p>
			<p className="font-bold w-1/5 text-xl">$ {product.price}</p>
			<button
				onClick={() => handleOpenModal()}
				className="text-red-light w-52 flex justify-center text-2xl"
				aria-label="Delete product from chart"
			>
				<FaTrash />
			</button>
			<DeleteModal
				openModal={openModal}
				closeModal={handleCloseModal}
				deleteProduct={handleDelete}
			/>
		</div>
	);
}

export default ChartItem;
