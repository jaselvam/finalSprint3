import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8084/fms/m3/customers"; 

class CustomerService {

    servicegetAllCustomer(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    serviceaddCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL,customer);
    }

    servicegetCustomerById(customerId){
        return axios.get(CUSTOMER_API_BASE_URL +  '/' + customerId);
    }

    serviceupdateCustomer(customer,customerId){
        return axios.put(CUSTOMER_API_BASE_URL + '/' + customerId,customer);
    }

    serviceremoveCustomer(customerId){
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + customerId);
    }
    getCustomerByemailId(emailId){
        return axios.get(CUSTOMER_API_BASE_URL + '/'+ emailId);
    }
}

export default new CustomerService()