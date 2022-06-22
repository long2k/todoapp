import axiosClient from "./axiosClient";

const apiTodo ={
    loginUser: (params)=>{
        const url = 'auth/login';
        return axiosClient.post(url, params)
    },
    registerUser: (params)=>{
        const url = 'auth/register';
        return axiosClient.post(url,params);
    },
}

export default apiTodo;