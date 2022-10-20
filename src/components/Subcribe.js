import React from "react";
import "../css/Subcribe.css";



export default function Subcribe(){
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