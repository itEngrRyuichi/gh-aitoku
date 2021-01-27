import React from "react";
import { Helmet } from "react-helmet";
import logolove from "./pics/logolove.jpg";
import ogpics from "./pics/ogpics.jpg";

class Head extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <link rel="icon" href={logolove} />
                    <title>aitoku 愛徳</title>
                    <meta charSet="utf-8" />
                    <meta name="google-site-verification" content="ym6_1XKOzOZ7W4q6QZ6n4GKT3iTM-S0yPcaF2v5zc0w" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            </>
        );
    }
}

export default Head;