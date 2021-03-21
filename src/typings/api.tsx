export interface User {
  username: string;
  _id: string;
}

export interface UserListResponse {
  code: number;
  data: Array<User>
}

export interface UserAddResponse {
  code: number;
  data: User
}
