import React, { Component } from'react'
import AdminService from '../services/AdminService'
class ViewAdmin extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             admin:{}
        }
    }
    componentDidMount(){
        AdminService.getAdminById(this.state.id).then( res => {
            this.setState({admin: res.data});
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Admin Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Admin Id: </label>
                            <div> { this.state.admin.id }</div>
                        </div>
                        <div className = "row">
                            <label> Admin Name: </label>
                            <div> { this.state.admin.adminName }</div>
                        </div>
                        <div className = "row">
                            <label> Admin Password: </label>
                            <div> { this.state.admin.adminPassword }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewAdmin