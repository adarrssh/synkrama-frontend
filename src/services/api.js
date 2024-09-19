import axios from 'axios'

const getAllBooks = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/v1/books')
        return res
    } catch (error) {
        throw error
    }
}

export default getAllBooks