import React, { useState, useContext, createContext } from 'react'
// tạo context
export const AppContext = createContext()
// tạo dữ liệu dùng chung cho app
export const AppProvider = (props) => {
    const { children } = props;
    const [isLogin, setIsLogin] = useState(false);
    const [product, setproduct] = useState([]);
    const [user, setUser] = useState({});

    return (
        <AppContext.Provider value={{ isLogin, setIsLogin, product, setproduct, user, setUser }}>
            {props.children}
        </AppContext.Provider>
    )
}
