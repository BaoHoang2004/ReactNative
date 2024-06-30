import { useNavigation } from '@react-navigation/native';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const LaySanPham = createAsyncThunk('products', async data => {
    const response = await fetch(
        'http://192.168.2.8:3000/product/api/getAll',);
    const cate = await response.json();
    if (!response.ok) {
        throw new Error('Failed');
    }
    return cate;

});

//tạo Slice quản lý trạng thái khi gọi hàm DangKyTaiKhoan
export const listProductsSlice = createSlice({
    name: 'listProducts',
    initialState: {
        listProductsData: [],
        listProductsStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(LaySanPham.pending, (state, action) => {
                state.listProductsStatus = 'loading';
            })
            .addCase(LaySanPham.fulfilled, (state, action) => {
                state.listProductsStatus = 'successed';
                state.listProductsData = action.payload;
                
            })
            .addCase(LaySanPham.rejected, (state, action) => {
                state.listProductsStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default listProductsSlice.reducer;
