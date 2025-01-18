import { StateCreator } from "zustand";
import { UserSlice } from "../types/userTypes";
import { Store } from "../types/store";

export const createUserSlice: StateCreator<
  Store,
  [["zustand/immer", never]],
  [],
  UserSlice
> = (set) => ({
  address: "",
  age: 0,
  fullname: "",
  userName: "",
  setAddress: (address) =>
    set((state) => {
      state.address = address;
    }),
});
