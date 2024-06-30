import { useNavigation } from '@react-navigation/native';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const DanhSachSanPhamTheoDanhMuc = createAsyncThunk('productByCategory', async data => {
    const response = await fetch(
        'http://192.168.2.8:3000/product/api/getCategory',
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
export const listProductsByCategorySlice = createSlice({
    name: 'productByCategory',
    initialState: {
        productByCategoryData: [],
        productByCategoryStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(DanhSachSanPhamTheoDanhMuc.pending, (state, action) => {
                state.productByCategoryStatus = 'loading';
            })
            .addCase(DanhSachSanPhamTheoDanhMuc.fulfilled, (state, action) => {
                state.productByCategoryStatus = 'successed';
                state.productByCategoryData = {...action.payload};
            })
            .addCase(DanhSachSanPhamTheoDanhMuc.rejected, (state, action) => {
                state.productByCategoryStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default listProductsByCategorySlice.reducer;
