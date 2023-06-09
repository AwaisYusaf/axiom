"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
type Props = {
  img1url: string;
  img2url: string;
  bestselling: boolean;
  title: string;
};

const CarouselCard = ({ img1url, img2url, title, bestselling }: Props) => {
  const [showSecondaryImg, setSecondaryImg] = useState(false);
  return (
    <div>
      <div
        className={
          "w-[260px] min-h-[400px] flex flex-col shrink-0 mx-5 relative bg-no-repeat transition-all duration-300 group bg-cover snap-center"
        }
        onMouseEnter={() => setSecondaryImg(true)}
        onMouseLeave={() => setSecondaryImg(false)}
      >
        {showSecondaryImg ? (
          <img src={img1url} className="flex-shrink-0 rounded-md" />
        ) : (
          <img src={img2url} className="flex-shrink-0 rounded-md" />
        )}

        {bestselling && (
          <h3 className="text-white absolute right-0 bg-black flex-grow-0 text-xs uppercase p-[6px] tracking-[3px] group-hover:hidden">
            Best selling
          </h3>
        )}

        <motion.h3
          className="absolute z-40 -top-4 flex-shrink-0 text-center right-0 hidden group-hover:inline-flex  bg-black text-white p-4 rounded-full leading-5 cursor-pointer "
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Quick
          <br /> View
        </motion.h3>
      </div>
      <div className="ml-4 flex flex-col space-y-2">
        <h2 className="text-xl mt-2">{title}</h2>
        <p className="tracking-[1.4px]">$68</p>
        <div className="flex">
          <img
            src="https://img.icons8.com/material-rounded/256/star.png"
            alt=""
            className="w-[15px] h-[15px]"
          />
          <img
            src="https://img.icons8.com/material-rounded/256/star.png"
            alt=""
            className="w-[15px] h-[15px]"
          />
          <img
            src="https://img.icons8.com/material-rounded/256/star.png"
            alt=""
            className="w-[15px] h-[15px]"
          />
          <img
            src="https://img.icons8.com/material-rounded/256/star.png"
            alt=""
            className="w-[15px] h-[15px]"
          />
        </div>
      </div>
    </div>
  );
};
//Image 1 :https://cdn.shopify.com/s/files/1/2091/0251/products/m-adventuremobilepullover-grey2_b2facf5e-7e6a-489d-ab6d-87c2be3d4db7_360x.jpg?v=1609257900
//Image 2 :https://cdn.shopify.com/s/files/1/2091/0251/products/m-polarispullover-red2_360x.jpg?v=1609258000

const ImageCarouselForMen = () => {
  var settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Slider {...settings}>
        <CarouselCard
          img1url={`https://cdn.shopify.com/s/files/1/2091/0251/products/m-adventuremobilepullover-grey2_b2facf5e-7e6a-489d-ab6d-87c2be3d4db7_360x.jpg?v=1609257900`}
          img2url={`https://cdn.shopify.com/s/files/1/2091/0251/products/m-polarispullover-red2_360x.jpg?v=1609258000`}
          bestselling={false}
          title="Chambray Button Down"
        />
        <CarouselCard
          img1url={`https://cdn.shopify.com/s/files/1/2091/0251/products/m-adventuremobilepullover-grey2_b2facf5e-7e6a-489d-ab6d-87c2be3d4db7_360x.jpg?v=1609257900`}
          img2url={`https://cdn.shopify.com/s/files/1/2091/0251/products/m-polarispullover-red2_360x.jpg?v=1609258000`}
          bestselling={false}
          title="Chambray Button Down"
        />
        <CarouselCard
          img1url={`https://cdn.shopify.com/s/files/1/2091/0251/products/m-adventuremobilepullover-grey2_b2facf5e-7e6a-489d-ab6d-87c2be3d4db7_360x.jpg?v=1609257900`}
          img2url={`https://cdn.shopify.com/s/files/1/2091/0251/products/m-polarispullover-red2_360x.jpg?v=1609258000`}
          bestselling={false}
          title="Chambray Button Down"
        />
        <CarouselCard
          img1url={`https://cdn.shopify.com/s/files/1/2091/0251/products/m-adventuremobilepullover-grey2_b2facf5e-7e6a-489d-ab6d-87c2be3d4db7_360x.jpg?v=1609257900`}
          img2url={`https://cdn.shopify.com/s/files/1/2091/0251/products/m-polarispullover-red2_360x.jpg?v=1609258000`}
          bestselling={false}
          title="Chambray Button Down"
        />
        <CarouselCard
          img1url={`https://cdn.shopify.com/s/files/1/2091/0251/products/m-adventuremobilepullover-grey2_b2facf5e-7e6a-489d-ab6d-87c2be3d4db7_360x.jpg?v=1609257900`}
          img2url={`https://cdn.shopify.com/s/files/1/2091/0251/products/m-polarispullover-red2_360x.jpg?v=1609258000`}
          bestselling={false}
          title="Chambray Button Down"
        />
      </Slider>
    </div>
  );
};

