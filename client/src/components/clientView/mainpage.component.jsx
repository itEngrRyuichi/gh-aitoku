import React, { Component } from 'react';

import ClientNavigation from './clientNavigation.component';
import ReserveCat from './reserveCat.component';

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
            <div className="main">
                <ClientNavigation />
                <ReserveCat />
            </div>
        );
    }
}