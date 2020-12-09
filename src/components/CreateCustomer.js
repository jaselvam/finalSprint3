import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'
import { FormErrors}  from './FormErrors';

class CreateCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // step 2
            id:null,
            customerName: '',
            customerPassword: '',
            customerEmail: '',
            customerAddress:'',
            customerTown:'',
            customerPostalCode:'',
            customerContact:'',

            submitted:false
        };
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeTownHandler = this.changeTownHandler.bind(this);
        this.changePostalcodeHandler = this.changePostalcodeHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
        this.signin=this.signin.bind(this);
    }


    changeNameHandler= (event) => {
        this.setState({customerName: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({customerPassword: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({customerEmail: event.target.value});
    }
    changeAddressHandler= (event) => {
        this.setState({customerAddress: event.target.value});
    }
    changeTownHandler= (event) => {
        this.setState({customerTown: event.target.value});
    }
    changePostalcodeHandler= (event) => {
        this.setState({customerPostalCode: event.target.value});
    }
    changeContactHandler= (event) => {
        this.setState({customerContact: event.target.value});
    }
    saveUser()
    {
        var data = {customerName: this.state.customerName, customerPassword: this.state.customerPassword, customerEmail: this.state.customerEmail,customerAddress:this.state.customerAddress,customerContact:this.state.customerContact,customerPostalCode:this.state.customerPostalCode,customerTown:this.state.customerTown};
        CustomerService.serviceaddCustomer(data).then(response=>{this.setState({id:this.state.id,
            customerName: this.state.customerName, customerPassword: this.state.customerPassword, 
            customerEmail: this.state.customerEmail,customerAddress:this.state.customerAddress,
            customerContact:this.state.customerContact,customerPostalCode:this.state.customerPostalCode,customerTown:this.state.customerTown,
            submitted:true 
        });
        console.log(response.data);
    }).catch(event => {console.log(event);});
    }
    signin(){
        this.props.history.push('/user')
    }

   
    render() {
        return (
            <div className="submit-form">
                {this.state.submitted?(<div><h4>You Registered successfully !</h4>
                <button className="btn btn-success" onClick={this.signin}>Signin now</button></div>):
                (<div>
                    <h4>Registration Form</h4>
                    <div className = "form-group">
                        <label> Customer Name: </label>
                        <input placeholder=" CustomerName" name="customerName" className="form-control" 
                        value={this.state.customerName} onChange={this.changeNameHandler }/>
                    </div>
                    <div className = "form-group">
                        <label > Customer Password: </label>
                        <input type="password" placeholder="CustomerPassword" name="customerPassword" className="form-control" 
                        value={this.state.customerPassword} onChange={this.changePasswordHandler}/>
                    </div>
                    <div className = "form-group">
                        <label> CustomerEmail: </label>
                        <input placeholder="CustomerEmail" name="customerEmail" className="form-control" 
                        value={this.state.customerEmail} onChange={this.changeEmailHandler}/>
                    </div>
                    <div className = "form-group">
                        <label> Customer Address: </label>
                        <input placeholder="Customer Address" name="customerAddress" className="form-control" 
                        value={this.state.customerAddress} onChange={this.changeAddressHandler}/>
                    </div>
                    <div className = "form-group">
                        <label> Customer Town: </label>
                        <input placeholder="CustomerTown" name="customerTown" className="form-control" 
                        value={this.state.customerTown} onChange={this.changeTownHandler}/>
                    </div>
                    <div className = "form-group">
                        <label> Customer PostalCode: </label>
                        <input placeholder="CustomerPostalCode" name="customerPostalcode" className="form-control" 
                        value={this.state.customerPostalCode} onChange={this.changePostalcodeHandler}/>
                    </div>
                    <div className = "form-group">
                        <label> Customer Contact: </label>
                        <input placeholder="CustomerContact" name="customerContact" className="form-control" 
                        value={this.state.customerContact} onChange={this.changeContactHandler}/>
                    </div>
                        
                    <button className="btn btn-success" onClick={this.saveUser}>Submit</button>     

                </div> )}
                </div> );
    }
}
                 

export default CreateCustomer