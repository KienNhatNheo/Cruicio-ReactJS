import React from "react";
import "../css/TeamMember.css";
import { useState, useEffect } from "react";

const member = [{
    name: 'SAMANTA L.',
    role: 'Architeck'
},{
    name: 'PAMELA K.',
    role: 'Designer'
},{
    name: 'MICHEAL J.',
    role: 'Planner'
}
]

const icon = ['bxl:facebook-square','akar-icons:twitter-fill','akar-icons:instagram-fill','akar-icons:linkedin-box-fill']

export default function TeamMember(){


    const [gototop, setGototop] = useState(false);
    useEffect(()=>{
        const handleScoll = () => {
            if(window.scrollY >= 1800){
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
                <div id="team" className="service">
                <div className="service-header">OUR TEAM</div>
                <div className="service-hr"></div>
                <div className="member">
                    {member.map((mem,index)=>(
                        <>
                            <div className="out">
                            <div className={"member-prof" + index}>
                            <div className="ps1">
                                <div className="mem-name">{mem.name}</div>
                                <div className="mem-role">{mem.role}</div>
                                <ul>
                                    {icon.map((item,index)=>(
                                        <li><iconify-icon icon={item}></iconify-icon></li>
                                    ))}
                                </ul>
                            </div>
                            </div>
                            </div>
                        </>
                    )
                    )}
                </div>
		    </div>
            )}
        </>
    );   
      
}



