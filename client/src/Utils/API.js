import axios from "axios";

const API = {
    employeeInfo: function() {
        return axios.get('https://randomuser.me/api/')
    }
}

export default API;