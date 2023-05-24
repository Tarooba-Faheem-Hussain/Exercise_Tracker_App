import React from "react";
import CustomCards from "./CustomCards";

export default function Cards(description) {
  const handleDelete = (id) => {
    const updatedActivities = activities.filter((activity) => activity.id !== id);
    setActivities(updatedActivities);
  };

  return (
    
      <div class="grid gap-2 sm:grid-cols-2 sm:gap-2">
        <CustomCards
          title="Morning Run"
          description="Ran 5 miles in the park"
          activityType="Run"
          duration="30 minutes"
          date="2023-01-12"
        />

        <CustomCards
          title="Cycling Adventure"
          description="Explored scenic routes for 20 miles"
          activityType="Bicycle Ride"
          duration="1 hour"
          date="2023-02-11"
        />

        <CustomCards
          title=" Run"
          description="Ran 2 hr in the park"
          activityType="Runing"
          duration="30 minutes"
          date="2023-05-1"
        />

        <CustomCards
          title="Cycling Adventure"
          description="Explored scenic routes for 20 miles"
          activityType="Bicycle Ride"
          duration="1 hour"
          date="2022-05-13"
        />
    
      {/* <div class="font-bold text-xl mb-2">Name</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <div class="font-bold text-xl mb-2">Activity type</div>
        <div class="font-bold text-xl mb-2">Duration</div>
        <div class="font-bold text-xl mb-2">Date</div> */}
    </div>
  );
}
