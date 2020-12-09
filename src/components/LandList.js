import React, { Component } from 'react'
import LandService from '../services//LandService';

class LandList extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            lands:[]

        }    
        this.addLand = this.addLand.bind(this);
        this.editland = this.editland.bind(this);
        this.deleteland = this.deleteland.bind(this);      
    }

    deleteland(landId){
        LandService.deleteland(landId).then( res => {
            this.setState({lands: this.state.lands.filter(land => land.landId !== landId)});
            alert("Are you sure?");
        });
    }
    viewland(landId){
        this.props.history.push(`/view-land/${landId}`);
    }
    editland(landId){
        this.props.history.push(`/update-land/${landId}`);
    }

    componentDidMount(){
        LandService.getLands().then((res) => {
            this.setState({ lands: res.data})
        });
    }

    addLand(){
        this.props.history.push('/add-land/');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Land Details</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addLand}> Add land</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Survey Number</th>
                                    <th> Land Owner</th>
                                    <th> Land Area</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.lands.map(
                                        land => 
                                        <tr key = {land.landId}>
                                             <td>{land.surveyNumber}</td>
                                             <td> {land.landOwner} </td>                                     
                                             <td> {land.landArea}</td>
                                             <td>
                                                 <button onClick={ () => this.editland(land.landId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteland(land.landId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewland(land.landId)} className="btn btn-info">View </button>
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

export default LandList;