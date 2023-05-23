// import {
//     Card,
//     CardBody,
//     CardFooter,
//     Typography,
//     Button
//   } from "@material-tailwind/react";
   
//   export default function Example() {
//     return (
//       <Card className="mt-6 w-96">
//         <CardBody>
//           <Typography variant="h5" color="blue-gray" className="mb-2">
//             UI/UX Review Check
//           </Typography>
//           <Typography>
//             The place is close to Barceloneta Beach and bus stop just 2 min by walk
//             and near to &quot;Naviglio&quot; where you can enjoy the main night life
//             in Barcelona.
//           </Typography>
//         </CardBody>
//         <CardFooter className="pt-0">
//           <Button>Read More</Button>
//         </CardFooter>
//       </Card>
//     );
//   }

import React from 'react'

export default function Cards() {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-300 m-6">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Name</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
    <button
            className="grid-rows-3	border-teal-900
           border-2 w-40 m-4 py-2 text-white  bg-teal-900 rounded-3xl transition-colors duration-300 hover:bg-teal-500"
          >
            See More..
          </button>
  </div>
  </div>
  
  )
}
