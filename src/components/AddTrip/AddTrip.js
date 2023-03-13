import React, { useEffect, useState, useRef } from "react";
import { Modal } from 'antd';
import { createTrip } from "../../services/tripService";
import "./css/AddTrip.css";
import MainInfo from "./steps/MainInfo";
import MultiStepFormFooter from "./MultistepFormFooter";

const AddTrip = ({ visible, setVisible, id }) => {

    const formRef = useRef();

    const [steps, setSteps] = useState([<MainInfo visible={visible} setVisible={setVisible} />])

    const closeModal = () => {
        setVisible(false);
    }

    const [page, setPage] = useState(0);

    const getPageData = () => {
        switch (page) {
            case 0:
                return steps[0];
            default:
                return steps[0];
        }
    };


    return (
        <div className="add-trip">
            <Modal open={visible} span={6} className="add-trip-modal" footer={null} width={"500px"} onOk={closeModal} onCancel={closeModal}>
                <div className="modal-content">
                    {getPageData()}
                </div>
                <MultiStepFormFooter steps={steps} page={page} setPage={setPage} />
            </Modal>
        </div>
    )
}

export default AddTrip;