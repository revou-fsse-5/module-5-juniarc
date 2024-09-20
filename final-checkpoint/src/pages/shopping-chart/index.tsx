import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/states/hooks";
import ChartList from "@/components/chartPage/ChartList";
import { checkoutProducts } from "@/states/chart/action";
import dynamic from "next/dynamic";

const CheckoutModal = dynamic(() => import('@/components/chartPage/CheckoutModal'), {ssr: false})

function Index() {
    const chart = useAppSelector((state) => state.chart);
	const user = useAppSelector((state) => state.user);
	const [isCOSuccess, setIsCOsuccess] = useState(false);
	const [isCOModalOpen, setIsCOModalOpen] = useState(false);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const totalPrice = chart.reduce((accumulator, currentItem) => {
		return accumulator + currentItem.product.price;
	}, 0);

	const handleCheckout = () => {
		setIsCOsuccess(true);
		dispatch(checkoutProducts());
	};

	const handleOpenCOModal = () => {
		if(Object.keys(user).length > 0) {
			setIsCOModalOpen(true);
		} else {
			router.push('/sign-in')
		}
	};

	const handleCloseCOModal = () => {
		setIsCOModalOpen(false);
	};
	return (
		<main className="px-10 min-h-screen-with-header-footer">
			<section className="chart-section bg-white rounded-2xl p-10">
				<h1 className="font-bold text-xl mb-5">
					Total Product (<span>{chart.length}</span>)
				</h1>
				<ChartList chart={chart} />
				{chart.length !== 0 && (
					<div className="w-full flex justify-end mt-5">
						<button
							onClick={handleOpenCOModal}
							className="bg-green-light text-white font-bold text-xl py-4 px-10 rounded-lg hover:bg-black transition-colors"
						>
							Check Out
						</button>
					</div>
				)}
				<CheckoutModal
					isSuccess={isCOSuccess}
					openCOModal={isCOModalOpen}
					closeCOModal={handleCloseCOModal}
					onCheckout={handleCheckout}
                    totalPrice={totalPrice}
                    totalProducts={chart.length}
				/>
			</section>
		</main>
	);
}

export default Index;