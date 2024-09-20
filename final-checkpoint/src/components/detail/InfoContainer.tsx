import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../states/hooks';
import { addToChart } from '../../states/chart/action';
import { ChartItemType } from '../../types/type';
import { urlParser } from '../../utils/urlParser';

interface InfoContainerType {
	id: number;
	title: string;
	description: string;
	price: number;
	images: string[];
	category?: {
		id: number;
		name: string;
	};
}

function InfoContainer({
	id,
	category,
	title,
	description,
	price,
    images
}: InfoContainerType) {
    const chart = useAppSelector((states) => states.chart);
    const dispatch = useAppDispatch();

    const parsedImages = urlParser(images)

    const chartObject: ChartItemType = {
        id: chart.length + 1,
        product: {
            id: id,
		title: title,
		price: price,
		images: parsedImages,
        }
    }

    const handleAddToChart = () => {
        dispatch(addToChart(chartObject))
    }

	return (
		<div className='w-1/3 mt-4 flex flex-col gap-6'>
			<p className='text-xl'>{category?.name}</p>
			<h4 className='text-xl font-bold'>{title}</h4>
            <p className='text-5xl font-bold'>$ {price}</p>
			<div>
				<p className='text-xl font-bold'>Description</p>
				<p className='text-base'>{description}</p>
			</div>
			<button onClick={handleAddToChart} className='flex items-center bg-orange-light w-fit text-white rounded-lg text-2xl font-bold py-4 px-10 gap-3 hover:bg-orange-500'>
				<FaShoppingBag />
				Add To Chart
			</button>
		</div>
	);
}

export default InfoContainer;
