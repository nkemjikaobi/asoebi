import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="-ml-[50vw] left-[50%] relative w-screen mt-[5.313rem]">
      <div>
        <Image height={323} src="/images/png/mainbanner.png" width={1440} />
      </div>
    </div>
  );
};

export default Banner;
