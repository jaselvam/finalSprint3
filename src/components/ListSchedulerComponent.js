import React, { Component } from 'react'
import SchedulerService from '../services/SchedulerService'
class ListSchedulerComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
                schedulers : []
        }
        this.addScheduler = this.addScheduler.bind(this);
        this.editScheduler = this.editScheduler.bind(this);
        this.deletescheduler = this.deletescheduler.bind(this);
    }

    deletescheduler(schedulerId){
        SchedulerService.deleteScheduler(schedulerId).then((res) =>{
            this.setState({schedulers: this.state.schedulers.filter(scheduler => scheduler.schedulerId !== schedulerId)});
            alert("Are you sure?");
        });
    }

    viewScheduler(schedulerId){
        this.props.history.push(`/view-scheduler/${schedulerId}`);
    }
    editScheduler(schedulerId){
        this.props.history.push(`/update-scheduler/${schedulerId}`);
    }
    addScheduler(){
        this.props.history.push('/add-scheduler/');
    }
    componentDidMount()
    {
        SchedulerService.getSchedulers().then((res) =>
        {
            this.setState({schedulers: res.data})

        });
    }
    
    render() {
        return (
            <div>
                <h2 className ="text-center">Schedulers List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick ={this.addScheduler}>Add Scheduler</button>

                </div>
                <div className = "row"></div>
                <table>
                    <thead>
                        <tr>
                            <th> Scheduler Name</th>
                            <th> Scheduler Contact</th>
                            <th> TruckNumber</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.schedulers.map(
                                scheduler =>
                                <tr key = {scheduler.schedulerId}>
                                    <td>{scheduler.schedulerName}</td>
                                    <td>{scheduler.schedulerContact}</td>
                                    <td>{scheduler.truckNumber}</td>
                                    <td>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.editScheduler(scheduler.schedulerId)} className="btn btn-info">Update </button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.deletescheduler(scheduler.schedulerId)} className="btn btn-danger">Delete </button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewScheduler(scheduler.schedulerId)} className="btn btn-success">View </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ListSchedulerComponent;