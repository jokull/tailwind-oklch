import React from "react";

export function App() {
  return (
    <div className="flex flex-col gap-12 justify-center items-center min-h-screen">
      <div className="max-w-md sm:max-w-lg grid grid-cols-5 gap-4 text-center font-black">
        <div className="p-3 sm:p-6 rounded bg-primary-50">50</div>
        <div className="p-3 sm:p-6 rounded bg-primary-100">100</div>
        <div className="p-3 sm:p-6 rounded text-white bg-primary-200">200</div>
        <div className="p-3 sm:p-6 rounded text-white bg-primary-300">300</div>
        <div className="p-3 sm:p-6 rounded text-white bg-primary-400">400</div>
        <div className="p-3 sm:p-6 rounded text-white bg-primary-500">500</div>
        <div className="p-3 sm:p-6 rounded text-white bg-primary-600">600</div>
        <div className="p-3 sm:p-6 rounded text-white bg-primary-700">700</div>
        <div className="p-3 sm:p-6 rounded text-white bg-primary-800">800</div>
        <div className="p-3 sm:p-6 rounded text-white bg-primary-900">900</div>
      </div>
    </div>
  );
}
