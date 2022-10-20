import React from "react";
import "../css/Shareholder.css";

const img_src = ['https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client1-150x150.png', 
                'https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client2-150x150.png', 
                'https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client3-132x150.png', 
                'https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client4.png', 
                'https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client5.png', 
                'https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client6.png']

export default function Shareholder(){
    return (
        <>
            <div className="shareholder">
                <div className="img-logo">
                    {img_src.map((item,index)=>(
                        <img key={index} src={item} alt="logo"/>
                    ))}       
                </div>
            </div>
        </>
        );   
}