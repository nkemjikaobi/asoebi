import Image from "next/image";
import React from "react";

const WholeSale = () => {
  const data = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam accusamus harum quod ipsum iste. Numquam provident unde dignissimos veritatis dolorem ullam, ratione maxime fugit. Molestiae.",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam accusamus harum quod ipsum iste. Numquam provident unde dignissimos veritatis dolorem ullam, ratione maxime fugit. Molestiae.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam accusamus harum quod ipsum iste. Numquam provident unde dignissimos veritatis dolorem ullam, ratione maxime fugit. Molestiae.",
    },
  ];

  return (
    <div className="bg-asoebiPurple-700 pt-[54px] pb-[62px] l-[213px] r-[235px] flex items-center h-[517px] text-white -ml-[50vw] left-[50%] relative w-screen">
      <Image height={401} src="/images/png/stacked-ankara.png" width={401} />
      <div>
        <h3 className="text-[30px] mb-[33px]">Providing Groups With A Full B2C Wholesale Ordering for Fabric</h3>
        <ul className="list-disc">
          {data.map((data) => (
            <li className="mb-4" key={data.id}>
              {data.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WholeSale;
