import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
/* import Ready from './ready.component'; */
import MainPage from './clientView/mainpage.component';
import ogpics from "../pics/ogpics.jpg";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>ゲストハウス愛徳 | 公式ホームページ</title>
                    <meta name="description" content="「ただいま」って言いたくなるあたたかい宿泊施設です。野沢温泉村、ゲストハウス愛徳で宿泊しませんか？ ゲレンデまで徒歩1分。スキーシーズンもグリーンシーズンも楽しもう！スキー、スノーボードは勿論、夏は涼しく自然の中でリモートワークも最適！" />
                    <meta name="copyright" content="ゲストハウス愛徳"></meta>
                    {/* OGP Tag */}
                    <meta property="og:title" content="ゲストハウス愛徳" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://guesthouseaitoku.herokuapp.com/" />
                    <meta property="og:image" content={ogpics} />
                    <meta property="og:site_name" content="ゲストハウス愛徳" />
                    <meta property="og:description" content="「ただいま」って言いたくなるあたたかい宿泊施設。野沢温泉村、ゲストハウス愛徳で宿泊しませんか？ ゲレンデまで徒歩1分。スキースノボは勿論、夏は涼しく自然の中でリモートワークも最適！" />
                </Helmet>
                {/* <Ready /> */}
                <MainPage />
            </Fragment>
        );
    }
}