import React from "react";
import "swiper/css";
import Slider from "./Slider";
import { Product } from "@/app/types";

interface Props {
  products?: Product[];
}

const SliderContainer = ({ products }: Props) => {
  return (
    <div className="container mt-28">
      <Slider products={products} />
    </div>
  );
};

export default SliderContainer;
