import React, { Component } from 'react'
import AdminService from '../services/AdminService'
export class ListAdmin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             admins:[]
        }
       // this.editAdmin = this.editAdmin.bind(this);
        this.deleteAdmin = this.deleteAdmin.bind(this);
       
    }
    deleteAdmin(id){
        AdminService.deleteAdmin(id).then( res => {
            this.setState({admins: this.state.admins.filter(admin => admin.id !== id)});
            alert("Are you sure?");
        });
    }
    viewAdmin(id){
        this.props.history.push(`/view-admin/${id}`);
    }
    /*editAdmin(id){
        this.props.history.push(`/edit-admin/${id}`);
    }*/

    componentDidMount(){
        AdminService.getAdmins().then((res) => {
            this.setState({ admins: res.data});
        });
    }

    
    render() {
        return (
            <div>
                <h2 className="text-center">Admin list</h2>
                
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Admin Id</th>
                                    <th> Admin Name</th>           
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.admins.map(
                                        admin => 
                                        <tr key = {admin.id}>
                                             <td> {admin.id} </td>   
                                             <td> {admin.adminName} </td> 
                                             <td>
                                                 {/*<button onClick={ () => this.editAdmin(admin.id)} className="btn btn-info">Update </button>*/}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAdmin(admin.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewAdmin(admin.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListAdmin