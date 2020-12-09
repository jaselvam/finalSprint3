import React, { Component } from 'react'
import ContractService from '../services//ContractService';

class CreateContract extends Component {
    constructor(props) {    //constructor() function will be called when the componens gets initiated
        super(props)      //props are like arguments, we send them into the components as attributes

        this.state = {       //properties are initiated inside a object state
          
            contractcontractNumber: this.props.match.params.contractcontractNumber,
            deliveryPlace:'',
            deliveryDate: '',
            quantity: ''
        }
        this.changedeliveryPlaceHandler = this.changedeliveryPlaceHandler.bind(this);
        this.changedeliveryDateHandler = this.changedeliveryDateHandler.bind(this);
        this.changequantityHandler = this.changequantityHandler.bind(this);
        this.saveContract = this.saveContract.bind(this);
    }

    
    componentDidMount(){  // This method is called after the component is rendered
            ContractService.getContractBycontractNumber(this.state.contractcontractNumber).then( (res) =>{
                let contract = res.data;
                this.setState({deliveryPlace: contract.deliveryPlace,  //here the component is re-rendered because of setState()
                    deliveryDate :contract.deliveryDate,
                    quantity :contract.quantity
                });
            });
        }        
    
    saveContract = (e) => {
        e.preventDefault();
        let contract = {deliveryPlace: this.state.deliveryPlace, deliveryDate: this.state.deliveryDate,quantity:this.state.quantity};
        console.log('contract => ' + JSON.stringify(contract));
            ContractService.createContract(contract, this.state.contractcontractNumber).then( res => {
                alert("Contract Added Successfully");
                this.props.history.push('/contracts');
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
        this.props.history.push('/contracts');
    }

    render() {    //render() is required and called
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <h3 className="text-center">Add contract</h3>
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
                                            <input placeholder="contract quantity" name="quantity" className="form-control" 
                                                value={this.state.quantity} onChange={this.changequantityHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveContract}>Save</button>
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

export default CreateContract