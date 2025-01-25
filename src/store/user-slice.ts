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
  fetchUser: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      address: "",
      fullname: "John Doe",
      userName: "johndoe",
      age: 25,
    });
  },
});
