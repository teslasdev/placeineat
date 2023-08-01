import React from "react";

const Loader = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-4 h-4 rounded-full border-4 border-t-gray-500 border-l-gray-500 border-r-gray-600 animate-spin" />
    </div>
  );
};

export default Loader;