import React from "react";
import { Button, Form, Input, Modal, notification } from "antd";
import logo from "../../logo.svg";
import { logIn, GOOGLE_OAUTH_URL } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { Copyright } from "../Copyright";
import { Box, Container } from "@mui/material";
import GoogleButton from "./GoogleButton";


const LogIn = () => {

    const [api, contextHolder] = notification.useNotification();

    const navigate = useNavigate();

    const openNotification = (data) => {
        api.open({
            message: data.status,
            description: data.message ? data.message : data.error
        });
    };

    const submit = (initialValues) => {
        console.log(initialValues);
        logIn(initialValues).then(res => {
            if (res.data) {
                localStorage.setItem("token", res.data.user.accessToken);
                navigate("/start");
            }
            openNotification(res)
        }).catch(err => {
            openNotification(err);
        });
    }

    return (
        <Container>
            <Box sx={{ height: "90vh" }}>
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
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                style={{ maxWidth: 600 }}
                                initialValues={{ remember: true }}
                                autoComplete="off"
                                onFinish={submit}
                            >
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
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                            <GoogleButton />
                        </div>
                    </Modal>
                </div>
            </Box>

            <Copyright sx={{ marginTop: "auto" }} />
        </Container>
    )
}

export default LogIn;