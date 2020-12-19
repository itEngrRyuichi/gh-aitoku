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
        canvas.width = window.innerWidth / 2;
        canvas.height = window.innerHeight / 2;
        // fillText ()
        ctx.font = '25px Arial';
        ctx.fillStyle = 'purple';
        ctx.fillText('Hello World', 10, 50);
    }

    forthFloor() {
        const canvas = this.refs.forth;
        const ctx = canvas.getContext("2d");

        const boldLine = 1;
        const Line = 0.5;

        canvas.width = window.innerWidth / 2;
        canvas.height = window.innerHeight / 2;
        
        ctx.strokeStyle = 'black';

        ctx.shadowColor = 'gray';
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;
        ctx.shadowBlur = 10;

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

        ctx.font = '15px Arial';
        ctx.fillText('WC', 640, 250);

        // washbassin
        // corridor
        // steps

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
                <canvas ref='forth'/>
            </>
        )
    }
}