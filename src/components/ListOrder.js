import React, { Component } from 'react'
import OrderService from '../services/OrderService';
class ListOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
                orders: []
        }
        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.deleteorder = this.deleteorder.bind(this);
    }

    deleteorder(orderNumber){
        OrderService.deleteOrder(orderNumber).then( res => {
            this.setState({orders: this.state.orders.filter(order => order.orderNumber !== orderNumber)});
            alert("Are you sure?");
        });
    }
    viewOrder(orderNumber){
        this.props.history.push(`/view-order/${orderNumber}`);
    }
    editOrder(orderNumber){
        this.props.history.push(`/update-order/${orderNumber}`);
    }

    componentDidMount(){
        OrderService.getOrders().then((res) => {
            this.setState({ orders: res.data})
        });
    }

    addOrder(){
        this.props.history.push('/add-order/');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Orders</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addOrder}> Add Order</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> Delivery Place</th>
                                    <th> Delivery Date</th>
                                    <th> Quantity</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order => 
                                        <tr key = {order.orderNumber}>
                                             <td> {order.deliveryPlace} </td> 
                                             <td> {order.deliveryDate} </td>                                     
                                             <td> {order.quantity}</td>
                                             <td>
                                                 <button onClick={ () => this.editOrder(order.orderNumber)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteorder(order.orderNumber)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewOrder(order.orderNumber)} className="btn btn-info">View </button>
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

export default ListOrder;