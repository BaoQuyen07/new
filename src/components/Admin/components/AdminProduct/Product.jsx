import React from 'react'
import './AdminProduct.css'
import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { productApis } from "../../../../apis/";
import { Link } from 'react-router-dom';
import {
  DeleteProduct,
  paginationProduct,
} from "../../../../action/ProductAction";
function Product(props) {
    const { product, number } = props;
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.allProduct.currentPage);

    //  const handleClickUpdate = (productId) =>{
    //   const updateProduct = { 
    //     image: "11111111111"
    //     };
    // productApis.patch(productId, updateProduct);

    //  } 

    //  const handleClickDelete = (productId) =>{
    //   productApis.delete(productId);
    //   // console.log({productId})
    //   // fetch(`https://634923a80b382d796c7e7f52.mockapi.io/api/product/${productId}`, {
    //   //   method: "DELETE",
    //   // }).then(res => res.json()).then(res => console.log({res}))
    //  }
    const handleDeleteProduct = async (productId) => {
      console.log({productId})
      await dispatch(DeleteProduct(productId));
      dispatch(paginationProduct(currentPage));

    };

    return (
        <tr>
          <td>{number + 1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.type}</td>
          <td>{product.quantity}</td>
          <td>{product.price}</td>
          <td>{product.unit}</td>
          <td>
            <img src={product.image} className="product_img"></img>
          </td>
          <td className="update-product">
            <DeleteOutlined onClick={() => handleDeleteProduct(product.id)}/>
           
          </td>
          <td className="update-product">
            <Link to={`/admin/product/update/${product._id}`}>
              <EditOutlined></EditOutlined>
            </Link>
      </td>
        </tr>
      );
}
        

export default Product