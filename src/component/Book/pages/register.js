import React from "react";
import { Button, Form, Input, notification, Space } from "antd";
import { ApiCreateUser } from "../../../service/api.service";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const Register = () => {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        try {
            const res = await ApiCreateUser(values.name,values.email,values.password,values.phone);
            console.log(res);
            if (res.data) {
                notification.success({
                    message: "Đăng ký user thành công"
                });
            }
        } catch (error) {
            console.error("There was an error creating the user!", error);
            notification.error({
                message: error
            });
            form.setFieldsValue({
                email : ""
            })
        }
    };
    const onReset = () => {
        form.resetFields();
    };
    return (
        <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
        >
            <Form.Item
                name="name"
                label="Name"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng điền thông tin!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    { required: true, message: "Vui lòng điền thông tin!" },
                    { type: "email", message: "Vui lòng điền đúng định dạng!" },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng điền thông tin!",
                    },
                    {
                        pattern: `^(?=.*[A-Z])(?=.*\\d).{6,}$`,
                        message: "Vui lòng điền đúng định dạng! Độ dài ít nhất 6 kí tự, ít nhất 1 chữ cái in hoa, ít nhất 1 số",
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng điền thông tin!",
                    }
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Space>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    );
};
export default Register;
