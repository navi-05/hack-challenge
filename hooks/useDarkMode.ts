import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface useDarkModeStore {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const useDarkMode = create<useDarkModeStore, [["zustand/persist", unknown]]>(
  persist(
    (set) => ({
      isDarkMode: false,
      setDarkMode: (value) => set({ isDarkMode: value}),
    }), 
    {
      name: 'dark-mode-storage',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) =>  Object.fromEntries(
        Object.entries(state).filter(([key]) => !['dark-mode'].includes(key))
      ),
    }
  )
)

export default useDarkMode