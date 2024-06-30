import { useNavigation } from '@react-navigation/native';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const TimKiem = createAsyncThunk('search', async data => {
    const response = await fetch(
        'http://192.168.2.8:3000/product/api/getByName',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        },
    );
    const products = await response.json();
    if (products) {
        return products;
    }
    throw new Error('Failed');
});

//tạo Slice quản lý trạng thái khi gọi hàm DangKyTaiKhoan
export const cartSlice = createSlice({
    name: 'search',
    initialState: {
        searchData: [],
        searchStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(TimKiem.pending, (state, action) => {
                state.searchStatus = 'loading';
            })
            .addCase(TimKiem.fulfilled, (state, action) => {
                state.searchStatus = 'successed';
                state.searchData = action.payload;
            })
            .addCase(TimKiem.rejected, (state, action) => {
                state.searchStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default cartSlice.reducer;
