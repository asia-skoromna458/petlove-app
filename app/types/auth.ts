export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponce {
  email: string;
  name: string;
  token: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}
