import React, { Component } from 'react'
import SchedulerService from '../services/SchedulerService';

class UpdateSchedulerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            schedulerId: this.props.match.params.schedulerId,
            schedulerName: '',
            schedulerContact: '',
            truckNumber: ''
        }
        this.changeSchedulerNameHandler = this.changeSchedulerNameHandler.bind(this);
        this.changeSchedulerContactHandler = this.changeSchedulerContactHandler.bind(this);
        this.changeTruckNumberHandler = this.changeTruckNumberHandler.bind(this);
        this.updateScheduler = this. updateScheduler.bind(this);
    }
    componentDidMount(){
        SchedulerService.getSchedulerById(this.state.schedulerId).then((res) =>{
            let scheduler = res.data;
                this.setState({schedulerName:scheduler.schedulerName,
                schedulerContact: scheduler.schedulerContact,
                truckNumber:scheduler.truckNumber
            });
        });
    }
    updateScheduler=(e)=>{
        e.preventDefault();
        let scheduler = {schedulerName: this.state.schedulerName, schedulerContact: this.state.schedulerContact, truckNumber: this.state.truckNumber};
        console.log('scheduler => ' + JSON.stringify(scheduler));
        
        SchedulerService.updateScheduler(scheduler,this.state.schedulerId).then(res =>{
            this.props.history.push('/schedulers');
            alert("Scheduler Updated");
        });
    }

    changeSchedulerNameHandler = (event) =>{
        this.setState({schedulerName: event.target.value});
    }

    changeSchedulerContactHandler= (event) => {
        this.setState({schedulerContact: event.target.value});
    }

    changeTruckNumberHandler= (event) => {
        this.setState({truckNumber: event.target.value});
    }

    cancel(){
        this.props.history.push('/schedulers');
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Scheduler</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label>Scheduler Name</label>
                                    <input placeholder="Scheduler Name" name="schedulerName" className="form-control" 
                                    value={this.state.schedulerName} onChange={this.changeSchedulerNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label>Scheduler Contact</label>
                                    <input placeholder="Scheduler Contact" name="schedulerContact" className="form-control" 
                                        value={this.state.schedulerContact} onChange={this.changeSchedulerContactHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Truck Number </label>
                                        <input placeholder="Truck Number" name="truckNumber" className="form-control" 
                                            value={this.state.truckNumber} onChange={this.changeTruckNumberHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateScheduler}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UpdateSchedulerComponent