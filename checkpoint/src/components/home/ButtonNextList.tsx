import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

interface ButtonNextListType {
  handleNext: () => void;
  isVisible: boolean;
}

function ButtonNextList() {
  return (
    <button
      type="button"
      aria-label="Next list"
      className="bg-green-light h-fit p-2 rounded-full z-10 "
    >
      <FaAngleRight className="text-white text-3xl" />
    </button>
  );
}

export default ButtonNextList;
