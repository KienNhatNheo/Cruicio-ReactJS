import React from "react";
import "../css/Project.css";

const project = [{
    name:'Project #1',
    des:'Project Description'
},{
    name:'Project #2',
    des:'Project Description'
},{
    name:'Project #3',
    des:'Project Description'
},{
    name:'Project #4',
    des:'Project Description'
},{
    name:'Project #5',
    des:'Project Description'
},{
    name:'Project #6',
    des:'Project Description'
},{
    name:'Project #7',
    des:'Project Description'
},{
    name:'Project #8',
    des:'Project Description'
}]

export default function Project(){
    return (
        <>
            <div id="portfolio" className="service">
			    <div className="service-header">OUR PORTFOLIO</div>
			    <div className="service-hr"></div>
			    <div className="task-bar">
				<div className="task-item active">All</div>
				<div className="task-item">Graphic Design</div>
				<div className="task-item">Web Design</div>
				<div className="task-item">Web Development</div>
			    </div>
			    <div className="material">
                {project.map((item,index)=>(
                  <>
                    <div className="m-out">
					<div className={"mtr-" + ++index}>
						<div className="ps">
							<div className="m-name big">{item.name}</div>
							<div className="m-role">{item.des}</div>
						</div>
					</div>
				</div>
                  </>  
                ))}
            </div>
			    <div className="mbutton-bg">
				<div className="material-button">LOAD MORE</div>
			</div>
		    </div>
        </>
        );   
}