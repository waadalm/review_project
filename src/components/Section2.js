import { useEffect, useState } from "react";
import axios from "axios";


function  Section2(){

        // make container
const [allItems, setAllItems] = useState("");
useEffect(()=>{
    axios.get("http://localhost:2400/getItems")
    .then((res)=>{setAllItems(res.data)})
},[]);

return (
    <>
    {
         allItems && allItems.map((item)=>(

            <div className="wow fadeInUp col-md-6 col-sm-6" data-wow-delay="0.4s">
            <div className="pricing-plan">
                <div className="pricing-month">
                <img  className="img-responsive" src={item.imageLink} />
                </div>
                <div className="pricing-title">
                <h3>{item.courseName}</h3>
                <p>{item.courseDesc}</p>
                <h3>{item.courseDuration}</h3>
                <h5>{item.cStartDate}</h5>
                <h5>{item.cEndDate}</h5>
                <h5>{item.cLevel}</h5>
               
                    
                
                       
                </div>
        </div>
        </div>
 ))
}
</>
);
}
    
export default Section2;
    