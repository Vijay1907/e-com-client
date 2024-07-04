import React from 'react';

const Category = ({ name }) => {
  return (
    <div className="bg-white rounded-lg p-8 m-4 flex-1 min-w-[200px] max-w-[300px] shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-700 hover:text-white">
      {name}
    </div>
  );
};

export default Category;
