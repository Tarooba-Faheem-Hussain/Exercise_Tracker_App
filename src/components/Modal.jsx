import React from "react";

import { Link } from "react-router-dom";

export default function Modal() {
  return (
    <section class="bg-green-400 dark:bg-gray-900 w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4 ... ">
  <div class="py-2 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">Create Activity</h2>
      <form action="#">
          <div class="grid gap-2 sm:grid-cols-2 sm:gap-4">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                  <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name" required />
              </div>
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here" required></textarea>
              </div>
              
              <div>
                  <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Activity type</label>
                  <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required>
                      <option selected="" >Select category</option>
                      <option value="TV"required >Run</option>
                      <option value="PC" required>Walk</option>
                      <option value="GA" required >Hike</option>
                      <option value="PH" required>Swim</option>
                      <option value="PH" required>Cycling</option>
                  </select>
              </div>
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duration</label>
                  <input  type="number" name="time_duration" id="time_duration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="duration" required />
              </div>
              <div>
                  <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                  <input 
                   name="date"
                                 type="date"
                                 autocomplete="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required />
              </div> 
     
          </div>
          <button type="add" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm	border-teal-900
           border-2 w-40 m-4 text-white  bg-teal-900 rounded-3xl font-medium ">
              Add Activity
          </button>
      </form>
  </div>
</section>


    // <form>
        

    //   <div className="space-y-12">
    //     {/* <div class="border-b border-gray-900/10 pb-12">
    //       <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //         <div class="col-span-full">
    //         <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Photo</label>
    //         <div class="mt-2 flex items-center gap-x-3">
    //           <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    //             <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
    //           </svg>
    //           <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
    //         </div>
    //       </div>
    //       </div>
    //     </div> */}

    //     <div className="border-b border-gray-900/10 pb-12">
    //       <h2 className="text-base font-italicbold leading-7 text-gray-900 ">
    //         Create Activity
    //       </h2>
    //       {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

    //       <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //         <div className="sm:col-span-3">
    //           <label
    //             for="first-name"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Name
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               type="text"
    //               name="Name"
    //               id="name"
    //               autocomplete="given-name"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>
    //         <div className="col-span-full">
    //           <label
    //             for="Descripion"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Descripion
    //           </label>
    //           <div className="mt-2">
    //             <textarea
    //               id="Descripion"
    //               name="Descripion"
    //               rows="3"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             ></textarea>
    //           </div>
    //         </div>

    //         <div className="sm:col-span-3">
    //           <label
    //             for="Activty_type"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Activty type
    //           </label>
    //           <div className="mt-2">
    //             <select
    //               id="activty_type"
    //               name="activty_type"
    //               autocomplete="activty_type"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    //             >
    //               <option>Run</option>
    //               <option>Hike</option>
    //               <option>Swim</option>
    //               <option>Walk</option>
    //               <option>Cycling</option>
    //             </select>
    //           </div>
    //         </div>

    //         <div className="sm:col-span-4">
    //           <label
    //             for="email"
    //             className="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Duration
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="duration"
    //               name="duration"
    //               type="duration"
    //               autocomplete="duration"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

    //         <div className="sm:col-span-4">
    //           <label
    //             for="email"
    //             class="block text-sm font-medium leading-6 text-gray-900"
    //           >
    //             Date
    //           </label>
    //           <div className="mt-2">
    //             <input
    //               id="date"
    //               name="date"
    //               type="date"
    //               autocomplete="date"
    //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>

         
    //       </div>
    //     </div>
    //   </div>

    //   <div class="mt-6 flex items-center justify-end gap-x-6">
    //     <button
    //       type="button"
    //       class="text-sm font-semibold leading-6 text-gray-900"
    //     >
    //       Cancel
    //     </button>
    //     <button
    //       type="submit"
    //       class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //     >
    //       Save
    //     </button>
    //   </div>
     
    // </form>
  );
}
