import React, { Component } from 'react'

export default class View extends Component {
    render () {
        return (
            <div>
                <span>My account information:</span>
                <div>{this.props.testUser.name}</div>
                <div>{this.props.testUser.email}</div>
                <div>{this.props.testUser.phone}</div>
                <div>{this.props.testUser.address}</div>
                <div>{this.props.testUser.postcode}</div>
                <div>{this.props.testUser.dateofbirth}</div>
            </div>
        )
    }
}
