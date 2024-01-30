export type Signup = {
  userName: string;
  email: string;
  fullName: String;
  password: string;
};

export type Login = {
  email: string;
  password: string;
};

export type Context = {
  userId: string;
  email: string;
  iat: Number;
  exp: Number;
};
