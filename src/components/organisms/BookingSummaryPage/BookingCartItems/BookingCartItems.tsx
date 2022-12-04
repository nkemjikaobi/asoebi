import React from "react";

import BookingCartItem from "../BookingCartItem/BookingCartItem";

const BookingCartItems = () => {
  const bookingCartItemsData = [
    {
      id: 1,
      name: "Mega Eleganza Organza Satin",
      price: 26000,
      category: "groom families",
      url: "/images/png/bookingSummary/eleganza.png",
    },
    {
      id: 2,
      name: "Pink Lace Organza Satin",
      price: 35000,
      category: "bride families",
      url: "/images/png/bookingSummary/eleganza2.png",
    },
  ];

  return (
    <div className="mb-6 smallLaptop:mb-[10.438rem]">
      {bookingCartItemsData.map((data) => (
        <BookingCartItem cart={data} key={data.id} />
      ))}
    </div>
  );
};

export default BookingCartItems;
