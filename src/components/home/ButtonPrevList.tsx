import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';

interface ButtonPrevListType {
  handlePrev: () => void;
  isVisible: boolean;
}

function ButtonPrevList() {
  return (
    <button
      type="button"
      aria-label="Next list"
      className="bg-green-light h-fit p-2 rounded-full z-10 "
    >
      <FaAngleLeft className="text-white text-3xl" />
    </button>
  );
}

export default ButtonPrevList;
