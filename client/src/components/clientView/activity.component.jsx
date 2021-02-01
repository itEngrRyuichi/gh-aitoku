import React, { Component, Fragment } from 'react';
import ClientNavigation from './clientNavigation.component';
import ReserveCat from './reserveCat.component';
import Footer from './footer';

export default class Activity extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <div className="main">
                    <ClientNavigation
                        animated={false}
                        page={'activity'} />
                    <ReserveCat animated={false} />
                    <h1 className="main-title text-center">周辺案内</h1>
                </div>
                <Footer />
            </Fragment>
        );
    }
}