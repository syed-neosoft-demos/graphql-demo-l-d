export type Create = {
  title: String;
  description: String;
  price: Number;
  discountPercentage: Number;
  rating: Number;
  stock: Number;
  brand: String;
  category: String;
  thumbnail: String;
  images: String;
};

export type Update = Omit<Create, "brand" | "category">;

export type Delete = {
  productId: String;
};
