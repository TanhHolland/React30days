import { useState } from "react";
import * as React from "react";
import { ApiGetListUserPage } from "../../../service/api.service";
import Pagination from "@mui/material/Pagination";
import UserTable from "../user/UserTable";
import CreateUser from "../user/CreateUser";
import ModalCreateUser from "../user/ModalCreateUser";
export default function UserPage() {
    const [rows, setRows] = useState([]);
    const [pageCurrent, setPageCurrent] = useState(1);
    const [numberPages, setNumberPages] = useState();
    const handleChangePage = (event, value) => {
        setPageCurrent(value);
    };
    const fetchData = React.useCallback(async () => {
        try {
            const response = await ApiGetListUserPage(pageCurrent, 4);
            setRows(response.data.data.result);
            setNumberPages(response.data.data.meta.pages);
        } catch (error) {
            console.log("not list users", error);
        }
    }, [pageCurrent]);
    React.useEffect(() => {
        fetchData();
    }, [pageCurrent, fetchData]);
    return (
        <>
            <CreateUser fetchData={fetchData}></CreateUser>
            <ModalCreateUser fetchData={fetchData}></ModalCreateUser>
            <UserTable rows={rows} fetchData={fetchData}></UserTable>
            <Pagination
                count={numberPages}
                shape="rounded"
                sx={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "flex-end",
                }}
                onChange={handleChangePage}
                page={pageCurrent}
            />
        </>
    );
}
