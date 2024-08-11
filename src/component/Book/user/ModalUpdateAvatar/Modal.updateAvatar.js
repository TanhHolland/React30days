import React, { useState } from "react";
import { Modal, notification } from "antd";
import Cropper from "react-easy-crop";
import { Slider } from "@mui/material";
import "./updateAvatar.css";
import { getCroppedImg } from "./cropImage";
import {
    ApiUploadAvatar,
    ApiUpdateAvatarUser,
} from "../../../../service/api.service";
import { dataURLtoFile } from "./dataURLtoFile";
const ModalUpdateAvatar = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [croppedArea, setCroppedArea] = React.useState(null);
    const [crop, setCrop] = React.useState({ x: 0, y: 0 });
    const [zoom, setZoom] = React.useState(1);
    const { data_detail, preview, handleCancelSelect, selectedFileName,setAvatar } =
        props;
    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleOk = async () => {
        const res = await getCroppedImg(preview, croppedArea);
        const file = dataURLtoFile(res, selectedFileName);
        const resUpload = await ApiUploadAvatar(file, "avatar");
        if (resUpload.data && resUpload.data.data) {
            await ApiUpdateAvatarUser(
                data_detail._id,
                data_detail.fullName,
                data_detail.phone,
                resUpload.data.data.fileUploaded
            );
            notification.success({
                message: "Thay avatar thành công",
                description: JSON.stringify(resUpload.data.message),
            });
            setAvatar(res);
        } else {
            notification.error({
                message: "Lỗi cập nhật avatar, vui lòng thử lại",
                description: JSON.stringify(resUpload.data.message),
            });
        }
        handleCancel();
        handleCancelSelect();
    };
    return (
        <div>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closeIcon={null}
                okText="Save"
            >
                <div className="container">
                    <div className="container-cropper">
                        {preview ? (
                            <>
                                <div className="cropper">
                                    <Cropper
                                        image={preview}
                                        crop={crop}
                                        cropSize={{ width: 200, height: 200 }}
                                        cropShape="round"
                                        zoom={zoom}
                                        aspect={1}
                                        onCropChange={setCrop}
                                        onZoomChange={setZoom}
                                        onCropComplete={onCropComplete}
                                    />
                                </div>
                                <div className="slider">
                                    <Slider
                                        min={1}
                                        max={4}
                                        step={0.1}
                                        value={zoom}
                                        onChange={(e, zoom) => setZoom(zoom)}
                                    />
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default ModalUpdateAvatar;
