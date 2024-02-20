import React, { useEffect, useRef, useState } from 'react';
import '../css/Slider.css';


export const Slider = () => {
    let slider = document.getElementById("myRange");
    let output = document.getElementById("demo");

    return( 
        <div className="slidecontainer">
          <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
        </div>
    );
};


