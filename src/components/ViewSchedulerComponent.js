import React, { Component } from 'react'
import SchedulerService from '../services/SchedulerService'

class ViewSchedulerComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            schedulerId: this.props.match.params.schedulerId,
            scheduler: {}
        }
    }

    componentDidMount(){
        SchedulerService.getSchedulerById(this.state.schedulerId).then((res) => {
            this.setState({scheduler: res.data});
        })
    }

    render() {
        return (
            <div>
               
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Scheduler Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Scheduler Name : </label>
                            <div> { this.state.scheduler.schedulerName }</div>
                        </div>
                        <div className = "row">
                            <label> Scheduler Contact : </label>
                            <div> { this.state.scheduler.schedulerContact }</div>
                        </div>
                        <div className = "row">
                            <label> Truck Number : </label>
                            <div> { this.state.scheduler.truckNumber }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ViewSchedulerComponent