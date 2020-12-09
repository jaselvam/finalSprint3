import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'

class ViewCustomerComponent  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customerId: this.props.match.params.customerId,
            customer: {}
        }
    }

    componentDidMount(){
        CustomerService.servicegetCustomerById(this.state.customerId).then( res => {
            this.setState({customer: res.data});
        })
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Customer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> CustomerName:  </label>
                            <div> { this.state.customer.customerName }</div>
                        </div>
                        <div className = "row">
                            <label> CustomerPassword:  </label>
                            <div> { this.state.customer.customerPassword }</div>
                        </div>
                        <div className = "row">
                            <label> CustomerEmail:  </label>
                            <div> { this.state.customer.customerEmail }</div>
                        </div>
                        <div className = "row">
                            <label> CustomerAddress:  </label>
                            <div> { this.state.customer.customerAddress }</div>
                        </div>
                    <div className = "row">
                            <label> CustomerContact:  </label>
                            <div> { this.state.customer.customerContact }</div>
                        </div>
                        <div className = "row">
                            <label> CustomerTown: </label>
                            <div> { this.state.customer.customerTown }</div>
                        </div>

                        </div>
                </div>
            </div>
        )
    }
}

export default ViewCustomerComponent