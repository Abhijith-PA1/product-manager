import React, { useContext, useEffect, useState } from 'react'
import { getProductsAPI } from '../Services/allAPI';
import Cards from './Cards';
import { addProductResponceContext, deleteProductResponceContext } from '../ContextAPI/ContextShare';
import { editProductResponceContext } from '../ContextAPI/ContextShare';

function Viewcards() {

     const [products, setProducts] = useState([]);
      const [ searchKey , setSearchKey ]= useState("");  

            const {editProductResponse, setEditProductResponse} = useContext(editProductResponceContext)

              const{addProductResponse,setProductResponse}=useContext(addProductResponceContext)

                 const {deleteProductResponse, setDeleteProductResponse} = useContext(deleteProductResponceContext)
              
            

            
            
    
    
    
        // const{addProductResponse,setProductResponse}=useContext(addProductResponceContext)
    
      console.log(searchKey);
      
    
      const getAllProducts = async () => {
        const result = await getProductsAPI(searchKey);
    
        if (result.status == 200) {
          setProducts(result.data);
        } else {
          console.log(result.response.data);
        }
      };
      // console.log(products);
    
      useEffect(() => {
        getAllProducts();
      }, [searchKey,addProductResponse,editProductResponse,deleteProductResponse]);
    
    
    
      console.log(products);
    
    
  return (
    <>

    <div className="m-5 d-flex">
            <input type="text"   placeholder="search movies ..." className="form-control w-75" onChange={(e=>setSearchKey(e.target.value))}/>
            <a href="" className="btn btn-info"><i className=" fa-solid fa-magnifying-glass fa-xl"></i></a>
          </div>

          <div className=" d-flex flex-wrap">
            {products.length > 0
              ? products.map((products) => <Cards products={products} />)
              : <p className="text-danger">Not Added products yet</p>}
          </div>

      
    </>
  )
}

export default Viewcards
