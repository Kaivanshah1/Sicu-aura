import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "../assets/back.png";
import first from "../assets/1.png";
import second from "../assets/2.png";
import photo from "../assets/photo.png";

function Capture() {
  const [capture, setCapture] = useState(false);

  const handleCapture = () => {
    setCapture(true);
  };

  return (
    <>
      <div className="flex flex-row min-h-screen relative ">
        <div className="w-2/5 relative">
          <div className="flex justify-center ">
            <img src={first} className="absolute h-[210px] top-[170px]" />
            <img src={second} className="absolute h-[80px] top-[350px]" />
          </div>
          <div className="flex justify-center space-y-10">
            <p className="absolute font-semibold text-white text-3xl top-[470px]">
              Feel <span className="text-green-500 font-semibold">Safe</span>{" "}
              Everywhere
            </p>
            <p className="absolute mx-auto text-white text-2xl top-[500px]">
              #Safe-<span className="text-green-500">T</span>-Fast
            </p>
          </div>
          <img src={background} className="h-full" />
        </div>
        <div className="w-3/4 flex flex-col items-center justify-center border-2">
          {capture ? (
            <>
              <div className="flex justify-center items-center rounded-md mx-auto bg-stone-300 gap-3 w-[400px] h-[400px] mt-0">
                <img
                  src={photo}
                  alt="Captured Photo"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-5 space-x-4">
                <Link to={"/capture"}>
                  <button className="bg-neutral-400 text-gray-700 p-2 rounded-md">
                    Re-take
                  </button>
                </Link>
                <Link to={"/dashboard"}>
                  <button className="bg-black text-white p-2 rounded-md">
                    Continue
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center items-center rounded-md mx-auto bg-stone-300 gap-3 w-[400px] h-[400px] mt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <path
                    d="M13.3333 13.3334H23.3333L30 6.66675H50L56.6667 13.3334H66.6667C68.4348 13.3334 70.1305 14.0358 71.3807 15.286C72.631 16.5363 73.3334 18.232 73.3334 20.0001V60.0001C73.3334 61.7682 72.631 63.4639 71.3807 64.7141C70.1305 65.9644 68.4348 66.6667 66.6667 66.6667H13.3333C11.5652 66.6667 9.86954 65.9644 8.61929 64.7141C7.36905 63.4639 6.66667 61.7682 6.66667 60.0001V20.0001C6.66667 18.232 7.36905 16.5363 8.61929 15.286C9.86954 14.0358 11.5652 13.3334 13.3333 13.3334ZM40 23.3334C35.5797 23.3334 31.3405 25.0894 28.2149 28.215C25.0893 31.3406 23.3333 35.5798 23.3333 40.0001C23.3333 44.4204 25.0893 48.6596 28.2149 51.7852C31.3405 54.9108 35.5797 56.6667 40 56.6667C44.4203 56.6667 48.6595 54.9108 51.7851 51.7852C54.9107 48.6596 56.6667 44.4204 56.6667 40.0001C56.6667 35.5798 54.9107 31.3406 51.7851 28.215C48.6595 25.0894 44.4203 23.3334 40 23.3334ZM40 30.0001C42.6522 30.0001 45.1957 31.0536 47.0711 32.929C48.9464 34.8044 50 37.3479 50 40.0001C50 42.6522 48.9464 45.1958 47.0711 47.0711C45.1957 48.9465 42.6522 50.0001 40 50.0001C37.3478 50.0001 34.8043 48.9465 32.9289 47.0711C31.0536 45.1958 30 42.6522 30 40.0001C30 37.3479 31.0536 34.8044 32.9289 32.929C34.8043 31.0536 37.3478 30.0001 40 30.0001Z"
                    fill="#808080"
                  />
                </svg>
              </div>

              <div className="mt-5 flex items-center justify-center">
                <button
                  className="bg-black text-white p-2 rounded-md"
                  onClick={handleCapture}
                >
                  Capture
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Capture;
