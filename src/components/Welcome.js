import React from "react";
import "../css/Welcome.css";

export default function Welcome(){
    return (
        <div class="welcome">
			<div className="welcome-header">WELCOME TO <font color="purple" >CRUCIO</font></div>
			<div className="welcome-intro">WE CREATE AWESOME WEBSITES</div>
			<div className="welcome-content">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
		</div>
    );
}