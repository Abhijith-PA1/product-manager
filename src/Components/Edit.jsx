import React, { useContext, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { editProductAPI } from "../Services/allAPI";
import { editProductResponceContext } from "../ContextAPI/ContextShare";

function Edit({products}) {

  const {editProductResponse, setEditProductResponse} = useContext(editProductResponceContext)


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editProduct, setEditProducts] = useState({
    id:products?._id,
    productId: products?.productId,
    productName: products?.productName,
    productImageURL: products?.productImageURL,
    productDiscription: products?.productDiscription,
  });
  // console.log(editProduct);
  // console.log(products);


  const handleUpdate=async()=>{
    const {id,productId,productName,productImageURL,productDiscription}=editProduct;

    if(!productId || !productName || !productImageURL || !productDiscription){
      toast('please fill the missing fields')
    }else{
      // procied to Api call
      try{
        const result = await editProductAPI(id,editProduct);
        console.log(result);
        if(result.status==200){
          console.log(result.data);
          
          toast.success("update successfully")
           setEditProductResponse(result.data)
          handleClose()
        }else{
           toast.err(result.response.data)
        }
      }catch(err){
        console.log(err);
      }
    }
  }
  
  


  return (
    <>
      <div className="">
        <Button variant="secondary" onClick={handleShow}>
          Edit Product{" "}
        </Button>
      </div>

      {/* model */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control size="lg" type="text" placeholder="Product Id" onChange={(e)=>setEditProducts({...editProduct,productId:e.target.value})} value={editProduct?.productId}/>
          <Form.Control size="lg" type="text" placeholder="Product Name" onChange={(e)=>setEditProducts({...editProduct,productName:e.target.value})} value={editProduct?.productName} />
          <Form.Control size="lg" type="text" placeholder="Product Url" onChange={(e)=>setEditProducts({...editProduct,productImageURL:e.target.value})} value={editProduct?.productImageURL} />
          <Form.Control
            as="textarea"
            placeholder="Prodict Discription"
            style={{ height: "100px" }}
            onChange={(e)=>setEditProducts({...editProduct,productDiscription:e.target.value})}
            value={editProduct?.productDiscription}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleUpdate}>Edit</Button>
        </Modal.Footer>
      </Modal>
            <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default Edit;
