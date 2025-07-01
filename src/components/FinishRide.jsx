import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FinishRide(props) {
  console.log("props.logs:", props.rideData);
  const navigate = useNavigate();
  async function endRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/rides/end-ride`,
      {
        rideId: props.rideData._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      // props.setFinishRidePanel(false);
      // props.setRidePopupPanel(false);
      navigate("/captain-home");
    }
  }

  return (
    <div>
      <h5
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%] "
      >
        <i className=" text-4xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Finish this Ride</h3>
      <div className="flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-13 w-13 rounded-full object-cover"
            src="https://i.pinimg.com/736x/57/03/40/570340b2be424aae63033abda009be54.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">
            {props.rideData?.user?.fullname?.firstname +
              " " +
              props.rideData?.user?.fullname?.lastname}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 Km</h5>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-1 border-gray-400 ">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Pickup point</h3>
              <p className="text-sm text-gray-600">{props?.rideData?.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1 border-gray-400">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Destination Point</h3>
              <p className="text-sm text-gray-600">
                {props?.rideData?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.rideData?.fare}</h3>
              <p className="text-sm text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full">
          <button
            onClick={endRide}
            className="w-full mt-5 text-lg flex items-center justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </button>
          <p className="text-xs mt-10">
            Click on finish ride button if you have completed the payment
          </p>
        </div>
      </div>
    </div>
  );
}

export default FinishRide;
