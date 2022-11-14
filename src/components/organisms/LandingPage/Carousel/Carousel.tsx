import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <div className="w-full h-[520] relative">
      <Image height={520} src="/images/png/carousel.png" width={794} />
      <div className="absolute bottom-[2.5rem] left-[20.625rem] flex w-[11.5rem] justify-between">
        <div className="w-[1.25rem] h-[1.25rem] bg-asoebiPurple-800 border-asoebiPurple-800 border-2 rounded-[50%]" />
        <div className="w-[1.25rem] h-[1.25rem] border-asoebiPurple-800 border-2 rounded-[50%]" />
        <div className="w-[1.25rem] h-[1.25rem] border-asoebiPurple-800 border-2 rounded-[50%]" />
        <div className="w-[1.25rem] h-[1.25rem] border-asoebiPurple-800 border-2 rounded-[50%]" />
        <div className="w-[1.25rem] h-[1.25rem] border-asoebiPurple-800 border-2 rounded-[50%]" />
        <div className="w-[1.25rem] h-[1.25rem] border-asoebiPurple-800 border-2 rounded-[50%]" />
      </div>
    </div>
  );
};

export default Carousel;