const ImageCarouselForWomen = () => {
  var settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Slider {...settings}>
        <CarouselCard
          img1url={`https://cdn.shopify.com/s/files/1/2091/0251/products/w-avalon-navy_360x.jpg?v=1497278233`}
          img2url={`https://cdn.shopify.com/s/files/1/2091/0251/products/w-adventuremobilepullover-olive3_360x.jpg?v=1497278437`}
          bestselling={false}
          title="Chambray Button Down"
        />
        <CarouselCard
          img1url={`https://cdn.shopify.com/s/files/1/2091/0251/products/w-avalon-navy_360x.jpg?v=1497278233`}
          img2url={`https://cdn.shopify.com/s/files/1/2091/0251/products/w-adventuremobilepullover-olive3_360x.jpg?v=1497278437`}
          bestselling={false}
          title="Chambray Button Down"
        />
        <CarouselCard
          img1url={`https://cdn.shopify.com/s/files/1/2091/0251/products/w-avalon-navy_360x.jpg?v=1497278233`}
          img2url={`https://cdn.shopify.com/s/files/1/2091/0251/products/w-adventuremobilepullover-olive3_360x.jpg?v=1497278437`}
          bestselling={false}
          title="Chambray Button Down"
        />
        <CarouselCard
          img1url={`https://cdn.shopify.com/s/files/1/2091/0251/products/w-avalon-navy_360x.jpg?v=1497278233`}
          img2url={`https://cdn.shopify.com/s/files/1/2091/0251/products/w-adventuremobilepullover-olive3_360x.jpg?v=1497278437`}
          bestselling={false}
          title="Chambray Button Down"
        />
        <CarouselCard
          img1url={`https://cdn.shopify.com/s/files/1/2091/0251/products/w-avalon-navy_360x.jpg?v=1497278233`}
          img2url={`https://cdn.shopify.com/s/files/1/2091/0251/products/w-adventuremobilepullover-olive3_360x.jpg?v=1497278437`}
          bestselling={false}
          title="Chambray Button Down"
        />
      </Slider>
    </div>
  );
};
export default function Carousel() {
  const [currentCarousel, setCurrentCarousel] = useState(1);
  return (
    <main className="w-screen flex flex-col items-center h-[100vh]">
      <h2 className="uppercase tracking-[3px] text-lg">Top Picks</h2>
      <div className="flex justify-between text-3xl font-bold ">
        <p
          className={`mx-3 cursor-pointer ${
            currentCarousel == 1 ? "underline" : ""
          }`}
          onClick={() => setCurrentCarousel(1)}
        >
          Men
        </p>
        <p
          className={`mx-3 cursor-pointer ${
            currentCarousel == 2 ? "underline" : ""
          }`}
          onClick={() => {
            setCurrentCarousel(2);
            console.log(currentCarousel);
          }}
        >
          Women
        </p>
      </div>
      <div className="w-full h-full pt-10">
        {currentCarousel == 1 && <ImageCarouselForMen />}
        {currentCarousel == 2 && <ImageCarouselForWomen />}
      </div>
    </main>
  );
}
