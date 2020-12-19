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

        canvas.width = window.innerWidth / 3 * 2;
        canvas.height = window.innerHeight;
        
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
    }

    forthFloor() {
        const canvas = this.refs.forth;
        const ctx = canvas.getContext("2d");

        const boldLine = 3;
        const Line = 1;
        const tinyLine = 0.5;

        canvas.width = window.innerWidth / 3 * 2;
        canvas.height = window.innerHeight / 3 * 2;
        
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
            <>
                <label>3階 平面図</label>
                <br />
                <canvas ref='third'/>
                <br />
                <label>4階 平面図</label>
                <br />
                <canvas className="py-5" ref='forth'/>
            </>
        )
    }
}