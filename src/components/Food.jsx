import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
  const [foods, setFoods] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const handleClick = (food) => {
    setSelectedFood(food);
    setShowModal(!showModal);
  };

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'
            >
              Salads
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <button
                onClick={() => handleClick(item)}
                className='bg-orange-500 text-white hover:bg-white hover:text-orange-500 p-1 rounded-full font-bold px-2'
              >
                Recipe
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedFood && (
       <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto flex justify-center items-center backdrop-blur-sm">
       <div className="md:w-2/3 mt-24 w-4/5 bg-white p-2 rounded-lg shadow-lg">
         <div className="flex justify-center mt-4">
           <img src={selectedFood.image} alt={selectedFood.name} className="rounded-full object-cover w-3/12" />
         </div>
         <div className="py-6 m-2">
           <h2 className="text-center">{selectedFood.name}</h2>
           <h2>Instructions:</h2>
           <p className="text-center text-sm px-2 mt-2">
             {selectedFood.instructions}
           </p>
           <div className="flex justify-end mt-4">
           <a href ={selectedFood.video} className="shadow-lg p-2 rounded-md text-md m-2 hover:bg-neutral-300" rel="noopener noreferrer" target="_blank">Watch Video</a>
             <button
               onClick={() => setShowModal(false)}
               className="hover:bg-neutral-300 shadow-lg p-2 rounded-md text-md m-2"
             >
               Close
             </button>
           </div>
         </div>
       </div>
     </div>
     
      
      )}
    </div>
  );
};

export default Food;
