
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Default extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="container"
            style={{minHeight:"80vh"}}>
                <div className="row mt-5">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>Error</h1>
                        <h2>page not found</h2>
                        <h3>the requesteed URL <span className="text-danger">{this.props.location.pathname}</span> was not found</h3>
                    </div>
                </div>
                <div className=" mt-2 d-flex justify-content-center ">
                    <Link to="/">
                        <button className="btn btn-info btn-md mt-3"
                        >Return to HOME PAGE</button>
                    </Link>
                </div>
            </div>
        )
    }
}