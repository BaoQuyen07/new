import React from 'react'
import { Link } from 'react-router-dom'
import "./Slidebar.css"
const Slidebar = () => {
  return (
    <div>
        <div className='category'>
            <ul className='category_list'>
                <li className='category_list_item '>
                    <a className='category_item__link category_item_active'>THỐNG KÊ</a>
                </li>
                <li className='category_list_item'>
                    <Link to = "/admin/ListProduct" className='category_item__link'>SẢN PHẨM</Link>  
                </li>
                <li className='category_list_item'>
                    <Link to = "/admin/ListCategory" className='category_item__link'>DANH MỤC HÀNG</Link>  
                </li>
                <li className='category_list_item'>
                    <Link to = "/admin/ListOrder" className='category_item__link'>ĐƠN HÀNG</Link>  
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Slidebar