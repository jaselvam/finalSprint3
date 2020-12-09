import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8084/fms/m2/admins";

class AdminService {

    getAdminById(adminId){
        return axios.get(ADMIN_API_BASE_URL + '/' +adminId);
    }
    getAdmins(){
        return axios.get(ADMIN_API_BASE_URL);
    }
    
    updateAdmin(admin,adminId){
        return axios.put(ADMIN_API_BASE_URL+ '/' +  adminId,admin);
    }
    deleteAdmin(adminId){
        return axios.delete(ADMIN_API_BASE_URL + '/' + adminId);
    }
}


export default new AdminService()