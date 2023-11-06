import React, { useState, useEffect } from "react";
import Image1 from "../assets/1.png";
import Image2 from "../assets/2.png";
import EllipseImage from "../assets/Ellipse.png";

const Dashboard = () => {
  const dummyData = [
    {
      id: 1,
      date: "2023-10-29 09:00 AM",
      hospitalName: "Hospital A",
      email: "hospitalA@example.com",
      address: "123 Main St",
      phoneNo: "123-456-7890",
      city: "City A",
      state: "State A",
      pincode: "12345",
    },
    {
      id: 2,
      date: "2023-10-29 10:00 AM",
      hospitalName: "Hospital B",
      email: "hospitalB@example.com",
      address: "456 Elm St",
      phoneNo: "987-654-3210",
      city: "City B",
      state: "State B",
      pincode: "54321",
    },
    // Add more data as needed
  ];

  const [data, setData] = useState(dummyData);

  return (
    <>
      <nav className="container flex flex-row w-full h-[100px] bg-blue-900 p-5 text-white space-x-9 relative items-center">
        <div className="flex flex-row space-x-4 absolute left-20">
          <img src={Image1} alt="Image 1" />
          <img src={Image2} alt="Image 2" width="80" height="50" />
        </div>
        <div className="flex flex-row align-middle items-center absolute space-x-4 right-10">
          <img src={EllipseImage} alt="Ellipse Image" />
          <span>Alex Robinson</span>
          <button className="bg-slate-800 rounded-lg space-y-0 space-x-0">
            Log out
          </button>
        </div>
      </nav>
      <section>
        <div className="mt-20 px-20 text-3xl relative flex">
          <span>Hospital Registrations</span>
          <div className="flex absolute right-11 space-x-10 align-middle">
            <div>
              <input
                type="text"
                placeholder="Search"
                className="border-2 shadow-md rounded-md"
              />
            </div>
            <div className="shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-filter"
                viewBox="0 0 16 16"
              >
                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="px-20 p-7">
        <table className="min-w-full">
          <thead>
            <tr className="bg-cyan-400">
              <th className="px-6 py-3 text-left">No</th>
              <th className="px-6 py-3 text-left">Date & Time</th>
              <th className="px-6 py-3 text-left">Hospital Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Address</th>
              <th className="px-6 py-3 text-left">Phone No.</th>
              <th className="px-6 py-3 text-left">City</th>
              <th className="px-6 py-3 text-left">State</th>
              <th className="px-6 py-3 text-left">Pincode</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                className={index % 2 === 0 ? "bg-neutral-100" : "bg-white"}
                key={item.id}
              >
                <td className="px-6 py-3">{item.id}</td>
                <td className="px-6 py-3">{item.date}</td>
                <td className="px-6 py-3">{item.hospitalName}</td>
                <td className="px-6 py-3">{item.email}</td>
                <td className="px-6 py-3">{item.address}</td>
                <td className="px-6 py-3">{item.phoneNo}</td>
                <td className="px-6 py-3">{item.city}</td>
                <td className="px-6 py-3">{item.state}</td>
                <td className="px-6 py-3">{item.pincode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Dashboard;
