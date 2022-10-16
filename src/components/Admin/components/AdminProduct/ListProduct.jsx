import React, { useState } from 'react'
import Product from './Product';
import './AdminProduct.css'
import { editCurrentPage, paginationProduct } from '../../../../action/ProductAction';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';


function ListProducts(props) {    
    //     const [products, setProducts] = useState();
    //     useEffect(() => {
    //     fetch('https://634923a80b382d796c7e7f52.mockapi.io/api/product')
    //         .then((res) => res.json())
    //         .then((json) => setProducts(json));
    // }, []);
    const dispatch = useDispatch()
    const {listProducts} = props;
    const currentPage = useSelector(state => state.allProduct.currentPage)
    const {pages} = useSelector(state => state.allProduct.product)
    const HandleChangePage = async (number) => {
        await dispatch(paginationProduct(number))
        dispatch(editCurrentPage(number))
    }
    return (
    <div>
        <div className='main'>
            <div className='wrapper'>
                <div className='products_tasks'>
                    <a className='products_tasks_link'><i className="fa-solid fa-plus products_tasks_icon"></i></a>
                    <a className='products_tasks_link'><i className="fa-solid fa-arrow-down-to-line"></i></a>
                </div>
                <div className='products_list'>
                <table>
                    <tr>
                        <th className='table_header'>STT</th>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Loại hàng</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>ĐVT</th>
                        <th>Ảnh</th>
                        <th>Thao tác</th>
                    </tr>
                    {
                        listProducts ? listProducts.map((item, index) => (<Product product={item} key={item.id} update={item.id} number={index}></Product>)) : ''
                    }  
                </table>
                <div className="pagination">
                <Pagination defaultCurrent={1} current={currentPage} total={pages*10} onChange={HandleChangePage}/>
                </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ListProducts