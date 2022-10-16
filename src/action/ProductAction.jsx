import React from 'react'
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {BASE_URL} from '../constants/UserConstant'
import axiosClient from "axios";
import actions from './product.action'


export const editCurrentPage = (page) => async (dispatch) => {
    dispatch({ type: "EDIT_CURRENT_PAGE", payload: page });
    
  };
  
export const paginationProduct = (page) => async (dispatch) => {
    try {
      const data = await axiosClient.get(
        `/products/pagination/${page}`
      );
      dispatch({ type: "PAGINATION_PRODUCT", payload: data });
    } catch (error) {
    }
  };

export const filterProductByType = (name) => async (dispatch) => {
    try {
      const { data } = await axiosClient.get(`${BASE_URL}/products/${name}`);
      dispatch({ type: "FILTER_PRODUCT_BY_TYPE", payload: data });
    } catch (error) {
    }
  };

  export const getAllProduct = () => async (dispatch) => {
    try {
      const { data } = await axiosClient.get(`${BASE_URL}/products/`);
      dispatch({ type: "GET_ALL_PRODUCT", payload: data });
    } catch (error) {
      dispatch({ type: "GET_ALL_PRODUCT_FAIL", payload: error.message });
    }
  };
  
  export const ascendingProduct = (products) => async (dispatch, getState) => {
    dispatch({ type: "ASCENDING_PRODUCT"});
  };
  
  export const descendingProduct = (products) => async (dispatch, getState) => {
    dispatch({ type: "DESCENDING_PRODUCT"});
  };
  
  export const filterProduct = (name) => async (dispatch, getState) => {
    dispatch({ type: "FILTER_PRODUCT", payload: name });
  };

  export const filterProductByPrice =
  (startPrice, endPrice) => async (dispatch, getState) => {
    dispatch({
      type: actions.FILTER_PRODUCT_BY_PRICE,
      payload: { startPrice, endPrice },
    });
  };

  export const removeProductById = (id) => async (dispatch) => {
    dispatch({ type: "REMOVE_PRODUCT_BY_ID"});
  };

  export const DeleteProduct = (productId) => async (dispatch, getState) => {
    const { data } = await 
    axiosClient.delete(
        `https://634923a80b382d796c7e7f52.mockapi.io/api/products/${productId}`,
        {
            headers: {
                "x-access-token": "token-value",
            },
        }
      );
    //   dispatch({ type: "DELETE_PRODUCT", payload: data });
   
  };