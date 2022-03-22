import React from "react";

function Topnav() {
  return (
    <>
      <div className="navstyle">
        <nav className="bg-gray-100 fixed inset-x-0 mt-0 z-10 shadow-md">
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
                  <span className="pt-2 px-4 text-3xl text-orange-900">
                    11th March 2022, Friday
                  </span>
                </div>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <div className="relative w-12 h-12">
                  <img
                    className="pr-1 rounded-full border border-gray-100 shadow-sm"
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
