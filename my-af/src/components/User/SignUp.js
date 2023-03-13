import React, { useRef } from "react";
import { Button, notification, Form, Input, Modal } from 'antd';
import { signUp } from '../../services/userService';
import "./css/signUp.css";
import logo from "../../logo.svg";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Copyright } from "../Copyright";

const SignUp = () => {

    const formRef = useRef();

    const [api, contextHolder] = notification.useNotification();

    const navigate = useNavigate();

    const redirectToLoginPage = () => {
        navigate("/login");
    }

    const openNotification = (data) => {
        api.open({
            message: data.status,
            description: data.message ? data.message : data.error
        });
    };

    const submit = (initialValues) => {
        console.log(initialValues);
        signUp(initialValues).then(res => {
            if (res.data) {
                localStorage.setItem("token", res.data.user.accessToken);
                navigate("/start");
            }
            openNotification(res)

        }).catch(err => {
            openNotification(err);
        });
        formRef.current?.resetFields();
    }

    return (
        <Container maxWidth="md"> 
            <Box sx={{ my: 4, minHeight: "80vh"}}>
                {contextHolder}
                <div className="registration">
                    <Modal open={true} span={6} className="modal" closeIcon footer={null} width={"800px"}>
                        <div className="image-container">
                            <div className="image">
                                <img src={logo} className="App-logo" alt="logo" />
                            </div>
                        </div>
                        <div className="form-container">
                            <Form
                                name="basic"
                                ref={formRef}
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                style={{ maxWidth: 600 }}
                                initialValues={{ remember: true }}
                                autoComplete="off"
                                onFinish={submit}
                            >
                                <Form.Item
                                    name="first_name"
                                    rules={[{ required: true, message: 'Please input your first name!' }]}
                                >
                                    <Input placeholder="First name" />
                                </Form.Item>
                                <Form.Item
                                    name="last_name"
                                    rules={[{ required: true, message: 'Please input your last name!' }]}
                                >
                                    <Input placeholder="Last name" />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input placeholder="Email" />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password placeholder="Password" />
                                </Form.Item>
                                <Form.Item>
                                    <Button className="submit-button" type="primary" htmlType="submit">
                                        Sign up
                                    </Button>
                                </Form.Item>
                            </Form>
                            <div className="redirect"><span>Already have an account?</span><span className="redirect-link"
                                onClick={redirectToLoginPage}>Log in</span>
                            </div>
                        </div>
                    </Modal>
                </div>
            </Box>
            <Copyright sx={{marginTop: "auto"}} />
        </Container>
    )
}

export default SignUp;