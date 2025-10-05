export interface User {
  id: string;
  email: string;
  name: string;
  profileImage?: string;
  status24h?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  id: string;
  name: string;
  profileImage?: string;
  status24h?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}
