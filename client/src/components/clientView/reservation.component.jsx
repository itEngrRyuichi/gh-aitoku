import React, { Component, Fragment } from 'react';
import ClientNavigation from './clientNavigation.component';
import ReserveCat from './reserveCat.component';
import Footer from './footer';

export default class Reservation extends Component {
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
                        page={'reservation'} />
                    <h1 className="main-title text-center">予約</h1>
                </div>
                <Footer />
            </Fragment>
        );
    }
}