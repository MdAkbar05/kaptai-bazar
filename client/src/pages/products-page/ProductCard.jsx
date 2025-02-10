import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";

import { toast } from "react-toastify";
import { addToFavourite } from "../../features/favouriteSlice";
import { getProductBySlug } from "../../features/productSlice";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const notify = (msg) => toast(msg);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-around gap-y-2  sm:w-36 md:w-[264px]  h-auto border rounded-3xl shadow-lg shadow-green-100 border-secondary py-2 px-4 bg-white hover:scale-105 transition-transform cursor-pointer">
      <div
        onClick={() => {
          dispatch(getProductBySlug(product?.slug));
          navigate("/current-product");
        }}
        className="md:h-48 sm:h-28 w-full md:p-4 sm:p-1 object-cover relative"
      >
        <img
          src={product?.image}
          alt={product?.name}
          className=" h-full mx-auto object-cover mb-4 shadow-2xl shadow-coffe rounded-md"
        />
      </div>
      <Link
        to={`/products?category=${product.category?.slug}`}
        className="md:text-sm sm:text-xs border text-center  px-2 py-1 rounded-xl"
      >
        {product.category?.name}
      </Link>
      <div className="flex justify-between">
        <div className="sm:text-xs md:text-lg font-semibold text-center">
          {product?.name}
        </div>
        <div
          className="sm:hidden md:flex"
          onClick={() => {
            dispatch(addToFavourite(product));
            notify("Product added to favourites");
          }}
        >
          ❤️
        </div>
      </div>

      <div className="md:flex justify-between sm:hidden">
        <span className="flex ">
          {Array.from({ length: product?.ratings }, (_, i) => (
            <span key={i} className="text-lg">
              ⭐
            </span>
          ))}{" "}
        </span>
        <span className="font-semibold">{product?.ratings.toFixed(2)}</span>
      </div>
      <div className="sm:text-sm md:text-lg font-bold text-center text-gray-900 ">
        ${product?.price}
      </div>
      <div className="flex justify-between gap-1">
        <button
          onClick={() => {
            dispatch(addToCart(product));
            toast.success("Product added successfully");
          }}
          className="md:w-full sm:w-auto flexCenter gap-x-2 bg-secondary text-white md:py-2 sm:py-0.5 px-4 rounded-xl hover:bg-green-600"
        >
          <MdOutlineShoppingCart size={24} />
          <span className="sm:hidden md:flex">Add to Cart</span>
        </button>
        <div
          className="sm:flex md:hidden flexCenter gap-x-2 bg-secondary text-white md:py-2 sm:py-0.5 px-4 rounded-xl hover:bg-red-600"
          onClick={() => {
            dispatch(addToFavourite(product));
            notify("Product added to favourites");
          }}
        >
          ❤️
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
