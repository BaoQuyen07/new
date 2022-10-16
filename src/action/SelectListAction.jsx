import axios from "axios";

export const getAllSelectList = () => async (dispatch) => {
    try {
        const {data} = await axios.get('https://634923a80b382d796c7e7f52.mockapi.io/api/selectList')
        dispatch({type: 'GET_ALL_SELECT_LIST', payload: data})
    } catch (error) {
    }
}

export const CreateSelectListItem = (item) => async (dispatch) => {
    try {
        const {data} = await axios.post('https://634923a80b382d796c7e7f52.mockapi.io/api/selectList/create', item)
        dispatch({type: 'CREATE_SELECT_LIST_ITEM', payload: data})
    } catch (error) {
    }
}

export const UpdateSelectListItem = (item) => async (dispatch) => {
    try {
        const {data} = await axios.put(`https://634923a80b382d796c7e7f52.mockapi.io/api/selectList/update/${item._id}`, item)
        dispatch({type: 'UPDATE_SELECT_LIST_ITEM', payload: data})
    } catch (error) {
    }
}

export const getSelectListItemById = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`https://634923a80b382d796c7e7f52.mockapi.io/api/selectList/detail/${id}`)
        dispatch({type: 'GET_SELECT_LIST_ITEM_BY_ID', payload: data})
    } catch (error) {
    }
}

export const deleteSelectListItemById = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`https://634923a80b382d796c7e7f52.mockapi.io/api/selectList/delete/${id}`)
        dispatch({type: 'DELETE_SELECT_LIST_ITEM_BY_ID', payload: data})
    } catch (error) {
    }
}