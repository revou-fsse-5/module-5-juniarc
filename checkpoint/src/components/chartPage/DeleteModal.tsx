import React from 'react';
import { Modal, Button } from 'flowbite-react';

interface DeleteModalType {
	openModal: boolean;
	closeModal: () => void;
    deleteProduct: () => void;
}

function DeleteModal({ openModal, closeModal, deleteProduct }: DeleteModalType) {
	return (
		<Modal show={openModal} size="lg" className='delete-modal' onClose={() => closeModal()}>
			<Modal.Header />
			<Modal.Body className="text-center">
				<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
					Are you sure you want to delete this product?
				</h3>
                <div className="flex justify-center gap-4">
                    <Button onClick={() => deleteProduct()} color="failure">Delete</Button>
                    <Button onClick={() => closeModal()} color="gray">Cancel</Button>
                </div>
			</Modal.Body>
		</Modal>
	);
}

export default DeleteModal;
