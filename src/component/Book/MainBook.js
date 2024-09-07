import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";
import React from "react";
import { ApiGetUser } from "../../service/api.service";
import { AuthContextUser } from "./context/auth.context";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

const Loading = () => (
    <Flex align="center" gap="middle">
        <Spin
            indicator={
                <LoadingOutlined
                    style={{
                        fontSize: 48,
                    }}
                    spin
                />
            }
            fullscreen="true"
        />
    </Flex>
);
const MainBook = () => {
    const { setUser, isLoading, setIsLoading } =
        React.useContext(AuthContextUser);
    const delay = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    };
    const fetchUser = async () => {
        if (!localStorage.getItem("access_token")) {
            setIsLoading(false);
            return;
        }
        try {
            setIsLoading(true);
            const res = await ApiGetUser();
            await delay();
            if (res.data && res.data.data) {
                setUser(res.data.data.user);
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        fetchUser();
    }, []);
    return (
        <>
            {isLoading ? (
                <Loading></Loading>
            ) : (
                <>
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </>
            )}
        </>
    );
};
export default MainBook;
