import React from "react";
import { useAppSelector } from "../../../states/hooks";

interface ItemImageType {
    id: number
    image: string;
    selectImage: (id: number) => void;
}
function ItemImage({ id, image, selectImage } : ItemImageType) {
    const isLoading = useAppSelector((state) => state.isLoading);
    const handleClick = () => {
        selectImage(id)
    }
    return (
        <div className="w-36 h-36 rounded-lg overflow-hidden" onClick={handleClick}>
            <img src={image} alt="Product" className="w-full h-full object-cover object-center rounded-lg hover:scale-125 transition-transform cursor-pointer"/>
        </div>
    )
}

export default ItemImage;