
import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"

// registerAPI

export const registerAPI=async(user)=>{
    return await commonAPI('POST',`${server_url}/register`,user,"")

}

//loginAPI

export const loginAPI=async(user)=>{
    return await commonAPI('POST',`${server_url}/login`,user,"");
}

//addProductsAPI

export const addProductsAPI = async(products)=>{
    return await commonAPI('POST',`${server_url}/add-products`,products,"");
}

//getProductsAPI

export const getProductsAPI = async(searchKey)=>{
    return await commonAPI('GET',`${server_url}/all-products?search=${searchKey}`,"","")
}

//editProductAPI

export const editProductAPI = async(id,reqBody)=>{
    return await commonAPI('PUT',`${server_url}/all-products/${id}/update`,reqBody,"")
}

//deleteProductAPI

export const deleteProductAPI = async(id)=>{
    return await commonAPI('DELETE',`${server_url}/all-products/${id}/delete`,"","")
}