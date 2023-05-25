import { useEffect, useState } from "react";
import axios from "axios";

function  Section1(){

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
        
        <div className="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
         <img src={item.imageLink} className="img-responsive" alt="Course"/>

    </div>
        ))
    }
    </>
);
}
    
export default Section1;
    