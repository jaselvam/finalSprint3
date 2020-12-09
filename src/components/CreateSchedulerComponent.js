import React, { Component } from 'react'
import SchedulerService from '../services/SchedulerService'

class CreateSchedulerComponent extends Component {
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
        this.saveScheduler = this.saveScheduler.bind(this);
    }

    saveScheduler=(e)=>{
        e.preventDefault();
        let schedule = {schedulerName: this.state.schedulerName, schedulerContact: this.state.schedulerContact, truckNumber: this.state.truckNumber};
        console.log('schedule => ' + JSON.stringify(schedule));

        SchedulerService.createScheduler(schedule).then(res =>{
            alert("Scheduler Added Successfully");
            this.props.history.push('/schedulers');
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
                        <h3 className="text-center">Add Scheduler</h3>
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
                                    <button className="btn btn-success" onClick={this.saveScheduler}>Save</button>
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
export default CreateSchedulerComponent