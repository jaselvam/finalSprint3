import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';

class UpdateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customerId: this.props.match.params.customerId,
            customerName: '',
            customerPassword: '',
            customerEmail: '',
            customerTown: '',
            customerAddress: '',
            customerPostalCode: '',
            customerContact:''
        }
        this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
        this.changeCustomerPasswordHandler = this.changeCustomerPasswordHandler.bind(this);
        this.changeCustomerEmailHandler = this.changeCustomerEmailHandler.bind(this);
        this.changeCustomerTownHandler = this.changeCustomerTownHandler.bind(this);
        this.changeCustomerAddressHandler = this.changeCustomerAddressHandler.bind(this);
        this.changeCustomerPostalCodeHandler = this.changeCustomerPostalCodeHandler.bind(this);
        this.changeCustomerContactHandler = this.changeCustomerContactHandler.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
    }

    componentDidMount(){
        CustomerService.servicegetCustomerById(this.state.customerId).then( (res) =>{
            let customer = res.data;
            this.setState({customerName: customer.customerName,
                customerPassword: customer.customerPassword,
                customerEmail: customer.customerEmail,
                customerTown: customer.customerTown,
                customerAddress: customer.customerAddress,
                customerPostalCode: customer.customerPostalCode,
                customerContact: customer.customerContact

            });
        });
    }

    editCustomer = (e) => {
        e.preventDefault();
        let customer = {customerName: this.state.customerName, 
            customerPassword: this.state.customerPassword, 
            customerEmail: this.state.customerEmail,
            customerTown: this.state.customerTown,
            customerAddress: this.state.customerAddress,
            customerPostalCode:this.state.customerPostalCode,
            customerContact:this.state.customerContact};
        console.log('customer => ' + JSON.stringify(customer));
        //console.log('id => ' + JSON.stringify(this.state.id));
        CustomerService.serviceupdateCustomer(customer, this.state.customerId).then((res) => {
            alert("Customer Updated");
            this.props.history.push('/customers');
        });
    }
    
    changeCustomerNameHandler= (event) => {
        this.setState({customerName: event.target.value});
    }

    changeCustomerPasswordHandler= (event) => {
        this.setState({customerPassword: event.target.value});
    }

    changeCustomerEmailHandler= (event) => {
        this.setState({customerEmail: event.target.value});
    }
    changeCustomerTownHandler= (event) => {
        this.setState({customerTown: event.target.value});
    }

    changeCustomerPostalCodeHandler= (event) => {
        this.setState({customerPostalCode: event.target.value});
    }
    
    changeCustomerAddressHandler= (event) => {
        this.setState({customerAddress: event.target.value});
    }
    changeCustomerContactHandler= (event) => {
        this.setState({customerContact: event.target.value});
    }


    cancel(){
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> CustomerName: </label>
                                            <input placeholder="CustomerName" name="customerName" className="form-control" 
                                                value={this.state.customerName} onChange={this.changeCustomerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CustomerPassword: </label>
                                            <input placeholder="Password"  type="password" name="lastName" className="form-control" 
                                                value={this.state.customerPassword} onChange={this.changeCustomerPasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CustomerEmail: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.customerEmail} onChange={this.changeCustomerEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> customerPostalCode: </label>
                                            <input placeholder="CustomerPostalCode" name="customerPostalcode" className="form-control" 
                                                value={this.state.customerPostalcode} onChange={this.changeCustomerPostalCodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CustomerContact: </label>
                                            <input placeholder="CustomerContact" name="customerContact" className="form-control" 
                                                value={this.state.customerContact} onChange={this.changeCustomerContactHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CustomerTown: </label>
                                            <input placeholder="CustomerTown" name="cutomerTown" className="form-control" 
                                                value={this.state.customerTown} onChange={this.changeCustomerTownHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> CustomerAddress: </label>
                                            <input placeholder="CustomerAddress" name="cutomerAddress" className="form-control" 
                                                value={this.state.customerAddress} onChange={this.changeCustomerAddressHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.editCustomer}>Save</button>
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

export default UpdateCustomerComponent