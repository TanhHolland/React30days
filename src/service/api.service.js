import axios from "./axios.custom";
const ApiCreateUser = (name, email, password, phone) => {
    return axios({
        method: "post",
        url: "/api/v1/user",
        data: {
            fullName: name,
            email: email,
            password: password,
            phone: phone,
        },
    });
};
const ApiGetListUser = () => {
    return axios({
        method: "get",
        url: "api/v1/user",
    });
};
const ApiGetListUserPage = (pageCurrent,pageSize) => {
    return axios({
        method: "get",
        url: "api/v1/user",
        params : {
            current : pageCurrent,
            pageSize : pageSize
        }
    });
};
const ApiPutUpdateUser = (_id, name, email, phone) => {
    return axios({
        method: "put",
        url: "/api/v1/user",
        data: {
            _id: _id,
            fullName: name,
            email: email,
            phone: phone,
        },
    });
};
const ApiDeleteUser = (_id) => {
    return axios({
        method: "delete",
        url: `/api/v1/user/${_id}`,
    });
};
const ApiUploadAvatar = (file, folder) => {
    let bodyFormData = new FormData();
    bodyFormData.append("fileImg", file);
    return axios({
        method: "post",
        url: "/api/v1/file/upload",
        data: bodyFormData,
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data",
        },
    });
};
const ApiUpdateAvatarUser = (_id, name, phone, nameFileAvatar) => {
    return axios({
        method: "put",
        url: "/api/v1/user",
        data: {
            _id: _id,
            fullName: name,
            phone: phone,
            avatar: nameFileAvatar,
        },
    });
};
const LoginAPI = (username,password) => {
    return axios({
        method: "post",
        url: "api/v1/auth/login",
        data: {
            username: username,
            password : password
        },
    });
}
const ApiGetUser = () => {
    return axios({
        method: "get",
        url: "/api/v1/auth/account",
    });
};
const ApiLogout = () => {
    return axios({
        method: "post",
        url: "/api/v1/auth/logout",
    });
};
export {
    ApiCreateUser,
    ApiGetListUser,
    ApiGetListUserPage,
    ApiPutUpdateUser,
    ApiDeleteUser,
    ApiUploadAvatar,
    ApiUpdateAvatarUser,
    LoginAPI,
    ApiGetUser,
    ApiLogout
};
