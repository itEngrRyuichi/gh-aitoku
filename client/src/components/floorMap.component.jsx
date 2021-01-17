import React, { Component, Fragment } from 'react';

export default class FloorMap extends Component {
    /* constructor(props) {
        
        this.state = {
        };
    } */
    
    componentDidMount() {
        this.thirdFloor();
    }

    thirdFloor() {
        // Room 301
        const canvasRoom301 = this.refs.room301;
        const ctxRoom301 = canvasRoom301.getContext("2d");
        ctxRoom301.fillText('301', 20, 40);
        ctxRoom301.fillText('4人部屋', 20, 60);

        // Room 302
        const canvasRoom302 = this.refs.room302;
        const ctxRoom302 = canvasRoom302.getContext("2d");
        ctxRoom302.fillText('302', 20, 40);
        ctxRoom302.fillText('4人部屋', 20, 60);

        // Room 303
        const canvasRoom303 = this.refs.room303;
        const ctxRoom303 = canvasRoom303.getContext("2d");
        ctxRoom303.fillText('303', 20, 40);
        ctxRoom303.fillText('4人部屋', 20, 60);

        // Room 305
        const canvasRoom305 = this.refs.room305;
        const ctxRoom305 = canvasRoom305.getContext("2d");
        
        canvasRoom305.width = 120;
        canvasRoom305.height = 120;
        canvasRoom305.style.width  = '120px';
        canvasRoom305.style.height = '120px';

        ctxRoom305.beginPath();
        ctxRoom305.moveTo(0, 20);
        ctxRoom305.lineTo(100, 20);
        ctxRoom305.lineTo(100, 120);
        ctxRoom305.lineTo(0, 120);
        ctxRoom305.closePath();
        ctxRoom305.lineWidth = 3;
        ctxRoom305.stroke(); 
        ctxRoom305.fillStyle = 'black';
        ctxRoom305.font = '18px Arial';
        ctxRoom305.fillText('305', 15, 70);
        ctxRoom305.fillText('2人部屋', 15, 90);

        // Third Floor Corridor
        const canvasThirdFloorCorridor = this.refs.thirdFloorCorridor;
        const ctxThirdFloorCorridor = canvasThirdFloorCorridor.getContext("2d");
        
        canvasThirdFloorCorridor.width = 480;
        canvasThirdFloorCorridor.height = 120;
        canvasThirdFloorCorridor.style.width  = '480px';
        canvasThirdFloorCorridor.style.height = '120px';

        ctxThirdFloorCorridor.beginPath();
        ctxThirdFloorCorridor.moveTo(0, 0);
        ctxThirdFloorCorridor.lineTo(460, 0);
        ctxThirdFloorCorridor.lineTo(460, 80);
        ctxThirdFloorCorridor.lineTo(0, 80);
        ctxThirdFloorCorridor.closePath();
        ctxThirdFloorCorridor.lineWidth = 1;
        ctxThirdFloorCorridor.stroke();
        ctxThirdFloorCorridor.fillStyle = 'black';

    }
    
    render() {
        return(
            <div className="row py-2">
                <div className="col-lg-6 col-12">
                    <label>3階</label>
                    <br />
                    <canvas ref='room301' style={{
                        display: 'inline-block',
                        margin: '0px'
                    }} />
                    <canvas ref='room302' style={{
                        display: 'inline-block',
                        margin: '0px'
                    }} />
                    <canvas ref='room303' style={{
                        display: 'inline-block',
                        margin: '0px'
                    }} />
                    <canvas ref='room305' style={{
                        display: 'inline-block',
                        margin: '0px'
                    }} />
                    <canvas ref='thirdFloorCorridor' style={{
                        display: 'inline-block',
                        margin: '0px'
                    }} />
                    <canvas ref='room306' />
                    <canvas ref='room307' />
                    <canvas ref='room308' />
                    <canvas ref='room3rdOthers' />
                </div>
                <div className="col-lg-6 col-12">
                    <label>4階</label>
                </div>
            </div>
        )
    }

}