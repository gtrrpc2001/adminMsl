import { Axios, AxiosRequestConfig } from "axios";
import APIResponse, { GraphQLRequest } from "../../interface/response";
import { createAxios } from "../../controller/controller";

const client: Axios = createAxios(`${import.meta.env.VITE_API_LOCAL_URL}:${import.meta.env.VITE_API_LOCAL_PORT}`)
const graphqlClient: Axios = createAxios(`${import.meta.env.VITE_API_LOCAL_URL}:${import.meta.env.VITE_API_LOCAL_PORT}/graphql`)

export const getData = async <T>(
    url: string,
    config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
    try {
        const response = await client.get<APIResponse<T>>(url, config);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const postData = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
    try {
        const response = await client.post<APIResponse<T>>(url, data, config);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const putData = async <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
    try {
        const response = await client.put<APIResponse<T>>(url, data, config);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const deleteData = async <T>(
    url: string,
    config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
    try {
        const response = await client.delete<APIResponse<T>>(url, config);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const graphqlRequest = async <T>(
    request: GraphQLRequest,
    config?: AxiosRequestConfig
): Promise<APIResponse<T>> => {
    try {
        const response = await graphqlClient.post<APIResponse<T>>('', request, config);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};