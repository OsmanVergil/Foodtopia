import axios from "axios";

export default class foodService {
    static async getAll() {
        const response = await axios.get('https://6383b9836e6c83b7a99a55c5.mockapi.io/items')
        return response.data
    }

    static async getById(id) {
        const response = await axios.get(`https://6383b9836e6c83b7a99a55c5.mockapi.io/items?id=${id}`)
        return response.data[0]
    }
}