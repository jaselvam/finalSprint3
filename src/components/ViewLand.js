import React, { Component } from 'react'
import LandService from '../services/LandService'

class ViewLand extends Component {
    constructor(props) {
        super(props)

        this.state = {
            landId: this.props.match.params.landId,
            lands: {}
        }
    }

    componentDidMount(){
        LandService.getLand(this.state.landId).then( res => {
            this.setState({lands: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View land Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Survey Number: </label>
                            <div> { this.state.lands.surveyNumber }</div>
                        </div>
                        
                                           
                        <div className = "row">
                            <label> Land Owner </label>
                            <div> { this.state.lands.landOwner}</div>
                        </div>

                        <div className = "row">
                            <label> Land Area </label>
                            <div> { this.state.lands.landArea}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewLand