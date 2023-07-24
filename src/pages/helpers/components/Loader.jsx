import React from "react";

const Loader = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-8 h-8 rounded-full border-4 border-t-green-500 border-l-green-500 border-r-green-600 animate-spin" />
    </div>
  );
};

export default Loader;