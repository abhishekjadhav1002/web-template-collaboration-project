import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../layouts/ProductCard";

const Shop = () => {
  const data = [
    {
      id: 0,
      img: "https://m.media-amazon.com/images/I/31CBzqU9dhL._AC_UL480_FMwebp_QL65_.jpg",
      name: "Nike Air",
      price: "198.00",
      discount: "20% Off",
    },
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/51Z1Tml1OzL._AC_UL480_FMwebp_QL65_.jpg",
      name: "Sportswear Futura",
      price: "208.00",
      discount: "40% Off",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/71FLt2oP55L._AC_UL480_FMwebp_QL65_.jpg",
      name: "Royal Collection",
      price: "104.00",
      discount: "35% Off",
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/81M8NXwR-SL._AC_UL480_FMwebp_QL65_.jpg",
      name: "t-shirt combo pack",
      price: "299.00",
      discount: "40% Off",
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/71K+opX7h0L._AC_UL480_FMwebp_QL65_.jpg",
      name: "CozyCraze Hoodies",
      price: "159.00",
      discount: "23% Off",
    },
    {
      id: 5,
      img: "https://m.media-amazon.com/images/I/614DRxJjuRL._AC_UL480_FMwebp_QL65_.jpg",
      name: "LuxeLoom Purses",
      price: "189.00",
      discount: "30% Off",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
      {/* heading section */}
      <div>
        <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
          Best sellers
        </h1>
      </div>

      {/* carousel section */}
      <div className=" mt-8">
        <Slider {...settings}>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shop;
