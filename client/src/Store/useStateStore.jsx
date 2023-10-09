import { create } from "zustand";
import { goToScroll } from "../App";

export const useStateStore = create((set) => ({
  menuOpenState: false,
  modalOpenState: false,
  checkModalNumState: 0,
  activeIndexState: 0,
  //////////////////////////////////////////////
  toggleModal: (num) =>
    set((state) => {
      return {
        modalOpenState: !state.modalOpenState,
        checkModalNumState: num,
      };
    }),
  toggleMenu: (name) =>
    set((state) => {
      if (name?.length >= 1) {
        goToScroll(name);
      }
      return {
        menuOpenState: !state.menuOpenState,
      };
    }),
  handleActiveIndex: (idx) =>
    set((state) => {
      return {
        activeIndexState: idx,
      };
    }),
}));
