import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';
//import {BrowserRouter as Link} from 'react-router-dom'

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            emailId: '',
            password:''
        }
        this.changeemailIdHandler = this.changeemailIdHandler.bind(this);
        this.changepasswordHandler=this.changepasswordHandler.bind(this); 
        this.validateCustomer=this.validateCustomer.bind(this);   
    }

    // step 3
    componentDidMount(){

        // step 4
       
            CustomerService.getCustomerByemailId(this.state.emailId).then( (res) =>{
                let customer = res.data;
                
                this.setState({
                    emailId: customer.emailId,
                    password : customer.password
                });
            });
              
    }
    validateCustomer = (e) => {
        e.preventDefault();
        let customer = {emailId: this.state.emailId,password:this.state.password};
        console.log('customer => ' + JSON.stringify(customer));

        // step 5
        
                let cust=CustomerService.getCustomerByemailId(customer.emailId);
                if(cust.emailId===customer.emailId && cust.password===customer.password){
                    this.props.history.push('/Dashboard');
                    alert("Login Successful");

                }
                else
                {
                    alert(cust.emailId+cust.password);
                }
        
    }
  
    changeemailIdHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    cancel(){
        this.props.history.push('/customers');
    }

    /*getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Register</h3>
        }else{
            return <h3 className="text-center">Login</h3>
        }
    }}*/
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h4>Log in</h4>
                                <div className = "card-body">
                                    <form>
                                       
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input type="email" placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeemailIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password : </label>
                                            <input type="password" placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                        </div>
                                       
                                       <button className="btn btn-success" onClick={this.validateCustomer}>Login</button>
                                     {/* }  <button className="btn btn-danger" onClick={() => {if(window.confirm('confirm registration?')){this.saveOrUpdateDeveloper()};}}>Save</button>*/}  
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

export default LoginComponent