import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { LoginAPI } from "../../../service/api.service";
import {AuthContextUser} from "../context/auth.context";
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
const Login = () => {
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();
    const {setUser} = React.useContext(AuthContextUser);
    const onFinish = async (values) => {
        try {
            setLoading(true);
            const res = await LoginAPI(values.email, values.password);
            if (res.data && res.data.data) {
                // console.log(res);
                setUser(res.data.data.user);
                localStorage.setItem ('access_token', res.data.data.access_token);
                setLoading(false);
                notification.success({
                    message: "Đăng nhập thành công",
                });
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            notification.error({
                message: "Sai tài khoản hoặc mật khẩu",
            });
        }
    };
    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Please input your username!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" loading={loading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
export default Login;
