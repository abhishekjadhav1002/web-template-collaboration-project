import React from "react";
import ProductCard from "../layouts/ProductCard";

const Features = () => {
  const data = [
    {
      id: 6,
      img: "https://m.media-amazon.com/images/I/61UIHcgQUvL._AC_UL480_FMwebp_QL65_.jpg",
      name: "CASUAL JACKET ",
      price: "398.00",
      discount: "24% Off",
    },
    {
      id: 7,
      img: "https://m.media-amazon.com/images/I/61f4DUp3-uL._AC_UL480_FMwebp_QL65_.jpg",
      name: "DaintyDoll Dresses",
      price: "258.00",
      discount: "40% Off",
    },
    {
      id: 8,
      img: "https://m.media-amazon.com/images/I/61dM8p3wvuL._AC_UL480_FMwebp_QL65_.jpg",
      name: "TrendTraverse Bag",
      price: "104.00",
      discount: "35% Off",
    },
    {
      id: 9,
      img: "https://m.media-amazon.com/images/I/81fnqfUWQRL._AC_UL480_FMwebp_QL65_.jpg",
      name: "Fitness Footwear",
      price: "299.00",
      discount: "40% Off",
    },
    {
      id: 10,
      img: "https://m.media-amazon.com/images/I/41SMyuyaXOL._AC_UL480_FMwebp_QL65_.jpg",
      name: "UrbanBelle Hoodies",
      price: "129.00",
      discount: "28% Off",
    },
    {
      id: 11,
      img: "https://m.media-amazon.com/images/I/61e4AdnZhSL._AC_UL480_FMwebp_QL65_.jpg",
      name: "Elite Handbags",
      price: "189.00",
      discount: "30% Off",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col justify-center pt-24">
      {/* heading section */}
      <h1 className=" font-semibold text-2xl sm:text-4xl text-center text-ExtraDarkColor">
        Exclusive Products
      </h1>

      {/* card section */}
      <div className=" flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <div key={item.id} className="w-3/4 md:w-2/4 lg:w-1/4">
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
