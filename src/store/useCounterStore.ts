import { create } from "zustand";

// Define the store's shape
interface CounterStore {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

// Create the store using Zustand
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0, // Initial state

  // Function to increase the count
  increase: () => set((state) => ({ count: state.count + 1 })),

  // Function to decrease the count
  decrease: () => set((state) => ({ count: state.count - 1 })),

  // Function to reset the count
  reset: () => set({ count: 0 }),
}));
