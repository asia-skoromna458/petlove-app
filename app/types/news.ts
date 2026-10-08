export interface News {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

export interface GetAllNewsResponce {
  page: number;
  perPage: number;
  totalPages: number;
  results: News[];
}
