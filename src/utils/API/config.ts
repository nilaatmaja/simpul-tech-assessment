import axios from "axios";

const configuredAxios = axios.create({
    baseURL: "https://dummyapi.io/data/v1/", // Set your API base URL
    headers: {
        "Content-Type": "application/json",
        "app-id": "6576860e0c093a3f4425e00f",
    },
});

export { configuredAxios as axios };
