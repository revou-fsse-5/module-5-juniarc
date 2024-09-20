import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../../states/hooks';
import { ProductItemType, ChartItemType } from '../../types/type';
import { urlParser } from '../../utils/urlParser';
import { addToChart } from '../../states/chart/action';

function ProductItem({ id, title, price, images } : ProductItemType) {
  const chart = useAppSelector((state) => state.chart);
  const dispatch = useAppDispatch();
  const router = useRouter()
  const parsedImages = urlParser(images);

  const item: ChartItemType = {
    id: chart.length + 1,
    product: {
      id: id,
      title: title,
      price: price,
      images: images,
    }
  }

  const onAddToChart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    dispatch(addToChart(item))
  }

  const handleNavigateToDetail = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if((event.target as HTMLElement).tagName !== 'BUTTON') {
      router.push(`/products/${id}`)
    }
  }

  return (
    <div className="w-80 h-full min-w-80 p-6 bg-white drop-shadow-lg rounded-2xl flex flex-col justify-between" onClick={handleNavigateToDetail}>
      <div className="w-full h-52 rounded-xl cursor-pointer">
        <img
          src={parsedImages[0]}
          alt={title + "image"}
          className="w-full h-full object-cover object-center rounded-2xl"
        />
      </div>
      <p className="max-h-12 overflow-hidden cursor-pointer">
        {title}
      </p>
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">$ {price}</p>
        <button
          className="bg-gray-200 p-3 rounded-lg hover:bg-orange-light hover:text-white transition-colors text-orange-light text-xl"
          type="button"
          aria-label="Add to chart"
          onClick={onAddToChart}
        >
          <FaShoppingBag />
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
