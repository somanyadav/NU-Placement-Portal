//import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Skeleton from "./Skeleton";
import {useRef, useEffect,useState} from 'react';
import PieChart from './PieChart';




//export default function Dashboard() {
  //return <Skeleton />;

   
  const Dashboard = () => {
     
     const[record,setRecord] = useState([])
   
     const getData = () =>
     {
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(resposne=> resposne.json())
         .then(res=>setRecord(res))
     }
   
     useEffect(() => {
        getData();
     },)
      
   
      return (
        <>
        <Skeleton />
        <div className="container" style={{ marginTop: "5.5rem" }}>
        <p class="lead d-none d-sm-block">CIC Dashboard</p>
 
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Students Selected</h6>
                        <h1 class="display-4">134</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">JDs Published</h6>
                        <h1 class="display-4">87</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                          <i class="fa fa-pen fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Offers Accepted</h6>
                        <h1 class="display-4">125</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">PPO</h6>
                        <h1 class="display-4">36</h1>
                    </div>
                </div>
            </div>
        </div>

        <hr/>
        {/* <div class="row placeholders mb-3">
            <div class="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/dddddd/fff?text=1" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Responsive</h4>
                <span class="text-muted">Device agnostic</span>
            </div>
            <div class="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e4e4e4/fff?text=2" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Frontend</h4>
                <span class="text-muted">UI / UX oriented</span>
            </div>
            <div class="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/d6d6d6/fff?text=3" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>HTML5</h4>
                <span class="text-muted">Standards-based</span>
            </div>
            <div class="col-6 col-sm-3 placeholder text-center">
                <img src="//placehold.it/200/e0e0e0/fff?text=4" class="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
                <h4>Framework</h4>
                <span class="text-muted">CSS and JavaScript</span>
            </div>
        </div> */}

        <div class="row ">
            <div class="col-lg-7 col-md-6 col-sm-12">
              <h5 class="mt-3 mb-3 text-secondary">
               Analytics
              </h5> 
              
            </div>
        </div>


        <PieChart/>

                
        

  
        
        </div>
        
      
      </>
      )
  }
   
  export default Dashboard
