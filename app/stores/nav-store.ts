import { create } from "zustand";
import { NavStore } from "@/app/libs/definitions";

export const useNavStore = create<NavStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),

  navHeight: 0,
  setNavHeight: (height) => set({ navHeight: height }),
}));
