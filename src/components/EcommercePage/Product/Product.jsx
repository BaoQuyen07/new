import React from 'react'
import './Product.css'
import Test from "./test.json"
import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";
import { productApis } from "../../../apis/";
function Product(props) {
     const { product, number } = props;
     const listProducts = Test;


     const handleClickUpdate = (productId) =>{
      const updateProduct = { 
        image: "11111111111"
        };
    productApis.patch(productId, updateProduct);

     } 
     const handleClickDelete = (productId) =>{
      productApis.delete(productId);
      // console.log({productId})
      // fetch(`https://634923a80b382d796c7e7f52.mockapi.io/api/product/${productId}`, {
      //   method: "DELETE",
      // }).then(res => res.json()).then(res => console.log({res}))
     }


    return (
        <tr>
          <td>{number + 1}</td>
          <td>{product.name}</td>
          <td>{product.type}</td>
          <td>{product.quantity}</td>
          <td>{product.price}</td>
          <td>{product.unit}</td>
          <td>
            <img src={product.image} className="product_img"></img>
          </td>
          <td className="update-product">
            <DeleteOutlined onClick={() => handleClickDelete(product.id)}/>
            <EditOutlined onClick={() => handleClickUpdate(product.id)}/>
          </td>
        </tr>
      );
}
        

export default Product