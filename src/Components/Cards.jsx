import { Button, Card } from "react-bootstrap";
import Edit from "./Edit";
import { deleteProductAPI } from "../Services/allAPI";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { deleteProductResponceContext, editProductResponceContext } from "../ContextAPI/ContextShare";


function Cards({ products }) {
   const {editProductResponse, setEditProductResponse} = useContext(editProductResponceContext)
   const {deleteProductResponse, setDeleteProductResponse} = useContext(deleteProductResponceContext)

  const isEdit = editProductResponse ? true : false;
  

  const handleDelete = async (pid) => {
      const result = await deleteProductAPI(pid);
      console.log(result);
      if (result.status == 200) {
        toast.success("product deleted")
        
        setDeleteProductResponse(result.data);
      }else{
        toast.error(result.response.data);
        
      }
   
  };


  return (
    <div className="ms-4 mt-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={products?.productImageURL} />
        <Card.Body>
          <Card.Title>{products?.productName}</Card.Title>
          <Card.Text>{products?.productDiscription.slice(0, 60)}....</Card.Text>
          {isEdit ? (
            <Edit products={products} />
          ) : (
            <Button onClick={()=>handleDelete(products?._id)} variant="danger">
              <i
                style={{ color: "red" }}
                className="fa-solid fa-trash fa-lg"
              ></i>
            </Button>
          )}
        </Card.Body>
      </Card>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Cards;
