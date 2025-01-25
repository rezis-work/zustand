export type UserState = {
  userName: string;
  fullname: string;
  age: number;
  address: string;
};

export type UserActions = {
  setAddress: (address: string) => void;
  fetchUser: () => Promise<void>;
};

export type UserSlice = UserState & UserActions;
