import axios from 'axios'
import { API_URL } from '../config'

export const getPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`)
        return response.data || []
    } catch (error) {
        throw new Error(error.message)
    }
}

export const getPostById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/posts/${id}`)
        return response.data || {}
    } catch (error) {
        throw new Error(error.message)
    }
}