import React, { Component } from 'react'
import ContractService from '../services/ContractService';

class UpdateContractComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contractNumber: this.props.match.params.contractNumber,
           deliveryPlace:'',
           deliveryDate: '',
           quantity: ''
        }
        this.changedeliveryPlaceHandler = this.changedeliveryPlaceHandler.bind(this);
        this.changedeliveryDateHandler = this.changedeliveryDateHandler.bind(this);
        this.changequantityHandler = this.changequantityHandler.bind(this);
        this.updateContract = this.updateContract.bind(this);
    }

    componentDidMount(){
        ContractService.getContractBycontractNumber(this.state.contractNumber).then( (res) =>{
            let contract = res.data;
            console.log('contractloaded',contract)
            this.setState({deliveryPlace: contract.deliveryPlace,
                deliveryDate: contract.deliveryDate,
                quantity :contract.quantity
            });
        });
    }

    updateContract = (e) => {
        e.preventDefault();
        let contract = {deliveryPlace: this.state.deliveryPlace, deliveryDate: this.state.deliveryDate, quantity: this.state.quantity};
        //console.log('contract => ' + JSON.stringify(contract));
        //console.log('contractNumber => ' + JSON.stringify(this.state.contractNumber));
        ContractService.updateContract(contract, this.state.contractNumber).then( res => {
            alert("Contract Updated");
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Contract</h3>
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

                                        <button className="btn btn-success" onClick={this.updateContract}>Save</button>
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

export default UpdateContractComponent