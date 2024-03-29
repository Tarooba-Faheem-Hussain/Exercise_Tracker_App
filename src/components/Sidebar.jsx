//import { Modal } from "flowbite";
import { useState } from "react";
// import { Link } from "react-router-dom";
import Card from "./Cards";
import Modal from "./Modal";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const Menus = [
    { title: "Home", src: "Chart_fill" },
    { title: "Profile", src: "User" },
    { title: "About", src: "Chart_Fill" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        }  bg-teal-800 h-screen p-2  pt-5 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-12 w-7 border-teal-900
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-3 items-center">
          <img
            src="./src/assets/logo-1.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-3 cursor-pointer text-white
               hover:bg-teal-600 bg-green-400 text-xl items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-3"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-screen flex-1 ">
        <div className="grid grid-cols-6 gap-4 bg-green-400">
          <div class="col-start-1 col-end-3 ...">
          <h1 className="text-3xl font-bold  text-white p-3 pt-4 ">
              Dashboard
            </h1>
          </div>
          <div class="col-end-7 col-span-2 ... flex justify-end p-2">
            
            <button
              className="bg-teal-900 text-white px-4 py-2 rounded-md m-2 flex "
              onClick={() => handleRemove(item.id)}
            >
              LogOut
            </button>
          </div>
        </div>
        <div>
          <button
            data-modal-target="defaultModal"
            data-modal-toggle="defaultModal"
            class="grid-rows-3	border-teal-900
              border-2 w-40 m-4 py-2 text-white  bg-teal-900 rounded-3xl transition-colors duration-300 hover:bg-teal-500"
            type="button"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add Activity
          </button>
          {showModal ? (
            <>
              <Modal callb={setShowModal} />
            </>
          ) : null}

          {/* <Link to="/Modal">          
            <button
              className="grid-rows-3	border-teal-900
           border-2 w-40 m-4 py-2 text-white  bg-teal-900 rounded-3xl transition-colors duration-300 hover:bg-teal-500"
            >
              Add Activity
            </button>
          </Link> */}
          {/* <Modals /> */}

          <Card />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
