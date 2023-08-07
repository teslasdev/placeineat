import React from "react";

const Loader = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-4 h-4 rounded-full border-4 border-t-white-500 border-l-gray-300 border-r-gray-300 animate-spin" />
    </div>
  );
};

export default Loader;