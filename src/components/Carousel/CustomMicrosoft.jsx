import { useState } from "react";
import { HEROIMGDATA } from "../../data/heroCarouselData";

const CustomMicrosoft = () => {
  const [imgIndex, setImgIndex] = useState(1); // Start with img2

  const carouselPrev = () => {
    setImgIndex((prevIndex) =>
      prevIndex === 0 ? HEROIMGDATA.length - 1 : prevIndex - 1
    );
  };

  const carouselNext = () => {
    setImgIndex((prevIndex) =>
      prevIndex === HEROIMGDATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  const img1 =
    HEROIMGDATA[(imgIndex - 1 + HEROIMGDATA.length) % HEROIMGDATA.length];
  const img2 = HEROIMGDATA[imgIndex];
  const img3 = HEROIMGDATA[(imgIndex + 1) % HEROIMGDATA.length];

  return (
    <div className="microsoft-carousel">
      <button onClick={carouselPrev} className="mcc-left">
        <img src="/icons8-previous-50.png" alt="" />
      </button>
      <button onClick={carouselNext} className="mcc-right">
        <img src="/icons8-previous-50.png" alt="" />
      </button>
      <div className="mcc-dots">
        <button className="mcc-dot"></button>
        <button className="mcc-dot"></button>
        <button className="mcc-dot"></button>
        <button className="mcc-dot"></button>
      </div>
      <div className="mcc-wrapper">
        <div className="mcc-img1">
          <img src={img1} alt="" />
        </div>
        <div className="mcc-img2">
          <img src={img2} alt="" />
        </div>
        <div className="mcc-img3">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CustomMicrosoft;
