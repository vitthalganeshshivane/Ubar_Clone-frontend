import React from "react";

function vehiclePanel(props) {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%] "
      >
        <i className=" text-4xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
          props.selectVehicle("car");
        }}
        className="flex w-full p-3 border-2 mb-2 border-transparent active:border-black bg-gray-100 rounded-xl items-center justify-between"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill">4</i>
              <h5 className="font-medium text-sm">2 mins away </h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable compact rides
              </p>
            </span>
          </h4>
        </div>
        <h2 className="text-lg font-semibold">₹{Math.round(props.fare.car)}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
          props.selectVehicle("moto");
        }}
        className="flex w-full p-3 border-2 mb-2 border-transparent active:border-black bg-gray-100 rounded-xl items-center justify-between"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill">1</i>
              <h5 className="font-medium text-sm">3 mins away </h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable motorcycle rides
              </p>
            </span>
          </h4>
        </div>
        <h2 className="text-lg font-semibold">
          ₹{Math.round(props.fare.moto)}
        </h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
          props.selectVehicle("auto");
        }}
        className="flex w-full p-3 border-2 mb-2 border-transparent active:border-black bg-gray-100 rounded-xl items-center justify-between"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UbarAuto{" "}
            <span>
              <i className="ri-user-3-fill">3</i>
              <h5 className="font-medium text-sm">3 mins away </h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable Auto rides
              </p>
            </span>
          </h4>
        </div>
        <h2 className="text-lg font-semibold">
          ₹{Math.round(props.fare.auto)}
        </h2>
      </div>
    </div>
  );
}

export default vehiclePanel;
