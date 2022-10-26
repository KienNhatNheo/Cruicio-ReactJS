import React, { useState,useEffect } from "react";
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

const classify = [{
        name: "All",
        img_id:[1,2,3,4,5,6,7,8]
    },
   {
        name:"Graphic Design",
        img_id:[1,2,3]
    },{
        name:"Web Design",
        img_id:[4,5,6]
    },{
        name:"Web Development",
        img_id:[7,8]
}]
export default function Project(){
    const [type,setType] = useState('All')
    const [imgstored,setImgstored] = useState(classify[0].img_id)
    useEffect(() => { 
        
    }, [type])
    
    const [gototop, setGototop] = useState(false);
    useEffect(()=>{
        const handleScoll = () => {
            if(window.scrollY >= 3300){
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
                <div id="portfolio" className="service">
			    <div className="service-header">OUR PORTFOLIO</div>
			    <div className="service-hr"></div>
			    <div className="task-bar">

                {classify.map((item,index)=>(
                    <div key={index} className="task-item " 
                    onClick={()=>(
                        setType(item.name),setImgstored(item.img_id))
                    }>{item.name}</div>
                ))}
			    </div>
			    <div className="material">
                {imgstored.map((item,index)=>(
                  <>
                    <div className="m-out">
					<div className={"mtr-" + item}>
						<div className="ps">
							<div className="m-name big">{project[item-1].name}</div>
							<div className="m-role">{project[item-1].des}</div>
						</div>
					</div>
				</div>
                  </>  
                ))}
            </div>
			    <div className="mbutton-bg">
				<div className="material-button" onClick={()=>(setType("All"),setImgstored(classify[0].img_id))}>LOAD MORE</div>
			</div>
		    </div>
            )}
        </>
    );     
}