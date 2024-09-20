import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useAppSelector } from '../../../../states/hooks';

function ChartButton() {
	const chart = useAppSelector((state) => state.chart);
	return (
		<button type="button" aria-label="shopping chart" className="relative p-4">
			<FaShoppingCart className="text-3xl" />
			<span className="bg-red-light p-1 text-center absolute top-0 right-0 text-white text-sm align-middle font-bold rounded-full h-7 w-7 outline outline-3">
				{chart.length}
			</span>
		</button>
	);
}

export default ChartButton;
