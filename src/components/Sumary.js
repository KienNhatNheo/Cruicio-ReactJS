import React, { useEffect, useState } from "react";
import "../css/Sumary.css";

const sumary = [{
	num: 150,
	role: 'Clients'
},{
	num: 620,
	role: 'Projects'
},{
	num: 25,
	role: 'Awards'
},{
	num: 940,
	role: 'Coffee'
}]

export default function Sumary(){
	// const [sumary,setData] = useState();
	// const incre = (pre,dist) =>{
	// 	pre = pre+dist
	// }
	// useEffect(() => {
    //     // const [positonY, setPositonY] = useState(0);
    //     // let step = 0;
    //     if (scrollY > 3000) {
    //         let interval = setInterval(() => {
    //             setstep(++step);
    //             if (step < 100)
    //                 setData([{
	// 					num: incre(num,20),
	// 					role: 'Clients'
	// 				},{
	// 					num: incre(num,50),
	// 					role: 'Projects'
	// 				},{
	// 					num: incre(num,1),
	// 					role: 'Awards'
	// 				},{
	// 					num: incre(num,),
	// 					role: 'Coffee'
	// 				}]);
    //         }, 100);
    //     }
    //     if (step > 100) {
    //         clearInterval(interval);
    //     }

    //     return () => {
    //         <></>;
    //     };
    // }, [scrollY]);

    return (
        <div className="num-summery">
			{sumary.map((item,index)=>(
				<div className="num-item">
				<div className="number">{item.num}</div>
				<div className="role">{item.role}</div>
			</div>
			))}
			
		</div>
    );   

    
}