import React, { Component } from 'react'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
        this.productList= this.productList.bind(this);
        this.myOrders= this.myOrders.bind(this);
    }
    productList(){
        this.props.history.push('/add-product/');
    }
    myOrders(){
        this.props.history.push('/orders');
    }
    
    render() {
        return (
            <div>
                 <h2 className="text-center">YOUR CART</h2>
                <div>
                    <button onClick={this.productList}>ADD PRODUCT TO YOUR CART</button>
                    <button style={{marginLeft:'15px'}} onClick={this.myOrders}>My Orders</button>
                    <button style={{marginRight:'10px'}} onClick={this.tracking}>Tracking Details</button>
                </div>
            </div>
        )
    }
}

export default Dashboard
