import React, { Component } from 'react';

import ClientNavigation from './clientNavigation.component';
import ReserveCat from './reserveCat.component';
import Footer from './footer';
import { Fragment } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    componentDidMount() {
    }

    render() {
        return (
            <Fragment>
                <div className="main">
                    <ClientNavigation />
                    <ReserveCat />
                </div>
                <Footer />
            </Fragment>
        );
    }
}