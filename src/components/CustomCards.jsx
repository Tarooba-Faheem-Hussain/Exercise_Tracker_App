import React, { useState } from "react";
import Modal from "./Modal";
// import { userSelector } from "react-redux";

export const CustomCards = ({
  id,
  title,
  description,
  activityType,
  duration,
  date,
  onDelete,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleDelete = () => {
//onDelete(id);
console.log(id)
  }

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
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            class="bg-teal-900 text-white px-4 py-2 rounded-md m-2"
            type="button"
            onClick={() => {
              setShowModal(true);
            }}
          >
          EDIT
        </button>
        {showModal ? (
            <>
              <Modal callb={setShowModal} />
            </>
          ) : null}


        <button
          className="bg-teal-900 text-white px-4 py-2 rounded-md m-2"
          onClick={() => handleRemove(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default CustomCards;
