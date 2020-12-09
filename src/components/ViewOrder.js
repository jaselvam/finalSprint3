import React, { Component } from 'react'
import OrderService from '../services/OrderService'

class ViewOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orderNumber: this.props.match.params.orderNumber,
            orders: {}
        }
    }

    componentDidMount(){
        OrderService.getOrder(this.state.orderNumber).then( res => {
            this.setState({orders: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View order Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> deliveryPlace </label>
                            <div> { this.state.orders.deliveryPlace }</div>
                        </div>
                        
                                           
                        <div className = "row">
                            <label> deliveryDate </label>
                            <div> { this.state.orders.deliveryDate}</div>
                        </div>

                        <div className = "row">
                            <label> Quantity </label>
                            <div> { this.state.orders.quantity}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOrder