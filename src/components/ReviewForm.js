import React from 'react';
import {useState} from 'react';
import axios from 'axios';

function  ReviewForm(props){

  const [username, setUsername] = useState("");
  const [reviewRate, setReviewRate] = useState("");
  const [reviewComment, setReviewComment] = useState("");



    return (
<>
<header class="ScriptHeader">
    <div class="rt-container">
    	<div class="col-rt-12">
        	<div class="rt-heading">
            	<h1>Review Form </h1>
            </div>
        </div>
    </div>
</header>

<section>
    <div className="rt-container">
          <div className="col-rt-12">
              <div className="Scriptcontent">
              
       
<div className="feedback">
<form name="contact-form" onSubmit={(e)=> {e.preventDefault(); axios.post("http://localhost:2400/addReview",{username,reviewRate,reviewComment})}}>
<p>Please Enter your name</p>
<label> <input value={username} onChange={(e)=>{setUsername(e.target.value); console.log(username);}} id="username" type ="text"/> </label>

<p>Please Provide your rating</p><br/>


<div class="star-rating" value={reviewRate} onChange={(e)=>{setReviewRate(e.target.value); console.log(reviewRate);}} id="reviewRate">
  <input type="radio" name="rating1" value="1"/><i></i>
  <input type="radio" name="rating1" value="2"/><i></i>
  <input type="radio" name="rating1" value="3"/><i></i>
  <input type="radio" name="rating1" value="4"/><i></i>
  <input type="radio" name="rating1" value="5"/><i></i>
</div>

  <div class="clear"></div> 
  <hr class="survey-hr"/>

<br/>
<p>4. Any Other suggestions:</p>
<br/>
{/* <input value={reviewComment} onChange={(e)=>{setReviewComment(e.target.value); console.log(reviewComment);}} id="reviewComment" type ="textarea" cols="300" name="commentText" rows="5" / >  */}

<textarea value={reviewComment} onChange={(e)=>{setReviewComment(e.target.value); console.log(reviewComment);}} id="reviewComment"  cols="100" name="commentText" rows="5" />

 
  <input type="submit" value="Submit Review" />
  


</form>
                
           
    		</div>
		</div>
    </div>
    </div>
    

</section>



        
</>
        );
    }
    
export default ReviewForm;
    