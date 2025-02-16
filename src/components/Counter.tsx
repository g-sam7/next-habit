"use client";

import { useCounterStore } from "@/store/useCounterStore";

const Counter = () => {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div className="p-6 border rounded-lg shadow-md max-w-sm mx-auto text-center">
      <h2 className="text-xl font-bold">Zustand Counter</h2>
      <p className="text-2xl my-4">{count}</p>

      <div className="flex justify-center gap-2">
        <button
          onClick={increase}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          ➕ Increase
        </button>

        <button
          onClick={decrease}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          ➖ Decrease
        </button>
      </div>

      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
      >
        🔄 Reset
      </button>
    </div>
  );
};

export default Counter;
