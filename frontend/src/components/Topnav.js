import React from "react";
import {Helmet} from "react-helmet";

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
                <div href="#" className="pt-3 ps-3 text-2xl text-orange-900 hover:text-orange-900" id="date" style={{fontFamily:'Raleway', }}>
                </div>
                <div href="#" className="pt-3 text-2xl text-orange-900 hover:text-orange-900" id="day" style={{fontFamily:'Raleway', }}>
                </div>
                </div>
              </div>


              <Helmet>
                <script>
                var d = new Date();
var date = d.getDate();
var year = d.getFullYear();
var month = d.getMonth();
var monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
month = monthArr[month];
document.getElementById("date").innerHTML = date + " " + month + " "+ year+ ", ";

var myDate = new Date();
var myDay = myDate.getDay();

var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
day = weekday[myDay];
document.getElementById("day").innerHTML = day;

                </script>
                
              </Helmet>

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
