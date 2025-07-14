import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const addProductResponceContext = createContext();
export const editProductResponceContext = createContext();
export const deleteProductResponceContext = createContext();

function ContextShare({ children }) {
  const [addProductResponse, setProductResponse] = useState("");
  const [editProductResponse, setEditProductResponse] = useState("");
  const [deleteProductResponse, setDeleteProductResponse] = useState("");
  return (
    <div>
      <deleteProductResponceContext.Provider value={{deleteProductResponse, setDeleteProductResponse}}>
        <editProductResponceContext.Provider
          value={{ editProductResponse, setEditProductResponse }}
        >
          <addProductResponceContext.Provider
            value={{ addProductResponse, setProductResponse }}
          >
            {children}
          </addProductResponceContext.Provider>
        </editProductResponceContext.Provider>
      </deleteProductResponceContext.Provider>
    </div>
  );
}

export default ContextShare;
