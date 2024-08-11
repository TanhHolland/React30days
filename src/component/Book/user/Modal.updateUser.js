import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";
import { ApiPutUpdateUser } from "../../../service/api.service";
import EditRoadOutlinedIcon from "@mui/icons-material/EditRoadOutlined";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
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

export default function ModalUpdateUser(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);
    const {avatar} = useState(props.avatar);
    const { fetchData } = props;
    const handleClick = async () => {
        try {
            const response = await ApiPutUpdateUser(
                props._id,
                name,
                email,
                phone
            );
            console.log("Update User Done", response);
            fetchData();
            handleClose();
        } catch (error) {
            console.error("There was an error update the user!", error);
        }
    };
    return (
        <div>
            <Button onClick={handleOpen}>
                <EditRoadOutlinedIcon></EditRoadOutlinedIcon>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            p: 1,
                            m: 1,
                            gap: 2,
                            bgcolor: "background.paper",
                            borderRadius: 1,
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            ID : {props._id}
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Phone"
                            variant="outlined"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <Avatar alt={name} sx={{ width: 50, height: 50 }} src={`http://localhost:8080/images/avatar/${avatar}`}></Avatar>
                        <Button
                            variant="contained"
                            onClick={handleClick}
                            style={{ margin: "20px" }}
                        >
                            Save
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
