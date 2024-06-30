import { useNavigation } from '@react-navigation/native';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const GioHang = createAsyncThunk('cart', async data => {
    const response = await fetch(
        'http://192.168.2.8:3000/bill/api/getCart',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        },
    );
    const cart = await response.json();
    if (cart) {
        return cart;
    }
    throw new Error('Failed');
});

//tạo Slice quản lý trạng thái khi gọi hàm DangKyTaiKhoan
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        cartStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(GioHang.pending, (state, action) => {
                state.cartStatus = 'loading';
            })
            .addCase(GioHang.fulfilled, (state, action) => {
                state.cartStatus = 'successed';
                state.products = action.payload;
            })
            .addCase(GioHang.rejected, (state, action) => {
                state.cartStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default cartSlice.reducer;
