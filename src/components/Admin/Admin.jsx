import React from 'react'
import { useSelector } from "react-redux";
import "./Admin.css";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import Sidebar from './components/slidebar/Slidebar'
//import Routes from './components/Routes'
import AdminProduct from './components/AdminProduct/ListProduct'

function Admin(props){
  return (
    <div className={`layout`}>
    <Sidebar />
    <div className="layout__content">
      <div className="layout__content-main">
        {/* <Routes /> */}
        <AdminProduct></AdminProduct>      
      </div>
    </div>
  </div>
  )
}

export default Admin