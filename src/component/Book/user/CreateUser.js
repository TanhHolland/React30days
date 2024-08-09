import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { ApiCreateUser } from "../../../service/api.service";
const CreateUser = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const {fetchData} = props;
    const handleClick = async () => {
        try {
            const response = await ApiCreateUser(name, email, password, phone);
            console.log("Create new user",response);
            fetchData();
        } catch (error) {
            console.error("There was an error creating the user!", error);
        }
    };
    return (
        <>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
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
            </Box>
            <Button
                variant="contained"
                onClick={handleClick}
                style={{ margin: "20px" }}
            >
                Create
            </Button>
        </>
    );
};
export default CreateUser;
