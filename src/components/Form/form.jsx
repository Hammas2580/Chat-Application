import React, { useState } from 'react';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

const FormComponents = () => {
    const [formState, setFormState] = useState("Sign Up");

    const handleForm = () => {

        formState == "Sign Up" ? setFormState("Sign In") : setFormState("Sign Up")

    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-2xl shadow-xl p-5 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>

                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    layout="vertical"
                >
                    {formState == "Sign Up" &&
                        <Form.Item
                            name="username1"
                            label={<span className="text-sm font-medium text-gray-700">First Name</span>}
                            rules={[{ required: true, message: 'Please input your First Name!' }]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon text-gray-400" />}
                                placeholder="Enter your  First name"
                                className="py-1"
                            />
                        </Form.Item>
                    }
                    {formState == "Sign Up" &&
                        <Form.Item
                            name="username2"
                            label={<span className="text-sm font-medium text-gray-700">Last Name</span>}
                            rules={[{ required: true, message: 'Please input your Last Name!' }]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon text-gray-400" />}
                                placeholder="Enter your Second name"
                                className="py-2"
                            />
                        </Form.Item>
                    }
                    <Form.Item
                        name="email"
                        label={<span className="text-sm font-medium text-gray-700">Email</span>}
                        rules={[{ required: true, message: 'Please input your Email' }]}
                    >
                        <Input
                            prefix={<MailOutlined className="site-form-item-icon text-gray-400" />}
                            placeholder="Enter your Email"
                            className="py-2"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label={<span className="text-sm font-medium text-gray-700">Password</span>}
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon text-gray-400" />}
                            placeholder="Enter your password"
                            className="py-2"
                        />
                    </Form.Item>
                    {
                        formState == "Sign Up" &&
                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The new password that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder='Please Enter Your Confirm Password' />
                        </Form.Item>
                    }
                    <Form.Item className="mb-3">
                        <Button block type="primary" htmlType="submit" className="bg-blue-600 hover:bg-blue-700">
                            Sign Up
                        </Button>
                    </Form.Item>

                    <div className="text-center text-sm text-gray-600">
                        Don't have an account? <span onClick={handleForm} className="text-blue-600 hover:underline cursor-pointer">
                            {
                                formState == "Sign Up" ? "Sign In" : "Sign Up"
                            }
                        </span>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default FormComponents;
