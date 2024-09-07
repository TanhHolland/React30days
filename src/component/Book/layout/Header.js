import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { AuthContextUser } from "../context/auth.context";
import { UserOutlined } from "@ant-design/icons";
import { ApiLogout } from "../../../service/api.service";
import {notification} from "antd";
const Header = () => {
    const { user,setUser } = React.useContext(AuthContextUser);
    const handleLogout = async() => {
        const res = await ApiLogout();
        if (res.data && res.data.data) {
            setUser(undefined);
            localStorage.removeItem("access_token");
            notification.success({
                message: "Đăng xuất thành công",
            });
        }
    }
    const menuSetting = [
        {
            key: "login",
            label: <Link to="/login">Login</Link>,
        },
        {
            key: "register",
            label: <Link to="/register">Register</Link>,
        },
    ];
    const menuUser = [
        {
            key: "userInfor",
            label: (
                <>
                    <UserOutlined />
                    <Link to="/user/infor">{user && user.fullName}</Link>
                </>
            ),
        },
        {
            key: "logout",
            label: <Link to="/login" onClick={handleLogout}>Logout</Link>,
        },
    ];
    return (
        <>
            <Breadcrumb
                items={[
                    {
                        title: <Link to="/">Home</Link>,
                    },
                    {
                        title: <Link to="/user">User</Link>,
                    },
                    {
                        title: <Link to="/book">Book</Link>,
                    },
                    {
                        title: "Setting",
                        menu: {
                            items: user ? menuUser : menuSetting,
                        },
                    },
                ]}
            />
        </>
    );
};
export default Header;
