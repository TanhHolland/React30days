import React, { useState } from "react";
import { Modal } from "antd";
import { Avatar } from "antd";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ModalUpdateAvatar from "./ModalUpdateAvatar/Modal.updateAvatar";
const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});
const ModalSelectAvatar = (props) => {
    const [preview, setPreview] = useState();
    const [selectedFileName, setSelectedFileName] = useState();
    const [avatar,setAvatar] = useState(props.avatar);
    const data_detail = props.data_detail;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onSelectFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFileName(event.target.files[0].name);
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener("load", () => {
                setPreview(reader.result);
            });
        }
    };
    return (
        <>
            <Avatar
                onClick={showModal}
                alt={data_detail.fullName}
                src={avatar}
                size={64}
                style={{ cursor: "pointer" }}
            ></Avatar>
            <Modal
                title="Ảnh đại diện"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={410}
                closeIcon={null}
                footer={null}
            >
                <p>
                    Ảnh đại diện giúp mọi người nhận biết bạn dễ dàng hơn qua
                    các bài viết, bình luận, tin nhắn,...
                </p>
                <Avatar
                    alt={data_detail.fullName}
                    src={avatar}
                    size={200}
                    style={{ margin: "50px auto 50px", display: "block" }}
                ></Avatar>
                <Button
                    component="label"
                    role={undefined}
                    variant="outlined"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "20px 90px",
                    }}
                >
                    Tải ảnh mới lên
                    <VisuallyHiddenInput type="file" onChange={onSelectFile} accept="image/*"/>
                </Button>
                {preview && (
                    <ModalUpdateAvatar
                        key={preview}
                        data_detail={data_detail}
                        preview={preview}
                        handleCancelSelect={handleCancel}
                        selectedFileName={selectedFileName}
                        setAvatar={setAvatar}
                    ></ModalUpdateAvatar>
                )}
            </Modal>
        </>
    );
};
export default ModalSelectAvatar;
