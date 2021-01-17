import React, { Component, Fragment } from 'react';

export default class FloorMap extends Component {
    /* constructor(props) {
        
        this.state = {
        };
    } */
    
    componentDidMount() {
        this.thirdFloor();
    }

    commonBoxStyles(canvas, ctx) {
        canvas.width = 120;
        canvas.height = 120;
        canvas.style.width  = '120px';
        canvas.style.height = '120px';
        ctx.fillStyle = 'black';
        ctx.font = '18px Arial';
    }

    commonRectStyles(canvas, ctx) {
        canvas.width = 240;
        canvas.height = 120;
        canvas.style.width  = '240px';
        canvas.style.height = '120px';
        ctx.fillStyle = 'black';
        ctx.font = '18px Arial';
    }

    thirdFloor() {
        // Room 301
        const canvasRoom301 = this.refs.room301;
        const ctxRoom301 = canvasRoom301.getContext("2d");
        this.commonBoxStyles(canvasRoom301, ctxRoom301);
        ctxRoom301.fillText('301', 20, 40);
        ctxRoom301.fillText('4人部屋', 20, 60);

        // Room 302
        const canvasRoom302 = this.refs.room302;
        const ctxRoom302 = canvasRoom302.getContext("2d");
        this.commonBoxStyles(canvasRoom302, ctxRoom302);
        ctxRoom302.fillText('302', 20, 40);
        ctxRoom302.fillText('4人部屋', 20, 60);

        // Room 303
        const canvasRoom303 = this.refs.room303;
        const ctxRoom303 = canvasRoom303.getContext("2d");
        this.commonBoxStyles(canvasRoom303, ctxRoom303);
        ctxRoom303.fillText('303', 20, 40);
        ctxRoom303.fillText('4人部屋', 20, 60);

        // Room 305
        const canvasRoom305 = this.refs.room305;
        const ctxRoom305 = canvasRoom305.getContext("2d");
        this.commonBoxStyles(canvasRoom305, ctxRoom305);
        ctxRoom305.fillText('305', 15, 70);
        ctxRoom305.fillText('2人部屋', 15, 90);

        // Third Floor Corridor
        const canvasThirdFloorCorridor = this.refs.thirdFloorCorridor;
        const ctxThirdFloorCorridor = canvasThirdFloorCorridor.getContext("2d");
        canvasThirdFloorCorridor.width = 480;
        canvasThirdFloorCorridor.height = 120;
        canvasThirdFloorCorridor.style.width  = '480px';
        canvasThirdFloorCorridor.style.height = '100px';

        // thirdSpace1
        const canvasThirdSpace1 = this.refs.thirdSpace1;
        const ctxThirdSpace1 = canvasThirdSpace1.getContext("2d");
        this.commonRectStyles(canvasThirdSpace1, ctxThirdSpace1);

        // Room 306
        const canvasRoom306 = this.refs.room306;
        const ctxRoom306 = canvasRoom306.getContext("2d");
        this.commonRectStyles(canvasRoom306, ctxRoom306);
        ctxRoom306.fillText('306', 15, 70);
        ctxRoom306.fillText('2人部屋', 15, 90);

        // thirdSpace2
        const canvasThirdSpace2 = this.refs.thirdSpace2;
        const ctxThirdSpace2 = canvasThirdSpace2.getContext("2d");
        this.commonBoxStyles(canvasThirdSpace2, ctxThirdSpace2);

        // Room 308
        const canvasRoom308 = this.refs.room308;
        const ctxRoom308 = canvasRoom308.getContext("2d");
        this.commonBoxStyles(canvasRoom308, ctxRoom308);
        ctxRoom308.font = '18px Arial';
        ctxRoom308.fillText('308', 15, 70);
        ctxRoom308.fillText('2人部屋', 15, 90);

        // Room 307
        const canvasRoom307 = this.refs.room307;
        const ctxRoom307 = canvasRoom307.getContext("2d");
        this.commonRectStyles(canvasRoom307, ctxRoom307);
        ctxRoom307.fillText('307', 15, 70);
        ctxRoom307.fillText('2人部屋', 15, 90);

    }
    
    render() {
        return(
            <div className="row py-2">
                <div className="col-lg-6 col-12">
                    <label>3階</label>
                    <br />
                    <canvas ref='room301' style={{
                    }} />
                    <canvas ref='room302' style={{
                    }} />
                    <canvas ref='room303' style={{
                    }} />
                    <canvas ref='room305' style={{
                    }} />
                    <canvas ref='thirdFloorCorridor' style={{
                    }} />
                </div>
                <div className="col-lg-6 col-12">
                    <label>4階</label>
                </div>
            </div>
        )
    }

}