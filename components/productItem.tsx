import React, { useContext } from "react";
import Link from "next/link";
import { ShopContext } from "@/context/ShopContext";

interface Props {
  id: string;
  image: string[];
  name: string;
  price: number;
}

const ProductItem: React.FC<Props> = ({ id, image, name, price }) => {
  const ctx = useContext(ShopContext)!;
  const { currency } = ctx;
  return (
    <Link href={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt="" />
      </div>
      <p className="pt-3 pb-1 text-sm ">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;
