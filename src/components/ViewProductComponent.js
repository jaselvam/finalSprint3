import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            productId: this.props.match.params.productId,
            products: {}
        }
    }

    componentDidMount(){
        ProductService.getProductById(this.state.productId).then( res => {
            this.setState({products: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Product  Name: </label>
                            <div> { this.state.products.productName }</div>
                        </div>
                        
                                           
                        <div className = "row">
                            <label> Product Description: </label>
                            <div> { this.state.products.productDescription}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProductComponent