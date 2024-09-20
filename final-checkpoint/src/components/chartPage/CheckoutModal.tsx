import React from 'react';
import { Modal, Button } from 'flowbite-react';

interface CheckoutModalType {
	isSuccess: boolean;
	openCOModal: boolean;
	closeCOModal: () => void;
	onCheckout: () => void;
	totalPrice: number;
	totalProducts: number;
}

function CheckoutModal({
	isSuccess,
	openCOModal,
	closeCOModal,
	onCheckout,
	totalPrice,
	totalProducts,
}: CheckoutModalType) {
	return (
		<Modal
			show={openCOModal}
			size="lg"
			className="checkout-modal"
			onClose={() => closeCOModal}
		>
			<Modal.Body className="text-center">
				<div className="w-full">
					{isSuccess ? (
						<h3 className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
							Checkout success
						</h3>
					) : (
						<div className="w-full">
							<div className="flex items-center w-full justify-center gap-6 mb-4">
								<h3 className="text-lg">
									Total Price :{' '}
									<span className="font-bold text-lg">$ {totalPrice}</span>
								</h3>
								<h3 className="text-lg">
									Total Product :{' '}
									<span className="font-bold text-lg">{totalProducts}</span>
								</h3>
							</div>
							<h3 className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
								Are you sure want to checkout these products ?
							</h3>
						</div>
					)}
				</div>
				<div className="flex justify-center gap-4">
					{isSuccess ? (
						<Button onClick={() => closeCOModal()} color="success">
							Close
						</Button>
					) : (
						<>
							<Button onClick={() => onCheckout()} color="success">
								Yes
							</Button>
							<Button onClick={() => closeCOModal()} color="gray">
								Cancel
							</Button>
						</>
					)}
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default CheckoutModal;
