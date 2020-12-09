import axios from 'axios';

const SCHEDULER_API_BASE_URL = "http://localhost:8084/fms/v1/schedulers";

class SchedulerService {

    getSchedulers(){
        return axios.get(SCHEDULER_API_BASE_URL);
    }

    createScheduler(schedule){
        return axios.post(SCHEDULER_API_BASE_URL, schedule);
    }

    getSchedulerById(schedulerId){
        return axios.get(SCHEDULER_API_BASE_URL + '/' + schedulerId);
    }

    updateScheduler(scheduler,schedulerId){
        return axios.put(SCHEDULER_API_BASE_URL + '/' + schedulerId , scheduler);
    }

    deleteScheduler(schedulerId){
        return axios.delete(SCHEDULER_API_BASE_URL + '/' + schedulerId);
    } 
}

export default new SchedulerService()
