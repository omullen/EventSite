import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"
import axios from axios

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`./api/events/${id}`)
    dispatch ({
        type: CART_ADD_ITEM,
        payload: {
            event: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch ({
        type: CART_REMOVE_ITEM,
        payload: id
    })
}