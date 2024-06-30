import { useNavigation } from '@react-navigation/native';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const ThongTinSanPham = createAsyncThunk('detailProduct', async data => {
    const response = await fetch(
        'http://192.168.2.8:3000/product/api/getById',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        },
    );
    const product = await response.json();
    // console.log(product);
    if (product) {
        return product;
    } 
    throw new Error('Failed');
});

//tạo Slice quản lý trạng thái khi gọi hàm DangKyTaiKhoan
export const detailProductSlice = createSlice({
    name: 'detailProduct',
    initialState: {
        detailProductData: {},
        detailProductStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(ThongTinSanPham.pending, (state, action) => {
                state.detailProductStatus = 'loading';
            })
            .addCase(ThongTinSanPham.fulfilled, (state, action) => {
                state.detailProductStatus = 'successed';
                state.detailProductData = {...action.payload};
            })
            .addCase(ThongTinSanPham.rejected, (state, action) => {
                state.detailProductStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default detailProductSlice.reducer;
