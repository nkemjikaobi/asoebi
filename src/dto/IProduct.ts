import { StaticImageData } from "next/image";

export interface IProduct {
  id: number;
  productImage: StaticImageData;
  price: string;
  productName: string;
  productDescription: string;
}
