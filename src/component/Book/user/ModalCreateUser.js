import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";
import { ApiCreateUser} from "../../../service/api.service";
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

export default function ModalCreateUser(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const {fetchData} = props;
    const handleRegister = () => {
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
    };
    const handleClick = async () => {
        try {
            const response = await ApiCreateUser(name, email, password, phone);
            console.log("Create new user", response);
            fetchData();
            handleRegister();
            setOpen(false);
        } catch (error) {
            console.error("There was an error creating the user!", error);
        }
    };
    return (
        <div>
            <Button onClick={handleOpen}>Create User ver 2</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
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
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Phone"
                        variant="outlined"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        style={{ margin: "20px" }}
                    >
                        Create
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
