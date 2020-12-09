import React, { Component } from 'react'
import OrderService from '../services//OrderService';

class CreateOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            orderNumber: this.props.match.params.orderNumber,
             deliveryPlace:'',   
             deliveryDate:'',         
             quantity: ''

        }
        this.changedeliveryPlaceHandler = this.changedeliveryPlaceHandler.bind(this);
        this.changedeliveryDateHandler=this.changedeliveryDateHandler.bind(this);
        this.changequantityHandler=this.changequantityHandler.bind(this);
    
        this.SaveOrder = this.SaveOrder.bind(this);
    }
     

    componentDidMount(){
        OrderService.getOrder(this.state.orderNumber).then( (res) =>{
            let order = res.data;
            this.setState({deliveryPlace: order.deliveryPlace,
                deliveryDate:order.deliveryDate,
                quantity :order.quantity
                });
            });
        }        
    

        SaveOrder = (e) => {
        e.preventDefault();
        let order = {deliveryPlace: this.state.deliveryPlace,deliveryDate: this.state.deliveryDate,quantity:this.state.quantity};
        console.log('order => ' + JSON.stringify(order));
        OrderService.createOrder(order).then( res => {
            alert("Order Added Successfully");
            this.props.history.push('/orders');
        });
    }
      
    
   
    changedeliveryPlaceHandler= (event) => {
        this.setState({deliveryPlace: event.target.value});
    }
    changedeliveryDateHandler= (event) => {
        this.setState({deliveryDate: event.target.value});
    }
    changequantityHandler= (event) => {
        this.setState({quantity: event.target.value});
    }

    cancel(){
        this.props.history.push('/orders');
    }


    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                        
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            
                                <h3 className="text-center">Add Order</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> deliveryPlace: </label>
                                            <input placeholder="deliveryPlace" name="deliveryPlace" className="form-control" 
                                                value={this.state.deliveryPlace} onChange={this.changedeliveryPlaceHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> deliveryDate: </label>
                                            <input placeholder="deliveryDate" name="deliveryDate" className="form-control" 
                                                value={this.state.deliveryDate} onChange={this.changedeliveryDateHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> quantity: </label>
                                            <input placeholder="quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changequantityHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.SaveOrder}>Save</button>
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

export default CreateOrder