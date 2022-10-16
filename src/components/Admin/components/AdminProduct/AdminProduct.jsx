import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.css";
import { AppstoreAddOutlined, ToolOutlined } from "@ant-design/icons";

function AdminProduct(props) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.allProduct.product);

  return (
    <div className="admin-product">
      <div className="admin-product-link">
        <Link to="/admin/product/create" className="add-product">
          <AppstoreAddOutlined />
        </Link>
        <Link to="/admin/product/update/info" className="add-product">
          <ToolOutlined></ToolOutlined>
        </Link>
      </div>

      {products ? (
        <ListProduct listProducts={products}></ListProduct>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default AdminProduct;
