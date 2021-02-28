import React, { Component, Fragment } from 'react';
import MainPage from './clientView/mainpage.component';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <MainPage />
            </Fragment>
        );
    }
}