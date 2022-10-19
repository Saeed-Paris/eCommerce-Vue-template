export type HomeCategoryItems = {
  row: number[];
  col: number[];
  image: string;
};
export type ProductItem = {
  name: string;
  imageURL: string;
  price: number;
};
export type NestedList = {
  id: number;
  name: string;
  children?: NestedList[];
};
