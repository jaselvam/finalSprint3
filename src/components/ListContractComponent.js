import React, { Component } from 'react'
import ContractService from '../services/ContractService'

class ListContractComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contracts: []
        }
        this.addContract = this.addContract.bind(this);
        this.editContract= this.editContract.bind(this);
        this.deleteContract = this.deleteContract.bind(this);
    }

    deleteContract(contractNumber){
        ContractService.deleteContract(contractNumber).then( res => {
            this.setState({contracts: this.state.contracts.filter(contract => contract.contractNumber !== contractNumber)});
            alert("Are you sure?");
        });
    }
    viewContract(contractNumber){
        this.props.history.push(`/view-contract/${contractNumber}`);
    }
    editContract(contractNumber){
        this.props.history.push(`/update-contract/${contractNumber}`);
    }

    componentDidMount(){
        ContractService.getContracts().then((res) => {
            this.setState({ contracts: res.data});
        });
    }

    addContract(){
        this.props.history.push('/add-contract/');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Contracts List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addContract}> Add Contract</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Delivery Date</th>
                                    <th> Delivery Place</th>
                                    <th> Contract Quantity</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.contracts.map(
                                        contract => 
                                        <tr key = {contract.contractNumber}>
                                             <td> {contract.deliveryDate} </td>   
                                             <td> {contract.deliveryPlace}</td>
                                             <td> {contract.quantity}</td>
                                             <td>
                                                 <button onClick={ () => this.editContract(contract.contractNumber)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteContract(contract.contractNumber)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewContract(contract.contractNumber)} className="btn btn-info">View </button>
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

export default ListContractComponent