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
                    <title>aitoku 愛徳</title>
                </Helmet>
            </>
        );
    }
}

export default Head;