import React from "react";
import { ChartItemType } from "../../../../types/type";
import { urlParser } from "../../../../utils/urlParser";

function ChartItem({ id, product } : ChartItemType) {
    const parsedImages = urlParser(product.images)
    return(
        <div className="flex items-center justify-between gap-6 w-full">
            <div className="w-20 h-20 rounded-lg">
                <img src={parsedImages[0]} alt={product.title} className="w-full h-full rounded-lg"/>
            </div>
            <p className="font-bold text-ellipsis text-start overflow-hidden w-60">{product.title}</p>
            <p className="font-bold">$ {product.price}</p>
        </div>
    )
}

export default ChartItem;