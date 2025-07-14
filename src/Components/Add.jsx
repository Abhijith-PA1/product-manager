import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { addProductsAPI } from "../Services/allAPI";
import { useContext } from "react";
import { addProductResponceContext } from "../ContextAPI/ContextShare";

function Add({ onProductAdded }) {
  const [show, setShow] = useState(false);
  const{addProductResponse,setProductResponse}=useContext(addProductResponceContext)

  const handleClose = () => {
    setShow(false);
    setProductData({
      productId: "",
      productName: "",
      productImageURL: "",
      productDiscription: "",
    });
  };
  const handleShow = () => setShow(true);

  const [productData, setProductData] = useState({
    productId: "",
    productName: "",
    productImageURL: "",
    productDiscription: "",
  });

  const handelAdd = async() => {
    console.log(productData);

    const { productId, productName, productImageURL, productDiscription } =
      productData;

    if (!productId || !productName || !productImageURL || !productDiscription) {
      toast.info("fill the missing fields");
    } else {
      try {
        //procead to api call
        const result = await addProductsAPI(productData);
        console.log(result);

        if (result.status == 200) {
          toast.success("product added successfully"); 
          
          // //
          // // Pass the new product to the parent component
          // onProductAdded(result.data);  // Trigger the update in parent
        setProductResponse(result.data)
          setProductData({
            productId: "",
            productName: "",
            productImageURL: "",
            productDiscription: "",
          });
          handleClose()

          // setProductResponse(result.data)
        } else {
          toast.warning(result.response.data);
        }
      } catch (err) {
        toast.error(err);
      }
    }
  };

  return (
    <>
      <div className="m-4">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Add Product</Card.Title>
            <Button variant="primary" onClick={handleShow}>
              Add Product{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>

      {/* model */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Product Id"
            onChange={(e) =>
              setProductData({ ...productData, productId: e.target.value })
            }
          />
          <Form.Control
            size="lg"
            type="text"
            placeholder="Product Name"
            onChange={(e) =>
              setProductData({ ...productData, productName: e.target.value })
            }
          />
          <Form.Control
            size="lg"
            type="text"
            placeholder="Product Image Url"
            onChange={(e) =>
              setProductData({
                ...productData,
                productImageURL: e.target.value,
              })
            }
          />
          <Form.Control
            as="textarea"
            placeholder="Prodict Discription"
            style={{ height: "100px" }}
            onChange={(e) =>
              setProductData({
                ...productData,
                productDiscription: e.target.value,
              })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handelAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default Add;
