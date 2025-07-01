import React, { useContext } from "react";

import { CaptainDataContext } from "../context/CaptainContex";

function CaptainDetails() {
  const { captain } = useContext(CaptainDataContext);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 justify-start">
          <img
            className="h-15 w-15 rounded-full object-cover"
            src="https://i.pinimg.com/736x/57/03/40/570340b2be424aae63033abda009be54.jpg"
            alt=""
          />
          <h4 className="text-lg font-medium capitalize">
            {captain.fullname.firstname + " " + captain.fullname.lastname}
          </h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹295.20</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-4 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start">
        <div className="text-center">
          <i className=" text-3xl mb-2 font-thin ri-timer-line"></i>
          <h5 className="text-lg font-medium">10.2 </h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className=" text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2 </h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className=" text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2 </h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainDetails;
