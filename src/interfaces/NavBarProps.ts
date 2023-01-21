import { SetStateAction, Dispatch } from "react";
export default interface NavBarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
