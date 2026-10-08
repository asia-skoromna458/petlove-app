interface WorkDays {
  _id: string;
  isOpen: boolean;
  from?: string;
  to?: string;
}

export interface Friend {
  _id: string;
  title: string;
  url: string;
  addressUrl: string;
  imageUrl: string;
  address: string;
  workDays: [WorkDays];
  phone: string;
  email: string;
}
