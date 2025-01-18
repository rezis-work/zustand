import { create } from "zustand";
import { Store } from "../types/store";
import { immer } from "zustand/middleware/immer";
import { createUserSlice } from "./user-slice";
import { createCartSlice } from "./cart-slice";
import { devtools } from "zustand/middleware";

export const useStore = create<Store>()(
  devtools(
    immer((...a) => ({
      ...createUserSlice(...a),
      ...createCartSlice(...a),
    }))
  )
);
