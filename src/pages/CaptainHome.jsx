import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContex";
import axios from "axios";
import LiveTracking from "../components/LiveTracking";

function CaptainHome() {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(false);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const [ride, setRide] = useState(null);

  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopUpPanelRef = useRef(null);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    if (!socket || !captain?._id) return;

    // const handleNewRide = (data) => {
    //   console.log("🚕 Received new ride on captain socket: ", data);
    // };

    // socket.on("new-ride", handleNewRide);

    socket.on("new-ride", (data) => {
      console.log("🚕 Received new ride on captain socket: ", data);
      setRide(data);
      setRidePopUpPanel(true);
    });

    console.log("📡 Connected as captain:", captain._id);
    socket.emit("join", {
      userId: captain._id,
      userType: "captain",
    });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log({
            ltd: position.coords.latitude,
            lng: position.coords.longitude,
          });
          socket.emit("update-location-captains", {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };

    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();

    console.log(locationInterval);

    return () => {
      // clearInterval(locationInterval);
      // socket.off("new-ride", handleNewRide);
    };
  }, [socket, captain?._id]);

  // useEffect(() => {
  //   if (!socket || !captain?._id) return;

  //   console.log("📡 Connected as captain:", captain._id);
  //   // socket.on("ride-request", (data) => {});
  //   socket.emit("join", {
  //     userId: captain._id,
  //     userType: "captain",
  //   });

  //   const updateLocation = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         console.log({
  //           userId: captain._id,
  //           location: {
  //             ltd: position.coords.latitude,
  //             lng: position.coords.longitude,
  //           },
  //         });
  //         console.log("📱 Sending GPS:", position.coords);
  //         socket.emit("update-location-captains", {
  //           userId: captain._id,
  //           location: {
  //             ltd: position.coords.latitude,
  //             lng: position.coords.longitude,
  //           },
  //         });
  //       });
  //     }
  //   };

  //   const locationInterval = setInterval(updateLocation, 10000);
  //   updateLocation();

  //   return () => {
  //     clearInterval(locationInterval);
  //   };

  //   // return () => clearInterval(locationInterval);
  // }, [socket, captain?._id]);

  // socket.on("new-ride", (data) => {
  //   console.log("data from the socket: ", data);
  //   console.log(data);
  // });

  async function confirmRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/rides/confirm`,
      {
        rideId: ride._id,
        captainId: captain._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  useGSAP(
    function () {
      if (ridePopUpPanel) {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopUpPanel) {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUpPanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-4 top-0 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://thumbs.dreamstime.com/b/vroom-pop-art-comic-speech-bubbles-book-sound-effects-vector-illustration-258767749.jpg"
          alt=""
        />
        {/* create the captain logout route and add here  */}
        <Link
          to="/captain-login"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        {/* <img
          className="w-full h-full object-cover"
          src="https://t3.ftcdn.net/jpg/07/28/30/26/360_F_728302620_Xddnf5Cl0K1ACZurd6yByUzHiHMMIoe6.jpg"
          alt=""
        /> */}

        <LiveTracking />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopUpPanelRef}
        className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-12"
      >
        <RidePopUp
          ride={ride}
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          confirmRide={confirmRide}
        />
      </div>
      <div
        ref={confirmRidePopUpPanelRef}
        className="fixed w-full h-screen z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-12"
      >
        <ConfirmRidePopUp
          ride={ride}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setRidePopUpPanel={setRidePopUpPanel}
        />
      </div>
    </div>
  );
}

export default CaptainHome;
