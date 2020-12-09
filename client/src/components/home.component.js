import React, { Component, Fragment } from 'react';
import CustomerNavbar from './navbar.component';
import showup1 from '../pics/homeslide/showup1.jpg';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <CustomerNavbar />
                <img className="showuppics" src={showup1} alt="showup" />
            </Fragment>
        );
    }
}