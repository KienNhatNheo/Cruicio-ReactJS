import React from "react";
import { useState, useEffect } from "react";
import "../css/GoToTop.css"



export default function GoToTop(){
    const [gototop, setGototop] = useState(false);
    useEffect(()=>{
        const handleScoll = () => {
            if(window.scrollY >= 300){
                console.log(window.scrollY)
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
                <a href="#">
                    <div class="arrow"
                        style = {{
                            position: 'fixed',
                            right: 20,
                            bottom: 20,
                        }}
                    >
                    
                    </div>
                </a>    
            )}
        </>
    );   
}