export interface I_Product {
  ratingsAverage: number;
  ratingsNumber: number;
  colors?: Array<string>;
  sizes?: Array<string>;
  imgUrl: string;
  name: string;
  category: string;
  slug: string;
  price: number;
  discountedPrice?: number;
  shortDescription: string;
  brand?: string;
  model?: string;
  description: string;
  quantityLeft: number;
}

export interface I_FormMessage {
  type: "success" | "error" | "";
  content: string;
}

export interface I_Review {
  reviewerName: string;
  reviewTitle: string;
  rating: number;
  reviewContent: string;
  date: number;
}
