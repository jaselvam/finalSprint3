import React, { Component } from 'react'
import LandService from '../services/LandService';

class UpdateLand extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            landId: this.props.match.params.landId,
            surveyNumber:'',   
            landOwner:'',         
            landArea: ''

            
        }
        this.changesurveyNumberHandler = this.changesurveyNumberHandler.bind(this);
        this.changelandOwnerHandler=this.changelandOwnerHandler.bind(this);
        this.changelandAreaHandler=this.changelandArearHandler.bind(this);
        this.UpdateLand = this.UpdateLand.bind(this);
    }

    
    componentDidMount(){
            LandService.getLand(this.state.landId).then( (res) =>{
                let land = res.data;
                console.log('LAndLoaded',land)
                this.setState({surveyNumber: land.surveyNumber,
                    landOwner:land.landOwner,
                    landArea :land.landArea
                });
            });
        }        
    
    UpdateLand = (e) => {
        e.preventDefault();
        let land = {surveyNumber: this.state.surveyNumber,landOwner: this.state.landOwner,landArea:this.state.landArea};
        //console.log('product => ' + JSON.stringify(product));
       // console.log('productId => ' + JSON.stringify(this.state.productId));
        LandService.updateLand(land, this.state.landId).then( res => {
            console.log(res);
            alert("Land Updated");
            this.props.history.push('/lands');
        });
    }
    
    changesurveyNumberHandler= (event) => {
        this.setState({surveyNumber: event.target.value});
    }
    changelandOwnerHandler= (event) => {
        this.setState({landOwner: event.target.value});
    }
    changelandArearHandler= (event) => {
        this.setState({landArea: event.target.value});
    }

    cancel(){
        this.props.history.push('/lands');
    }

    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                        
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                
                                <h3 className="text-center">Update Land</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> surveyNumber: </label>
                                            <input placeholder="surveyNumber" name="surveyNumber" className="form-control" 
                                                value={this.state.surveyNumber} onChange={this.changesurveyNumberHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> landOwner: </label>
                                            <input placeholder="landOwner" name="landOwner" className="form-control" 
                                                value={this.state.landOwner} onChange={this.changelandOwnerHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> landArea: </label>
                                            <input placeholder="landArea" name="landArea" className="form-control" 
                                                value={this.state.landArea} onChange={this.changelandAreaHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.UpdateLand}>Save</button>
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

export default UpdateLand