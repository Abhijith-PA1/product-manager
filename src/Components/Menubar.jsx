import React from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'


function Menubar() {
  return (
    <>
      <div className="border m-3 p-3 " style={{ width: "300px", }}>
        <h5 className="text-center text-light">MENU<i class="fa-solid fa-list fa"></i></h5>
       
        <Link to={'/productlist'}  className="btn-warning form-control m-2 text-decoration-none">Product List</Link>
        <Link to={'/addproduct'} className="btn-info form-control m-2 text-decoration-none">Add Products</Link>
        <Link to={'/editproduct'} className="btn-primary form-control m-2 text-decoration-none">Edit Products</Link>
        

      </div>
    </>
  );
}

export default Menubar;
