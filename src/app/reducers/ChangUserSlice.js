import { useNavigation } from '@react-navigation/native';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//tạo hàm DangKyTaiKhoan để thực hiện chức năng gọi API đăng ký tài khoản
export const ThayDoiThongTin = createAsyncThunk('changeUser', async data => {
    const response = await fetch(
        'http://192.168.2.8:3000/users/api/changeUser',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        },
    );
    const user = await response.json();
    if (response.ok) {
        return user;
    } 
    throw new Error('Failed');
});

//tạo Slice quản lý trạng thái khi gọi hàm DangKyTaiKhoan
export const changeUserSlice = createSlice({
    name: 'changeUser',
    initialState: {
        changeUserData: {},
        changeUserStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(ThayDoiThongTin.pending, (state, action) => {
                state.changeUserStatus = 'loading';
            })
            .addCase(ThayDoiThongTin.fulfilled, (state, action) => {
                state.changeUserStatus = 'successed';
                // state.changeUserData = action.payload;
                state.changeUserData = action.payload;
            })
            .addCase(ThayDoiThongTin.rejected, (state, action) => {
                state.changeUserStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default changeUserSlice.reducer;
