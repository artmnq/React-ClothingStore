export type Item = {
  id: string;
  title: string;
  price: number;
  image: string;
  sizes: string[];
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ItemsSliceState {
  items: Item[];
  status: Status;
}
