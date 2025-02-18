import { item_Image } from "../../assets/Images";
export const data = Array.from({ length: 20 }, (_, index) => ({
    id: (index + 1).toString(),
    name: `Product ${index + 1}`,
    description: `This is a high-quality product with great features.`,
    image: item_Image, 
  }));
  