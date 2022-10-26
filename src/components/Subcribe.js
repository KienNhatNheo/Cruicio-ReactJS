import React from "react";
import "../css/Subcribe.css";
import { useEffect, useState } from "react";


export default function Subcribe(){
    const [gototop, setGototop] = useState(false);
    useEffect(()=>{
        const handleScoll = () => {
            if(window.scrollY >= 2000){
                setGototop(true)
            } else {
                setGototop(false)
            }
        }
        window.addEventListener('scroll',handleScoll)
    })
    return (
        <>
            {gototop && (
                <div class="block bg_white cl_black">
                    <h2>Subscribe To Our Newsletter</h2>
                    <input
                        class="email"
                        type="text"
                        placeholder="Enter your email..."
                    />
                    <button type="submit" class="up_case bg_white subcribe button">
                        subcribe
                    </button>
                </div>
            )}
        </>
    );   
    return (
        <>

            <div class="block bg_white cl_black">
                    <h2>Subscribe To Our Newsletter</h2>
                    <input
                        class="email"
                        type="text"
                        placeholder="Enter your email..."
                    />
                    <button type="submit" class="up_case bg_white subcribe button">
                        subcribe
                    </button>
        </div>
        </>
        );   
}