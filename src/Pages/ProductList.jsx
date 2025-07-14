import React, { useEffect, useState } from 'react'
import Menubar from '../Components/Menubar'
import { getProductsAPI } from '../Services/allAPI';


function ProductList() {

  const [ products , setProducts ] = useState([]);

  const getAllProducts = async()=>{
    const result = await getProductsAPI(products);
    console.log(result);

    if(result.status==200){
      setProducts(result.data);
    }else{
      console.log(result.response.data); 
    } 
  }

  useEffect(()=>{
    getAllProducts()
  },[])

  return (
    <>

    <div className="row">
      <div className="col-4">
        <Menubar/>
      </div>
      <div className="col-8">
               <div className='m-5 p-5'>
        <table>
          <thead >
            <tr>
              <th style={{color:"blueviolet", backgroundColor:"white" , border:"solid black 5px", }} className='p-3' >Product Id</th>
              <th style={{color:"blueviolet", backgroundColor:"white" , border:"solid black 5px", }} className='p-3' >Product Name</th>
              <th style={{color:"blueviolet", backgroundColor:"white" , border:"solid black 5px", }} className='p-3' >Product Discription</th>
              <th style={{color:"blueviolet", backgroundColor:"white" , border:"solid black 5px", }} className='p-3' >Product image</th>
            </tr>
          </thead>
          {products.length>0?products.map(products=>(
             <tbody>
            <td  style={{color:"white", backgroundColor:"blueviolet" , border:"solid black 5px", }} className='p-2 text-center'>{products.productId}</td>
            <td  style={{color:"white", backgroundColor:"blueviolet" , border:"solid black 5px", }} className='p-2 text-center'>{products.productName}</td>
            <td  style={{color:"white", backgroundColor:"blueviolet" , border:"solid black 5px", }} className='p-2 text-center'>{products.productDiscription}.</td>
            <td  style={{color:"white", backgroundColor:"blueviolet" , border:"solid black 5px", }} className='p-2 text-center'>
              <img width={100} src={products.productImageURL} alt="" />
            </td>
          </tbody>
          )):<p className="text-danger">Not Added products yet</p>}
         
        </table>
       </div>
      </div>
    </div>

    </>
  )
}

export default ProductList
