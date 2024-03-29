import React from "react";
import CustomInputActivity from "./CustomInputActivity";
import { Link } from "react-router-dom";

export default function Modal({callb}) {
  //props.ca
  //callb(false);
  return (
    <section className="
    justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-opacity-50	bg-black">   
    <div className="bg-green-400 bg-opacity-15 rounded-lg ">

      <div className="py-2 px-4 mx-auto max-w-2xl lg:py-16">


        <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          Create Activity
        </h2>
       
        <form action="#">
          <div class="grid gap-2 sm:grid-cols-2 sm:gap-2">
            <CustomInputActivity
              type="text"
              placeholder="Name"
              name="uname"
              heading="Name"
            />

            <div class="sm:col-span-2">
              <label
                for="description"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               <b> Description</b>
              </label>
              <textarea
                id="description"
                rows="5"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
                required
              ></textarea>
            </div>
       
            <div>
              <label
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               <b> Activity type</b>
              </label>
              <select
                id="category"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
              >
                <option selected="">Select category</option>
                <option value="TV" required>
                  Run
                </option>
                <option value="PC" required>
                  Walk
                </option>
                <option value="GA" required>
                  Hike
                </option>
                <option value="PH" required>
                  Swim
                </option>
                <option value="PH" required>
                  Cycling
                </option>
              </select>
            </div>

            <CustomInputActivity
              type="number"
              placeholder="Duration"
              name="time_duration"
              heading="Duration"
            />

            <CustomInputActivity
              type="date"
              placeholder="Date"
              name="date"
              heading="Date"
            />
          
          </div>
   
         

          <button
            type="add"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm	border-teal-900
           border-2 w-40 m-4 text-white  bg-teal-900 rounded-3xl font-medium "
          >
            Add Activity
          </button>

        
          <button onClick={()=>callb(false)}
            type="add"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm	border-teal-900
           border-2 w-40 m-4 text-white  bg-teal-900 rounded-3xl font-medium "
          >
           Cancel
          </button>
          
          {/* <button onClick={()=>callb(false)}>Close</button> */}
        </form>
        </div>
      </div>
    </section>

   
  );
}
