import React from "react";
import "./CircleProgressBar.css"

export const CircleProgressBar = ({ now, circleWidth }) => {

    const radius = 85
    const dashArray= radius * Math.PI * 2
    const dashOffset= dashArray - (dashArray * now) / 100
    console.log(now)
  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth}`}
      >
        <defs>
            <linearGradient id="gradient">
                <stop offset="20%" stop-color="#77C9D4"/>
                <stop offset="60%" stop-color="#57BC90"/>
                
            </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-background"
        ></circle>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        ></circle>
        <text x="50%" y="50%" dy="0.3em" textAnchor="middle" className="circle-text" fill="url(#gradient)">{now}%</text>
      </svg>
    </div>
  );
};
