import React, { Component } from 'react';
import { Fragment } from 'react';
import readyImg from '../pics/ready.jpg';

export default class Ready extends Component {
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
                <div className="d-flex justify-content-center pt-5">
                    <h2 className="main-title">ゲストハウス愛徳<br />公式ホームページ</h2>
                </div>
                <div className="d-flex justify-content-center pt-5">
                    <img src={ readyImg } alt="ready"  className="readyImg" />
                </div>
                <div className="d-flex justify-content-center pt-5">
                    <a href="http://aitoku.com/">予約はこちらからお願いします</a>
                </div>
            </Fragment>
        )
    }
}