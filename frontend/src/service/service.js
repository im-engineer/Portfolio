import axios from "axios";
import {getUserInfo} from "../service/authHeader"
const TOKEN = getUserInfo();
let axiosConfig = {
    headers:{
        'Content-Type' : 'application/json',
        'Authorization':TOKEN
    }
}
const API_URL = "http://localhost:5001/";

//-------------------------->>>>>> User Register <<<<<<--------------------------
export const contactToAdmin = async (fullname,email,textarea) => {
    return await axios.post(API_URL + "contact/to/admin", {fullname,email,textarea}, axiosConfig)

}