import React, { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import { useNavigate } from "react-router-dom";
import chicken from "./img/deshi-chicken.png";
import fish from "./img/fish.png";
import fruits from "./img/fruits.png";
import massala from "./img/massala.png";

const PopularNow = () => {
  const navigate = useNavigate();

  const data = [
    {
      name: "পাহাড়ি দেশি মোরগ-মুরগি ও পাহাড়ি দেশী হাঁস ",
      image: chicken,
      category: "Meats and Sea-Food",
      link: "/products?category=meats-and-seafood",
    },
    {
      name: "কাপ্তাই লেকের সকল ধরণের মাছ",
      image: fish,
      category: "Sea Fish",
      link: "/products?category=sea-fish",
    },
    {
      name: "পাহাড়ি মৌসুমি ফল পাওয়া যায় ",
      image: fruits,
      category: "Fruits and Vegetables",
      link: "/products?category=fruits-and-vegetables",
    },
    {
      name: "পাহাড়ি মশলা পাওয়া যায় ",
      image: massala,
      category: "Massala",
      link: "/products/category=massala",
    },
  ];

  return (
    <div className="bg-white h-full relative py-6 space-y-8 my-8 ">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        Popular Item
      </h2>
      {/* Horizontal Line */}
      <hr className=" w-24 mx-auto border-primary border-2 mb-12" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-between item-center gap-4 p-4">
        {data?.map((d) => (
          <PopularCard data={d} />
        ))}
      </div>
    </div>
  );
};

export default PopularNow;
