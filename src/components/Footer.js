
import React from "react";
import "../css/Footer.css";

const icon = ['bxl:facebook-square','akar-icons:twitter-fill','akar-icons:instagram-fill','akar-icons:linkedin-box-fill','akar-icons:dribbble-fill','akar-icons:youtube-fill']

export default function Footer(){
    return (
        <>
            <div class="footer">
                <div>
                    <a href="#"><img src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/05/logo-1.png" alt="logo"/></a>
                </div>
                <div class="logo-task">
                    <ul>
                        {icon.map((icon,index)=>(
                            <li><a href="#"><iconify-icon icon={icon}></iconify-icon></a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div class="footer-end">
                © 2017. Crucio. All Rights Reserved.
            </div>
        </>
        );   
}