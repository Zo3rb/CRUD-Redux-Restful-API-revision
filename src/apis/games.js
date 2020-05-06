
// Creating Axios Instance From Our Api Here
import axios from 'axios';

const ourAppApi = "http://localhost:3005"
export default axios.create({
    baseURL: ourAppApi
})
