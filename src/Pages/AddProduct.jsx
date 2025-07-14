import React, { useContext, useEffect, useState } from "react";
import Cards from "../Components/Cards";
import Menubar from "../Components/Menubar";
import Add from "../Components/Add";
import { getProductsAPI } from "../Services/allAPI";
import { Button, Form, InputGroup } from "react-bootstrap";
import Viewcards from "../Components/Viewcards";
import { editProductResponceContext } from "../ContextAPI/ContextShare";
// import { useContext } from "react";
// import { addProductResponceContext } from "../ContextAPI/ContextShare";

function AddProduct() {
  const { editProductResponse, setEditProductResponse } = useContext(
    editProductResponceContext
  );
  setEditProductResponse(false);

  return (
    <>
      <div className="row">
        <div className="col-4">
          <Menubar />
          <Add />
        </div>

        <div className="col-8">
          <Viewcards />
        </div>
      </div>
    </>
  );
}

export default AddProduct;
