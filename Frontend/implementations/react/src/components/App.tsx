// Copyright Epic Games, Inc. All Rights Reserved.

import React from 'react';
import { PixelStreamingWrapper } from './PixelStreamingWrapper';
import {Slider} from './Slider';

export const App = () => {
    return (
        <div
            style={{
                height: '80%',
                width: '80%'
            }}
        >
            <PixelStreamingWrapper
                initialSettings={{
                    AutoPlayVideo: true,
                    AutoConnect: true,
                    ss: 'ws://localhost:80',
                    StartVideoMuted: true,
                    HoveringMouse: true,
                    WaitForStreamer: true
                }}
            />

            <Slider/>


        </div>
        

    );
};
