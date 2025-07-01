import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "./LiveTracking";

function Riding() {
  const location = useLocation();
  const { ride } = location.state || {};

  const navigate = useNavigate();

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (!socket) return;

    socket.on("ride-ended", () => {
      // console.log("ride is ended");
      navigate("/home");
    });
  }, [socket]);

  return (
    <div className="h-screen">
      <Link
        to="/home"
        className="fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <LiveTracking />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex justify-between items-center">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">
              {ride?.captain?.fullname?.firstname +
                " " +
                ride?.captain?.fullname?.lastname}
            </h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">
              {ride?.captain?.vehicle?.plate}
            </h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="flex gap-2 flex-col justify-between items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-1 border-gray-400">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">Pickup point</h3>
                <p className="text-sm text-gray-600">{ride?.pickup}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-1 border-gray-400">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">Destination Point</h3>
                <p className="text-sm text-gray-600">{ride?.destination}</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="text-lg ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
                <p className="text-sm text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
          Make a payment
        </button>
      </div>
    </div>
  );
}

export default Riding;
