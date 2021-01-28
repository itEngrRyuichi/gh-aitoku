import React from "react";
import { Helmet } from "react-helmet";
import logolove from "./pics/logolove.jpg";

class Head extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <link rel="icon" href={logolove} />
                    <meta charSet="utf-8" />
                    <meta name="google-site-verification" content="ym6_1XKOzOZ7W4q6QZ6n4GKT3iTM-S0yPcaF2v5zc0w" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Helmet>
            </>
        );
    }
}

export default Head;