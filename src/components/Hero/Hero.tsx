import React from "react";
export interface HeroInterface {}
import Rick from "../../assets/img/rick.png";
const Hero: React.FC<HeroInterface> = () => {
  return (
    <div className="w-2/3">
      <img src={Rick} alt="" />
    </div>
  );
};

export default Hero;
