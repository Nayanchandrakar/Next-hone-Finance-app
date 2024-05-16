import { create } from "zustand"

interface useNewAccountType {
  isOpen: boolean
  setIsOpen: (data: boolean) => void
}

export const useNewAccount = create<useNewAccountType>((set) => ({
  isOpen: false,
  setIsOpen: (data) => set({ isOpen: data }),
}))
