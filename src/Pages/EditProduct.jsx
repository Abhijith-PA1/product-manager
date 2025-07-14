import React, { useContext, useEffect, useState } from "react";
import Cards from "../Components/Cards";
import Menubar from "../Components/Menubar";
import { getProductsAPI } from "../Services/allAPI";
import Viewcards from "../Components/Viewcards";
import { editProductResponceContext } from "../ContextAPI/ContextShare";

function EditProduct() {
  const { editProductResponse, setEditProductResponse } = useContext(
    editProductResponceContext
  );
  setEditProductResponse(true);

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <Menubar />
        </div>
        <div className="col-8 ">
          <Viewcards />
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
