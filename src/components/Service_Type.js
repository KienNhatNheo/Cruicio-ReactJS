import React from "react";
import "../css/Service_Type.css";

const serviceType1 = [{
    icon: 'ion:desktop-outline',
    name: 'WEB DESIGN'
},{
    icon: 'ion:albums',
    name: 'BRAND DESIGN'
},{
    icon: 'eva:keypad-fill',
    name: 'UI/UX DESIGN'
},{
    icon: 'ion:color-palette',
    name: 'GRAPHIC DESIGN'
}]
const serviceType2 = [{
    icon: 'ant-design:camera-filled',
    name: 'PHOTOGRAPHY'
},{
    icon: 'ic:baseline-videocam',
    name: 'VIDEO EDITING'
},{
    icon: 'ion:pulse',
    name: 'DATA ANALYSIS'
},{
    icon: 'bi:person-fill',
    name: 'CLIENT ASSISTANCE'
}]
export default function Service_Type(){
    return (
    <>
        <div className="service-category">
            {serviceType1.map((item,index)=>
           ( <>
            <div className="service-item">
                <iconify-icon icon={item.icon}></iconify-icon>
                <div className="service-name">{item.name}</div>
            </div>
            </>)
        )}
        </div>
        <div className="service-category">
        {serviceType2.map((item1,index)=>
           ( <>
            <div className="service-item">
                <iconify-icon icon={item1.icon}></iconify-icon>
                <div className="service-name">{item1.name}</div>
            </div>
            </>))
        }</div>
    </>
        

        
    );   
}