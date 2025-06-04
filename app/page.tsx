"use client"
import { useState } from "react"
import Gsap from "@/components/gasp"

export default function Home() {
    const [gsap, setgsap] = useState<boolean>(true)
    return (
        <>
            <button onClick={() => setgsap(!gsap)}> play/pause</button>
            {(!gsap) ?
                <Gsap />
                :
                <h1>hi ah*s*an</h1>
            }
        </>
    );
}
