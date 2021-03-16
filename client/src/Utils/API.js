import axios from "axios";

const API = {
    getEmployee: function() {
        return axios.get('https://randomuser.me/api/')
    }
}

export default API;