import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import update from 'immutability-helper'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css'
import moment from 'moment'
import { EMAIL_VALIDATION_REGEX } from '../../constants'

export default class Form extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: this.props.user,
            startDate: moment(),
            errors: {}
        }
        this.changeInput = this.changeInput.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.submitData = this.submitData.bind(this)
    }
    componentDidMount () {
        console.log('props in component', this.props)
    }
    changeInput ({target: {value, name}}) {
        this.setState({
            user: update(this.state.user, {
                [name]: {$set: value}
            })
        })

    }
    handleChange (target) {
        this.setState({
            startDate: target,
            user: update(this.state.user, {
                'dateofbirth': {$set: moment(target).format("YYYY/MM/DD")}
            })
        })

    }
    submitData (e) {
        e.preventDefault()
        var errorMessages = {}
        var emailVal = true
        if (this.state.user.name === '') {
            errorMessages.name_error = 'The field is required'
        }
        if (this.state.user.email === '') {
            errorMessages.email_error = 'The field is required'
        } else {
            emailVal = EMAIL_VALIDATION_REGEX.test(this.state.user.email)
        }
        if (this.state.user.postcode === '') {
            errorMessages.postcode_error = 'The field is required'
        }
        if (this.state.user.dateofbirth === null) {
            errorMessages.date_error = 'The field is required'
        }
        if (!emailVal) {
            errorMessages.email_error = 'Enter correct email'
        }
        this.setState({
            errors: errorMessages
        })
        this.props.changeStateProps('errors', this.state.errors)
        if (Object.keys(errorMessages).length === 0) {
            this.props.changeStateProps('user', this.state.user)
            this.setState({
                errors: {},
                user: {
                    name: '',
                    email: '',
                    postcode: '',
                    phone: '',
                    address: ''
                }
            })
            this.props.changeStateProps('user', this.state.user)
        }
    }
    render () {
        return (
            <div>
                <div className="container">
                    <div className="form-group row">
                        <div className="col-md-6 offset-lg-2 col-lg-4">
                            <label htmlFor="name">Name (required):</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={this.changeInput}
                                placeholder="Enter name"
                                name="name"
                            />
                            <span className="error_message">{this.state.errors.name_error}</span>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <label htmlFor="email">Email (required):</label>
                            <input
                                className="form-control"
                                type="email"
                                placeholder="test@test.com"
                                name="email"
                                onChange={this.changeInput}
                            />
                            <span className="error_message">{this.state.errors.email_error}</span>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6 offset-lg-2 col-lg-4">
                            <label htmlFor="phone">Phone Number:</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={this.changeInput}
                                placeholder="(***)**-**-***"
                                name="phone"
                            />
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <label htmlFor="address">Address:</label>
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Country, City etc."
                                name="address"
                                onChange={this.changeInput}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6 offset-lg-2 col-lg-4">
                            <label htmlFor="postcode">Post Code (required):</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={this.changeInput}
                                placeholder="*****"
                                name="postcode"
                            />
                            <span className="error_message">{this.state.errors.postcode_error}</span>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <label htmlFor="email">Date of Birth (required):</label>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                disabledKeyboardNavigation
                                name="dateofbirth"
                                dateFormat="YYYY/MM/DD"
                            />
                            <span className="error_message">{this.state.errors.date_error}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button type="submit" value="Submit"
                                    className="btn btn-primary" onClick={this.submitData}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
