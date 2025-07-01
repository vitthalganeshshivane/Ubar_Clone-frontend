import React from "react";

function WaitingForDriver(props) {
  return (
    <div>
      <h5
        onClick={() => {
          props.WaitingForDriver(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%] "
      >
        <i className=" text-4xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>

      <div className="flex justify-between items-center">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">
            {props.ride?.captain?.fullname?.firstname +
              " " +
              props.ride?.captain?.fullname?.lastname}
          </h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">
            {props.ride?.captain?.vehicle?.plate}
          </h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">
            OTP: {" " + props.ride?.otp}
          </h4>
        </div>
      </div>

      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-1 border-gray-400 ">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Pickup point</h3>
              <p className="text-sm text-gray-600">{props?.ride?.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-1 border-gray-400">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Destination Point</h3>
              <p className="text-sm text-gray-600">
                {props?.ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
              <p className="text-sm text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingForDriver;
