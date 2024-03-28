
import axios from "axios";
const baseUrl = 'http://localhost:5000';
const backendService = {
    
    clients:{
        getAllClients: () => axios.get(`${baseUrl}/clients`).then(response => response.data),
        addClient: (client) => {console.log(client);
            return axios.post(`${baseUrl}/clients/addClient`, client).then(response =>{console.log(response.data); return response.data})}
    }
}
export default backendService;