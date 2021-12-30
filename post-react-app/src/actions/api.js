import axios from "axios";

const baseUrl = 'http://localhost:3001/'

export default {
    postContent(url = baseUrl + 'postcontents/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord)
        }
    }
}