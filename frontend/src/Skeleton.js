import React from 'react'

function skeleton() {
  return (
    <>
    <div>
        <nav className="bg-gray-100 fixed inset-x-0 mt-0 z-10 shadow-md">

<div className="max-w-8xl mx-auto px-0">
  <div className="flex justify-between">

    <div className="flex space-x-4">

     
      <div>
        <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
          <img className="h-10 w-12 mr-1 text-blue-400" src="https://learn.niituniversity.in/public/images/nu-smallLogo.svg"/>
        </a>
      </div>
     

     
      <div className="hidden md:flex items-center space-x-1">
        <a href="#" className="pt-3 px-3 text-2xl text-orange-900 hover:text-orange-900">11th March 2022, Friday
        </a>

      </div>
     

    </div>

    
    <div className="hidden md:flex items-center space-x-1">
      <div className="relative w-12 h-12">
        <img className="pr-1 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
      </div>
    </div>

  </div>
</div>

</nav>
    </div>
    <div>
    <div className="main-app">
<div className="sidebar">
<nav className="main-nav">
  <ul className="main-menu">
    <li className="menu-item active">
      <a href="#" className="menu-a" target="_blank">
        <div className="menu-txt-hld">
          <i className="fas fa-home menu-icon"></i>
          <span className="menu-txt">Home</span>
        </div>
      </a>
    </li>
    <li className="menu-item">
      <a href="#" className="menu-a" target="_blank">
        <div className="menu-txt-hld">
          <i className="fas fa-user-check menu-icon"></i>
          <span className="menu-txt">Recruiter</span>
        </div>
      </a>
    </li>
    <li className="menu-item">
      <a href="#" className="menu-a" target="_blank">
        <div className="menu-txt-hld">
          <i className="fas fa-calendar menu-icon"></i>
          <span className="menu-txt">Calendar</span>
        </div>
      </a>
    </li>
    <li className="menu-item">
      <a href="#" className="menu-a" target="_blank">
        <div className="menu-txt-hld">
          <i className="fas fa-chart-bar menu-icon"></i>
          <span className="menu-txt">Analytics</span>
        </div>
      </a>
    </li>
    <li className="menu-item">
      <a href="#" className="menu-a" target="_blank">
        <div className="menu-txt-hld">
          <i className="fas fa-users menu-icon"></i>
          <span className="menu-txt">Students</span>
        </div>
      </a>
    </li>
  </ul>
</nav>
</div>
</div>
</div>
</>
  )
}

export default skeleton