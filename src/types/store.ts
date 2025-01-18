import { CartSlice } from "./cartTypes";
import { UserSlice } from "./userTypes";

export type Store = UserSlice & CartSlice;
