import React from 'react';
import ChartItem from './ChartItem';
import { ChartItemType } from '../../types/type';

interface ChartListType {
	chart: ChartItemType[];
}

function ChartList({ chart }: ChartListType) {
	return (
		<section className="flex flex-col gap-4">
			{chart.length === 0 ? (
				<p className="w-full text-center p-10">Empty chart</p>
			) : (
				chart.map((item) => <ChartItem key={item.id} {...item} />)
			)}
		</section>
	);
}

export default ChartList;
