export interface Notice {
  _id: string;
  species: string;
  category: string;
  price: number;
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: string;
  location: string;
  imgURL: string;
  createdAt: string;
  user: string;
  popularity: number;
  updatedAt: string;
}
export interface GetAllNoticesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Notice[];
}
export interface NoticeParams {
  page: number;
  limit: number;
  category?: string;
  species?: string;
  sex?: string;
  keyword?: string;
  locationId?: string;
}
