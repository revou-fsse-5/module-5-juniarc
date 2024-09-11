import React from 'react';
import { Dropdown } from 'flowbite-react';
import { useAppSelector } from '../../../../states/hooks';
import { Link } from 'react-router-dom';
import ChartButton from './ChartButton';
import ChartItem from './ChartItem';

function ChartDropdownMenu() {
	const chart = useAppSelector((state) => state.chart);

	return (
		<Dropdown label="" renderTrigger={() => ChartButton()} dismissOnClick={true}>
			<Dropdown.Header className="flex justify-between min-w-96">
				<p className="font-bold">
					Chart (<span>{chart.length}</span>)
				</p>
				<Link to="/shopping-chart" className="text-orange-light">
					See all
				</Link>
			</Dropdown.Header>
			{chart.length === 0 ? (
				<p className="w-full text-center p-10">Empty chart</p>
			) : (
				chart.map((item) => (
					<Dropdown.Item key={item.id}>
						<ChartItem key={item.id} {...item} />
					</Dropdown.Item>
				))
			)}
		</Dropdown>
	);
}

export default ChartDropdownMenu;
