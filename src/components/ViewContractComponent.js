import React, { Component } from 'react'
import ContractService from '../services/ContractService'

class ViewContractComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contractNumber: this.props.match.params.contractNumber,
            contract: {}
        }
    }
    

    componentDidMount(){
        ContractService.getContractBycontractNumber(this.state.contractNumber).then( (res) =>{
            this.setState({contract: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View contract Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Delivery Place: </label>
                            <div> { this.state.contract.deliveryPlace }</div>
                        </div>
                        <div className = "row">
                            <label> Delivery Date: </label>
                            <div> { this.state.contract.deliveryDate}</div>
                        </div>
                        <div className = "row">
                            <label> Quantity: </label>
                            <div> { this.state.contract.quantity}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewContractComponent