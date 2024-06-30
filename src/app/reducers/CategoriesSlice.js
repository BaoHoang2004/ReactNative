import { useNavigation } from '@react-navigation/native';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const DanhSachDanhMuc = createAsyncThunk('categories', async data => {
    const response = await fetch(
        'http://192.168.2.8:3000/category/api/getAll');
    const cate = await response.json();
    if (!response.ok) {
        throw new Error('Failed');
    }
    return cate;

});

//tạo Slice quản lý trạng thái khi gọi hàm DangKyTaiKhoan
export const categoriesSlice = createSlice({
    name: 'changeUser',
    initialState: {
        cateData: [],
        cateStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(DanhSachDanhMuc.pending, (state, action) => {
                state.cateStatus = 'loading';
            })
            .addCase(DanhSachDanhMuc.fulfilled, (state, action) => {
                state.cateStatus = 'successed';
                // state.changeUserData = action.payload;
                state.cateData = action.payload;
            })
            .addCase(DanhSachDanhMuc.rejected, (state, action) => {
                state.cateStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default categoriesSlice.reducer;
