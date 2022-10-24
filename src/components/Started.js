import React from "react";
import "../css/Started.css";
import { useEffect,useState } from "react";

export default function Started(){
    const [gototop, setGototop] = useState(false);
    useEffect(()=>{
        const handleScoll = () => {
            if(window.scrollY >= 1000){
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
                <div class="started">
                    <div class="started-content">WE CREATE AWESOME PROJECTS</div>
                    <div class="started-button">GET STARTED</div>
                </div>
            )}
        </>
    );   
}
