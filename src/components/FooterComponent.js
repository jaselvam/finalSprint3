import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                   <center><span className="text-muted">All Rights Reserved 2020 </span></center>
                </footer>
            </div>
        )
    }
}

export default FooterComponent