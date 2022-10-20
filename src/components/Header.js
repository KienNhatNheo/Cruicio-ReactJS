import React from "react";
import "../css/Header.css";

export default function Header(){
    const content = ['HOME','ABOUT','SERVICES','TEAM','PORTFOLIO','BLOG','CONTACT'];
    return (
    <div id="header">
        <div className="header-ct1">
            <a href="#"><img className="logo" src="https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg"/></a>
            <button className="btn">Buy now</button>
        </div>
        <div className="header-ct2">
            <a href="#"><img src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/05/logo-1.png"/></a>
            <div className="navbar-collapse">
                <ul className="navbar-nav">
                   {content.map((item,index) => 
                     (<li className="nav-item" key={index}>
                    <a className="nav-link" href="#">{item}</a>
                </li>)
                   )}
                </ul>
            </div>
        </div>
    </div>
);   
}