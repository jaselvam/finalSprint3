import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'

class ListCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state={
                customers: []
        }
        this.addCustomer = this.addCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.viewAdmins=this.viewAdmins.bind(this);
        this.schedulerDetails=this.schedulerDetails.bind(this);
        this.landDetails=this.landDetails.bind(this);
    }
    
    deleteCustomer(customerId){
        CustomerService.serviceremoveCustomer(customerId).then((res) => {
            this.setState({customers: this.state.customers.filter(customer => customer.customerId !== customerId)});
            alert("Are you sure?");
        });
    }
    viewCustomer(customerId){
        this.props.history.push(`/view-customer/${customerId}`);
    }
    editCustomer(customerId){
        this.props.history.push(`/update-customer/${customerId}`);
    }
    addCustomer(){
        this.props.history.push('/add-customer/');
    }

    componentDidMount()
    {
        CustomerService.servicegetAllCustomer().then((res) => {
            this.setState({customers: res.data})
        });
    }
    viewAdmins(){
        this.props.history.push('/admins');
    }
   
   
    schedulerDetails(){
        this.props.history.push('/schedulers');
    }
    landDetails(){
        this.props.history.push('/lands');
    }
  render() {
    return (
      <div>
        <h2 className="text-center"> CUSTOMER DETAILS</h2>
        <div className = "row">
                    <button style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.viewAdmins}> View Admin</button>
                    <button style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.schedulerDetails}> Scheduler Details</button>
                    <button style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.landDetails}>Forest Area </button>
                 </div>
        <div className = "row"></div>
            <table className="table table-striped table-bordered">

                <thead>
                    <tr>
                        <th> CustomerName</th>
                        <th> CustomerPassword</th>
                        <th> CustomerEmail</th>
                        <th> CustomerTown</th>
                        <th> CustomerAddress</th>
                        <th> CustomerContact</th>
                        <th>Actions</th>
                        </tr>

                </thead>
                <tbody>
                    {
                        this.state.customers.map(
                            customer =>
                            <tr key = {customer.customerId}>
                                <td> { customer.customerName}</td>
                                <td> { customer.customerPassword}</td>
                                <td> { customer.customerEmail}</td>
                                <td> { customer.customerTown}</td>
                                <td> { customer.customerAddress}</td>
                                <td> { customer.customerContact}</td>
                                <td>
                             <button onClick={ () => this.editCustomer(customer.customerId)} className="btn btn-info"> Update </button>
                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.customerId)} className="btn btn-danger"> Delete </button>
                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewCustomer(customer.customerId)} className="btn btn-success"> View </button>
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

export default ListCustomerComponent;