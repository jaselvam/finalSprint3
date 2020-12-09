import React, { Component } from 'react'
import AdminService from '../services/AdminService';

class UpdateAdmin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            adminName: '',
            adminpassword: ''
            
        }
        this.changeAdminNameHandler = this.changeAdminNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.updateAdmin = this.updateAdmin.bind(this);
    }

    componentDidMount(){
        AdminService.getAdminById(this.state.id).then( (res) =>{
            let admin = res.data;
            this.setState({adminName: admin.adminName,
                adminpassword: admin.adminpassword,
                
            });
        });
    }

    updateAdmin = (e) => {
        e.preventDefault();
        let admin = {adminName: this.state.adminName, adminpassword: this.state.adminpassword};
        console.log('admin => ' + JSON.stringify(admin));
        console.log('id => ' + JSON.stringify(this.state.id));
        AdminService.updateAdmin(admin, this.state.id).then( res => {
            alert("Admin Updated");
            this.props.history.push('/admins');
        });
    }
    
    changeAdminNameHandler= (event) => {
        this.setState({adminName: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({adminpassword: event.target.value});
    }

    cancel(){
        this.props.history.push('/admins');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Admin</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Admin Name: </label>
                                            <input placeholder="Admin Name" name="adminName" className="form-control" 
                                                value={this.state.adminName} onChange={this.changeAdminNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> adminpassword: </label>
                                            <input placeholder="adminpassword" name="adminpassword" className="form-control" 
                                                value={this.state.adminpassword} onChange={this.changePasswordHandler}/>
                                        </div>
                                       
                                        <button className="btn btn-success" onClick={this.updateAdmin}>Save</button>
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

export default UpdateAdmin