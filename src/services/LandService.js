import axios from 'axios';

const LAND_API_BASE_URL = "http://localhost:8084/fms/m5/lands";

class LandService {

    getLands(){
        return axios.get(LAND_API_BASE_URL);
    }

    createLand(land){
        return axios.post(LAND_API_BASE_URL, land);
    }

    getLand(landId){
        return axios.get(LAND_API_BASE_URL + '/'+ landId);
    }

    updateLand(land, landId){
        return axios.put(LAND_API_BASE_URL + '/' + landId, land);
    }

    deleteland(landId){
        return axios.delete(LAND_API_BASE_URL + '/' + landId);
    }
}

export default new LandService()