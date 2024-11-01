import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const generateStar = (rate: number) => {
  return Array.from({ length: 5 }, (_, index) => {
    const fullStarThreshold = index + 1;

    if (rate >= fullStarThreshold) {
      return <FaStar key={index} className="text-base text-yellow-500" />;
    } else if (rate >= fullStarThreshold - 0.5) {
      return (
        <FaStarHalfAlt key={index} className="text-base text-yellow-500" />
      );
    } else {
      return <FaRegStar key={index} className="text-yellow-500 text-base" />;
    }
  });
};

export default generateStar;
