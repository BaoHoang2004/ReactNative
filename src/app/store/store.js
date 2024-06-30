import { configureStore } from '@reduxjs/toolkit';
import changeUserReducer from '../reducers/ChangUserSlice';
import categoriesReducer from '../reducers/CategoriesSlice'
import listProductsReducer from '../reducers/ListProductSlice';
import detailProductReducer from '../reducers/DetailProductSlice';
import listProductsByCategoryReducer from '../reducers/ListProductsByCategorySlice';
import cartReducer from '../reducers/CartSlice'
import searchReducer from '../reducers/SearchSlice';




export const store = configureStore({
    reducer: {
        changeUser: changeUserReducer,
        categories: categoriesReducer,
        listProducts: listProductsReducer,
        detailProduct: detailProductReducer,
        productByCategory: listProductsByCategoryReducer,
        cart: cartReducer,
        search: searchReducer,
    },
});
