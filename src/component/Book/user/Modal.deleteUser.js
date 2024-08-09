import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { ApiDeleteUser } from "../../../service/api.service";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function ModalDeleteUser(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { fetchData, _id, name } = props;
    const handleDelete = async () => {
        try {
            const response = await ApiDeleteUser(_id);
            console.log("Delete user done", response);
            fetchData();
            handleClose();
        } catch (error) {
            console.error("There was an error delete the user!", error);
        }
    }
    return (
        <div>
            <Button onClick={handleOpen}>
                <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Bạn có muốn xóa user "{name}" ?
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" onClick={handleDelete}>Confirm</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
