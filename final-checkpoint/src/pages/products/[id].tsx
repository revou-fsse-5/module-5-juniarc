import React from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/states/hooks";
import BackButton from "@/components/detail/BackButton";
import ImageContainer from "@/components/detail/imagesSection/ImageContainer";
import InfoContainer from "@/components/detail/InfoContainer";
import { getProductDetail } from "@/states/productDetail/action";
import { ProductDetailType } from "@/types/type";
import { GetServerSideProps } from "next";
import store from "@/states";

interface DetailPageType {
    productDetail: ProductDetailType;
}

function Index({ productDetail }: DetailPageType) {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query

    await store.dispatch(getProductDetail(id as string))

    const state = store.getState();
    const productDetail = state.productDetail

    return {
        props: { productDetail}
    }
}

export default Index;
