import React from "react";
import "../css/Sumary.css";


export default function Sumary(){
    return (
        <div className="num-summery">
			<div className="num-item">
				<div className="number">150</div>
				<div className="role">Clients</div>
			</div>
			<div className="num-item">
				<div className="number">620</div>
				<div className="role">Projects</div>
			</div>
			<div className="num-item">
				<div className="number">25</div>
				<div className="role">Awards</div>
			</div>
			<div className="num-item">
				<div className="number">940</div>
				<div className="role">Coffee</div>
			</div>
		</div>
    );   
}