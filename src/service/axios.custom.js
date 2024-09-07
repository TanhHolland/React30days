import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:8080",
});
// console.log(import.meta.env.VITE_BACKEND_URL);
// http://localhost:8080
// import.meta.env.VITE_BACKEND_URL
// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        if (
            typeof window !== "undefined" &&
            window &&
            window.localStorage &&
            window.localStorage.getItem("access_token")
        ) {
            config.headers.Authorization =
                "Bearer " + window.localStorage.getItem("access_token");
        }
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        return Promise.reject(error.response.data.message);
    }
);
export default instance;
