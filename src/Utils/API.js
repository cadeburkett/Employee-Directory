import axios from "axios";

const API = {
    getEmployee: function() {
        return axios.get('https://randomuser.me/api/?results=40')
    }
}

export default API;