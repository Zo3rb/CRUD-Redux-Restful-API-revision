
// Creating Axios Instance From Our Api Here
import axios from 'axios';

const ourAppApi = "http://localhost:5000"
export default axios.create({
    baseURL: ourAppApi
})
