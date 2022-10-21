import React from "react";
import "../css/JobAttributed.css";

const attributed = [{
    title: 'RESPONSIVE',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.'
},{
    title: 'CUSTOMIZABLE',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.'
},{
    title: 'MODERN',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.'
}]
export default function JobAttributed(){
    return (
            <div className="moreover">
                {attributed.map((item,index)=> (
                        <>
                            <div key={index} className= {"m-item color-"+ ++index }>
                                <div key={index+1} className="item-header">{item.title}</div>
                                <div key={index+2} className="item-content">{item.content}</div>
                            </div>
                        </>))
                }
            </div>          
    );   
}