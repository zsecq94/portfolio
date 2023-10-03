import { atom } from "recoil";

const menuOpenState = atom({
  key: "menuOpenState",
  default: false,
});

const modalOpenState = atom({
  key: "modalOpenState",
  default: false,
});

const checkModalNumState = atom({
  key: "checkModalNumState",
  default: 0,
});

const activeIndexState = atom({
  key: "activeIndexState",
  default: 0,
});

export { menuOpenState, modalOpenState, checkModalNumState, activeIndexState };
