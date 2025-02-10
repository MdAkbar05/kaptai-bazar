import React, { useEffect, useState } from "react";
import Slider from "react-slick";

// Importing required CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { categories } from "./categoryData";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getProductsByCategory,
} from "../../features/productSlice";
import { fetchCategories } from "../../features/categorySlice";
import ProductCard from "../../pages/products-page/ProductCard";

const Category = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  debugger;
  const { categories } = useSelector((state) => state.categoryReducer);
  const { products } = useSelector((state) => state.productsReducer);

  dispatch(getProducts());
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    dispatch(getProducts()).then(() => {
      setFilteredProducts(products);
    });
    dispatch(fetchCategories()).then(() => {});
  }, []);

  const handleCategoryClick = (category) => {
    const filtered = products.filter(
      (product) => product.category.slug === category.slug
    );
    console.log(filtered);
    setFilteredProducts(filtered);
  };

  return (
    <div className="bg-white h-full relative py-6 space-y-8 my-8 ">
      <div className="flex justify-between items-center px-4 sm:flex-col md:flex-row gap-4">
        <Link
          to="/products"
          className="md:px-4 sm:px-2 py-2 rounded-2xl bg-secondary text-white mx-4 md:text-3xl sm:text-lg sm:text-center font-semibold"
        >
          {" "}
          Explore Categories
        </Link>
        <div className="flex md:justify-end sm:justify-center sm:gap-x-2 sm:gap-y-1 md:gap-6 flex-wrap">
          {categories?.length > 0 ? (
            categories?.slice(0, 4).map((category) => (
              <div
                key={category?._id}
                className="flex justify-start items-center gap-2 mb-2 cursor-pointer sm:text-sm md:text-xl font-medium text-gray-600  text-center bg-slate-50 border border-gray-200 px-1 py-0.5 rounded-lg"
                onClick={() => handleCategoryClick(category)}
              >
                {category?.name}
              </div>
            ))
          ) : (
            <p className="text-red-600">Not found categories!</p>
          )}
          <Link
            to={`/products`}
            className="flex justify-start items-center gap-2 mb-2 cursor-pointer sm:text-sm md:text-xl font-medium text-gray-600  text-center bg-slate-50 border border-gray-200 px-1 py-0.5 rounded-lg"
          >
            See all
          </Link>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 justify-center px-6 mx-auto items-center">
        {filteredProducts.length > 0 ? (
          filteredProducts?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))
        ) : (
          <p className="text-red-600 text-center">
            No products found in this category!
          </p>
        )}
      </div>
    </div>
  );
};

export default Category;
