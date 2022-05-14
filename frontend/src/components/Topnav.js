import React from "react";
import date from "date-and-time";

function Topnav() {
  const now = new Date();
  // console.log("now", now);
  const newdate = date.format(now, "dddd, MMM DD YYYY");
  // const newest = date.parse(newdate, "hh:mm:ss A");
  // console.log("format", newdate);

  return (
    <>
      <div className="navstyle">
        <nav
          className="bg-gray-100 fixed inset-x-0 mt-0 z-10 shadow-md"
          style={{ zIndex: "100" }}
        >
          <div className="max-w-8xl mx-auto px-0">
            <div className="flex justify-between">
              <div className="flex">
                <div>
                  <a
                    href="#"
                    className="flex items-center px-2 text-gray-700 hover:text-gray-900 nav-height"
                  >
                    <img
                      className="h-14 w-12 ml-2 mr-2 text-blue-400"
                      src="https://learn.niituniversity.in/public/images/nu-smallLogo.svg"
                    />
                  </a>
                </div>

                <div className="hidden md:flex items-center space-x-1">
                  <div
                    href="#"
                    className="pt-3 ps-3 text-2xl text-orange-900 hover:text-orange-900"
                    id="date"
                    style={{ fontFamily: "Raleway" }}
                  ></div>
                  <div
                    href="#"
                    className="pt-3 text-2xl text-orange-900 hover:text-orange-900"
                    style={{ fontFamily: "Raleway" }}
                  >
                    {newdate}
                  </div>
                </div>
              </div>
              {/* date and time here */}

              <div className="hidden md:flex items-center space-x-1 pe-3">
                <div className="relative w-12 h-12">
                  <img
                    className="rounded-full border border-gray-100 shadow-sm"
                    src="https://randomuser.me/api/portraits/women/81.jpg"
                    alt="user image"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Topnav;
