import React from "react";
import { createTrip } from '../../../services/tripService';
import { useParams } from 'react-router-dom';
import {
    Button, Form, Input, DatePicker,
    InputNumber
} from 'antd';

const MainInfo = ({ visible, setVisible }) => {
    const { id } = useParams();

    const submit = (initialValues) => {
        createTrip(initialValues, id).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
        setVisible(false);
    }

    return (
        <Form
            open={visible}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: false }}
            autoComplete="off"
            onFinish={submit}
            maskClosable={true}
        >
            <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input name' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="start_date"
                label="Start date"
                rules={[{ required: true, message: 'Please input start date' }]}
            >
                <DatePicker />
            </Form.Item>

            <Form.Item
                name="duration"
                label="duration"
                rules={[{ required: true, message: 'Please input duration' }]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item>
                <Button className="submit-button" type="primary" htmlType="submit">
                    Add trip
                </Button>
            </Form.Item>
        </Form>
    )
}
export default MainInfo;