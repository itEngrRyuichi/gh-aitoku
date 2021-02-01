import React, { Component, Fragment } from 'react';
import ClientNavigation from './clientNavigation.component';
import ReserveCat from './reserveCat.component';
import Footer from './footer';

export default class Contact extends Component {
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
                        page={'contact'} />
                    <ReserveCat animated={false} />
                    <h1 className="main-title text-center">お問い合わせ</h1>
                </div>
                <Footer />
            </Fragment>
        );
    }
}