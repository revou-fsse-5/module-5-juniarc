import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';

function BackButton() {
	const router = useRouter();

	const handleBack = () => {
		router.back()
	};

	return (
		<button onClick={handleBack} className='flex items-center gap-3'>
			<FaChevronLeft />
			Back
		</button>
	);
}

export default BackButton;
