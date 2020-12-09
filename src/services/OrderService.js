import axios from 'axios';

const ORDER_API_BASE_URL = "http://localhost:8084/fms/m6/orders";

class OrderService {

    getOrders(){
        return axios.get(ORDER_API_BASE_URL);
    }

    createOrder(order){
        return axios.post(ORDER_API_BASE_URL, order);
    }

    getOrder(orderNumber){
        return axios.get(ORDER_API_BASE_URL + '/'+ orderNumber);
    }

    updateOrder(order, orderNumber){
        return axios.put(ORDER_API_BASE_URL + '/' + orderNumber, order);
    }

    deleteOrder(orderNumber){
        return axios.delete(ORDER_API_BASE_URL + '/' + orderNumber);
    }
}

export default new OrderService()