import { Link, useActionData } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function  ListSec1(){
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
        
                </div>
                <p>{item.courseDesc}</p>
                {/* <div> <Link to='/Detail'>  <button> View Details </button></Link></div>
                <div> <Link to='/Review'>  <button> Add Review </button></Link></div> */}
                
                
            </div>
        </div>
   ))
}
        </>
        );
    }
    
export default ListSec1;
    