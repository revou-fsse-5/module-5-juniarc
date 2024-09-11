import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function BackButton() {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<button onClick={handleBack} className='flex items-center gap-3'>
			<FaChevronLeft />
			Back
		</button>
	);
}

export default BackButton;
