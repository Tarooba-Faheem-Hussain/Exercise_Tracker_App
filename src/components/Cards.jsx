import React from 'react';

export default function Cards() {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-300 m-6">
    <div class="px-4 py-4">
      <div class="font-bold text-xl mb-2">Name</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
      <div class="font-bold text-xl mb-2">Activity type</div>
      <div  class="font-bold text-xl mb-2">Duration</div>
      <div class="font-bold text-xl mb-2">Date</div>
    </div>
    <div class="px-6 pt-2 pb-2">
    <button
            type="add"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm	border-teal-900
           border-2 w-30 m-4 text-white  bg-teal-900 rounded-3xl font-medium "
          >
           EDIT
          </button>
          <button
            type="add"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm	border-teal-900
           border-2 w-20 m-4 text-white  bg-teal-900 rounded-3xl font-medium "
          >
            DELET
          </button>
  </div>
  </div>
  
  )
}
