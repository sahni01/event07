import { SERVER_URL } from "@/constants";
import axios from "axios"

export const getDecorations = async (type) => {
    const response = await axios.get(`${SERVER_URL}decorations/${type}`)
    return response.data;
}

export const getSingleDecoration = async (id) => {
    const response = await axios.get(`${SERVER_URL}decoration/${id}`)
    return response.data;
}

export const getSingleItem = async (type,id) => {
    const response = await axios.get(`${SERVER_URL}${type}/${id}`)
    return response.data;
}

export const createItem = async (type,body) => {
    const response = await axios.post(`${SERVER_URL}${type}`,body)
    return response.data;
}