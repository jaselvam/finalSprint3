import React, { Component } from 'react'
import ProductService from '../services//ProductService';

class UpdateProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            productId: this.props.match.params.productId,
            productName:'',            
            productDescription: ''
        }
        this.changeproductNameHandler = this.changeproductNameHandler.bind(this);
        this.changeproductDescriptionHandler=this.changeproductDescriptionHandler.bind(this);
        this.UpdateProduct = this.UpdateProduct.bind(this);
    }

    
    componentDidMount(){
            ProductService.getProductById(this.state.productId).then( (res) =>{
                let product = res.data;
                console.log('productloaded',product)
                this.setState({productName: product.productName,
                    productDescription :product.productDescription
                });
            });
        }        
    
    UpdateProduct = (e) => {
        e.preventDefault();
        let product = {productName: this.state.productName,productDescription: this.state.productDescription};
        //console.log('product => ' + JSON.stringify(product));
       // console.log('productId => ' + JSON.stringify(this.state.productId));
        ProductService.updateProduct(product, this.state.productId).then( res => {
            console.log(res);
            alert("Product Updated");
            this.props.history.push('/Dashboard');
        });
    }
    
    changeproductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }
    changeproductDescriptionHandler= (event) => {
        this.setState({productDescription: event.target.value});
    }

    cancel(){
        this.props.history.push('/Dashboard');
    }

    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                        
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <h3 className="text-center">Update Product</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> productName: </label>
                                            <input placeholder="Product Name" name="productName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeproductNameHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> productDescription: </label>
                                            <input placeholder="Product Description" name="productDescription" className="form-control" 
                                                value={this.state.productDescription} onChange={this.changeproductDescriptionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.UpdateProduct}>Save</button>
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

export default UpdateProductComponent