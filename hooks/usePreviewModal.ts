import { create } from "zustand";

import { FuelStationType } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  station: FuelStationType ;
  setStation: (item: FuelStationType) => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  // @ts-ignore
  station: {},
  setStation: (item) => set({ station: item}),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}))

export default usePreviewModal