import axios from 'axios';

const CONTRACT_API_BASE_URL = "http://localhost:8084/fms/m4/contracts";

class ContractService {

    getContracts(){
        return axios.get(CONTRACT_API_BASE_URL);
    }

    createContract(contract){
        return axios.post(CONTRACT_API_BASE_URL, contract);
    }

    getContractBycontractNumber(contractcontractNumber){
        return axios.get(CONTRACT_API_BASE_URL + '/' + contractcontractNumber);
    }

    updateContract(contract, contractcontractNumber){
        return axios.put(CONTRACT_API_BASE_URL + '/' + contractcontractNumber, contract);
    }

    deleteContract(contractcontractNumber){
        return axios.delete(CONTRACT_API_BASE_URL + '/' + contractcontractNumber);
    }
}

export default new ContractService()