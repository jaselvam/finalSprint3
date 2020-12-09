import React, { Component } from 'react'
import ProductService from '../services/ProductService'
class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
        //this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteproduct = this.deleteproduct.bind(this);
        this.productList= this.productList.bind(this);
        this.myOrders= this.myOrders.bind(this);
        this.tracking=this.tracking.bind(this);
    }

    deleteproduct(productId){
        ProductService.deleteProduct(productId).then( res => {
            this.setState({products: this.state.products.filter(product => product.productId !== productId)});
            alert("Are you sure?");
        });
    }
    viewProduct(productId){
        this.props.history.push(`/view-product/${productId}`);
    }
    editProduct(productId){
        this.props.history.push(`/update-product/${productId}`);
        
    }

    componentDidMount(){
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data})
        });
    }

   /* addProduct(){
        this.props.history.push('/add-product/');
    }*/

    productList(){
        this.props.history.push('/add-product/');
    }
    myOrders(){
        this.props.history.push('/orders');
    }
    tracking(){
        this.props.history.push('/contracts')
    }
    render() {
        return (
            <div>
                
                <h2 className="text-center">YOUR CART</h2>
                <div>
                    <button onClick={this.productList} className="btn btn-info">ADD PRODUCT TO YOUR CART</button>
                    <button style={{marginLeft:'15px'}} onClick={this.myOrders} className="btn btn-info">My Orders</button>
                    <button style={{marginLeft:'15px'}} onClick={this.tracking} className="btn btn-info">Tracking Details</button>
                </div>
            
                
                
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    
                                    <th> Product Name</th>
                                    <th> Product description</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map(
                                        product => 
                                        <tr key = {product.productId}>
                                             
                                             <td> {product.productName} </td>                                     
                                             <td> {product.productDescription}</td>
                                             <td>
                                                 <button onClick={ () => this.editProduct(product.productId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteproduct(product.productId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProduct(product.productId)} className="btn btn-info">View </button>
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

export default ProductList;