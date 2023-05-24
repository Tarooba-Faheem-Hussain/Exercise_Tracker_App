import React from "react";

export const CustomCards = ({
  id,
  title,
  description,
  activityType,
  duration,
  date,
  onDelete,
}) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-300 m-6 grid ">
      <div class="px-4 pt-4">
        {/* <div className="bg-white rounded-lg shadow-md p-4"> */}
        <h2 className="card_title font-bold">{title}</h2>
        <p className="card_description">{description}</p>
        <p className="activity_type">{activityType}</p>
        <p className="card_duration">{duration}</p>
        <p className="card_date">{date}</p>
      </div>

      <div class="px-4  flex justify-center pt-6 pb-2">
        
        <button
          type="add"
          className="bg-teal-900 text-white px-4 py-2 rounded-md m-2"
        >
          EDIT
        </button>
        <button
          className="bg-teal-900 text-white px-4 py-2 rounded-md m-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default CustomCards;