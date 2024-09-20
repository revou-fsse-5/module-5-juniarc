import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../states/hooks';
import BackButton from '../components/detail/BackButton';
import ImageContainer from '../components/detail/imagesSection/ImageContainer';
import InfoContainer from '../components/detail/InfoContainer';
import { getProductDetail } from '../states/productDetail/action';

function DetailPage() {
	const { id } = useParams();
	const productDetail = useAppSelector((state) => state.productDetail);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getProductDetail(id));
	}, [id, dispatch]);

	return (
		<main>
			<section className="detail-section w-svh h-640 m-10 mt-0 rounded-2xl p-10">
				<BackButton />
				<div className="h-full w-full flex gap-10">
					<ImageContainer images={productDetail.images} />
					<InfoContainer {...productDetail} />
				</div>
			</section>
		</main>
	);
}

export default DetailPage;
