import React, { Component } from 'react';
export default class FloorMap extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    componentDidMount() {
        this.thirdFloor();
        this.forthFloor();
    }

    thirdFloor() {
        const canvas = this.refs.third;
        const ctx = canvas.getContext("2d");

        const boldLine = 3;
        const Line = 1;
        const tinyLine = 0.5;

        canvas.width = 1000;
        canvas.height = 1000;
        canvas.style.width  = '600px';
        canvas.style.height = '600px';
        
        ctx.strokeStyle = 'black';

        ctx.shadowColor = 'gray';
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;
        ctx.shadowBlur = 20;

        // 301
        ctx.beginPath();
       
        ctx.moveTo(50, 50);
        ctx.lineTo(230, 50);
        ctx.lineTo(230, 230);
        ctx.lineTo(50, 230);
        ctx.closePath();
        ctx.lineWidth = boldLine;
        ctx.stroke();

        ctx.font = '25px Arial';
        ctx.fillText('301', 70, 100);

        // 302
        ctx.beginPath();
        ctx.moveTo(230, 50);
        ctx.lineTo(380, 50);
        ctx.lineTo(380, 230);
        ctx.lineTo(230, 230);
        ctx.closePath();
        ctx.lineWidth = boldLine;
        ctx.stroke();

        ctx.font = '25px Arial';
        ctx.fillText('302', 250, 100);

        // 303
        ctx.beginPath();
        ctx.moveTo(380, 50);
        ctx.lineTo(560, 50);
        ctx.lineTo(560, 80);
        ctx.lineTo(590, 90);
        ctx.lineTo(590, 200);
        ctx.lineTo(560, 200);
        ctx.lineTo(560, 230);
        ctx.lineTo(380, 230);
        ctx.closePath();
        ctx.lineWidth = boldLine;
        ctx.stroke();

        ctx.font = '25px Arial';
        ctx.fillText('303', 400, 100);

        // 305
        ctx.beginPath();
        ctx.moveTo(590, 90);
        ctx.lineTo(740, 140);
        ctx.lineTo(740, 200);
        ctx.lineTo(620, 200);
        ctx.lineTo(620, 230);
        ctx.lineTo(560, 230);
        ctx.lineTo(560, 200);
        ctx.lineTo(590, 200);
        ctx.closePath();
        ctx.lineWidth = boldLine;
        ctx.stroke();

        ctx.font = '25px Arial';
        ctx.fillText('305', 610, 140);

        // 306
        ctx.beginPath();
        ctx.moveTo(395, 380);
        ctx.lineTo(620, 380);
        ctx.lineTo(620, 530);
        ctx.lineTo(395, 530);
        ctx.closePath();
        ctx.lineWidth = boldLine;
        ctx.stroke();

        ctx.font = '25px Arial';
        ctx.fillText('306', 415, 430);

        // 307
        ctx.beginPath();
        ctx.moveTo(395, 530);
        ctx.lineTo(650, 530);
        ctx.lineTo(650, 680);
        ctx.lineTo(395, 680);
        ctx.closePath();
        ctx.lineWidth = boldLine;
        ctx.stroke();

        ctx.font = '25px Arial';
        ctx.fillText('307', 415, 580);

        // 308
        ctx.beginPath();
        ctx.moveTo(230, 530);
        ctx.lineTo(395, 530);
        ctx.lineTo(395, 680);
        ctx.lineTo(230, 680);
        ctx.closePath();
        ctx.lineWidth = boldLine;
        ctx.stroke();

        ctx.font = '25px Arial';
        ctx.fillText('308', 250, 580);

        // wc1
        ctx.beginPath();
        ctx.moveTo(620, 200);
        ctx.lineTo(740, 200);
        ctx.lineTo(740, 350);
        ctx.lineTo(590, 350);
        ctx.lineTo(590, 290);
        ctx.lineTo(680, 290);
        ctx.lineTo(680, 260);
        ctx.lineTo(620, 260);
        ctx.closePath();
        ctx.lineWidth = Line;
        ctx.stroke();

        // wc2
        ctx.beginPath();
        ctx.moveTo(350, 380);
        ctx.lineTo(395, 380);
        ctx.lineTo(395, 500);
        ctx.lineTo(350, 500);
        ctx.closePath();
        ctx.lineWidth = Line;
        ctx.stroke();

        // washbassin
        ctx.beginPath();
        ctx.moveTo(425, 305);
        ctx.lineTo(590, 305);
        ctx.lineTo(590, 350);
        ctx.lineTo(425, 350);
        ctx.closePath();
        ctx.lineWidth = Line;
        ctx.stroke();

        // steps1
        ctx.beginPath();
        ctx.moveTo(50, 230);
        ctx.lineTo(200, 230);
        ctx.lineTo(200, 350);
        ctx.lineTo(50, 350);
        ctx.closePath();
        ctx.lineWidth = Line;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(200, 290);
        ctx.lineTo(110, 290);
        ctx.lineWidth = Line;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(185, 230);
        ctx.lineTo(185, 350);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(170, 230);
        ctx.lineTo(170, 350);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(155, 230);
        ctx.lineTo(155, 350);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(140, 230);
        ctx.lineTo(140, 350);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(125, 230);
        ctx.lineTo(125, 350);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        // steps2
        ctx.beginPath();
        ctx.moveTo(230, 410);
        ctx.lineTo(275, 410);
        ctx.lineTo(275, 530);
        ctx.lineTo(230, 530);
        ctx.closePath();
        ctx.lineWidth = Line;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(230, 425);
        ctx.lineTo(275, 425);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(230, 440);
        ctx.lineTo(275, 440);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(230, 455);
        ctx.lineTo(275, 455);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(230, 470);
        ctx.lineTo(275, 470);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(230, 485);
        ctx.lineTo(275, 485);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(230, 500);
        ctx.lineTo(275, 500);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(230, 515);
        ctx.lineTo(275, 515);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        // corridor
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(560, 50);
        ctx.lineTo(560, 80);
        ctx.lineTo(740, 140);
        ctx.lineTo(740, 350);
        ctx.lineTo(350, 350);
        ctx.lineTo(350, 380);
        ctx.lineTo(620, 380);
        ctx.lineTo(620, 530);
        ctx.lineTo(650, 530);
        ctx.lineTo(650, 680);
        ctx.lineTo(230, 680);
        ctx.lineTo(230, 350);
        ctx.lineTo(50, 350);
        ctx.closePath();
        ctx.lineWidth = boldLine;
        ctx.stroke();
    }

    forthFloor() {
        const canvas = this.refs.forth;
        const ctx = canvas.getContext("2d");

        const boldLine = 3;
        const Line = 1;
        const tinyLine = 0.5;

        canvas.width = 1000;
        canvas.height = 500;
        canvas.style.width  = '600px';
        canvas.style.height = '300px';
        
        ctx.strokeStyle = 'black';

        ctx.shadowColor = 'gray';
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;
        ctx.shadowBlur = 20;

        // 401
        ctx.beginPath();
       
        ctx.moveTo(50, 50);
        ctx.lineTo(230, 50);
        ctx.lineTo(230, 230);
        ctx.lineTo(50, 230);
        ctx.closePath();
        ctx.lineWidth = boldLine;
        ctx.stroke();

        ctx.font = '25px Arial';
        ctx.fillText('401', 70, 100);

        // 402
        ctx.beginPath();
        ctx.moveTo(230, 50);
        ctx.lineTo(380, 50);
        ctx.lineTo(380, 230);
        ctx.lineTo(230, 230);
        ctx.closePath();
        ctx.lineWidth = boldLine;
        ctx.stroke();

        ctx.font = '25px Arial';
        ctx.fillText('402', 250, 100);

        // 403
        ctx.beginPath();
        ctx.moveTo(380, 50);
        ctx.lineTo(560, 50);
        ctx.lineTo(560, 80);
        ctx.lineTo(590, 90);
        ctx.lineTo(590, 200);
        ctx.lineTo(560, 200);
        ctx.lineTo(560, 230);
        ctx.lineTo(380, 230);
        ctx.closePath();
        ctx.lineWidth = boldLine;
        ctx.stroke();

        ctx.font = '25px Arial';
        ctx.fillText('403', 400, 100);

        // 405
        ctx.beginPath();
        ctx.moveTo(590, 90);
        ctx.lineTo(740, 140);
        ctx.lineTo(740, 200);
        ctx.lineTo(620, 200);
        ctx.lineTo(620, 230);
        ctx.lineTo(560, 230);
        ctx.lineTo(560, 200);
        ctx.lineTo(590, 200);
        ctx.closePath();
        ctx.lineWidth = boldLine;
        ctx.stroke();

        ctx.font = '25px Arial';
        ctx.fillText('405', 610, 140);

        // wc
        ctx.beginPath();
        ctx.moveTo(620, 200);
        ctx.lineTo(740, 200);
        ctx.lineTo(740, 350);
        ctx.lineTo(590, 350);
        ctx.lineTo(590, 290);
        ctx.lineTo(680, 290);
        ctx.lineTo(680, 260);
        ctx.lineTo(620, 260);
        ctx.closePath();
        ctx.lineWidth = Line;
        ctx.stroke();

        // washbassin
        ctx.beginPath();
        ctx.moveTo(425, 305);
        ctx.lineTo(590, 305);
        ctx.lineTo(590, 350);
        ctx.lineTo(425, 350);
        ctx.closePath();
        ctx.lineWidth = Line;
        ctx.stroke();

        // steps
        ctx.beginPath();
        ctx.moveTo(50, 230);
        ctx.lineTo(200, 230);
        ctx.lineTo(200, 350);
        ctx.lineTo(50, 350);
        ctx.closePath();
        ctx.lineWidth = Line;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(200, 290);
        ctx.lineTo(110, 290);
        ctx.lineWidth = Line;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(185, 230);
        ctx.lineTo(185, 350);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(170, 230);
        ctx.lineTo(170, 350);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(155, 230);
        ctx.lineTo(155, 350);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(140, 230);
        ctx.lineTo(140, 350);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(125, 230);
        ctx.lineTo(125, 350);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(110, 230);
        ctx.lineTo(110, 350);
        ctx.lineWidth = tinyLine;
        ctx.stroke();

        // corridor
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(560, 50);
        ctx.lineTo(560, 80);
        ctx.lineTo(740, 140);
        ctx.lineTo(740, 350);
        ctx.lineTo(50, 350);
        ctx.closePath();
        ctx.lineWidth = 3;
        ctx.stroke();

    }

    render() {
        
        return(
            <div className="row py-2">
                <div className="col-lg-6 col-12">
                    <label>3階</label>
                    <br />
                    <canvas ref='third'/>
                </div>
                <div className="col-lg-6 col-12">
                    <label>4階</label>
                    <br />
                    <canvas ref='forth'/>
                </div>
            </div>
        )
    }
}