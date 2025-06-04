"use client"

import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gsap: React.FC = () => {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const tween = gsap.to(boxRef.current, { x: 100, paused: true });
    tween.play();
    tween.reverse();
    tween.restart();

    return (
        <>
            <div
                ref={boxRef}
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "red",
                    margin: "50px",
                }}
            >
                Box
            </div>
        </>
    );
};

export default Gsap;
