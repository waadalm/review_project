
function  Section3(props){
    return (
       
        <div class="testimonial-box">
        {/* <!--top-------------------------> */}
        <div class="box-top">
            {/* <!--profile-----> */}
            <div class="profile">
                {/* <!--name-and-username--> */}
                <div class="name-user">
                    <h3>{props.Rname}</h3>
                </div>
            </div>
            {/* <!--reviews------> */}
            <div class="reviews">
                <i className={props.Rate1}></i>
                <i className={props.Rate2}></i>
                <i className={props.Rate3}></i>
                <i className={props.Rate4}></i>
                <i className={props.Rate5}></i>    {/*<!--Empty star--> */}
                {/* <i class="fas fa-star"></i>
                        <i class="far fa-star"></i> */}
            </div>
        </div>
        {/* <!--Comments----------------------------------------> */}
        <div class="client-comment">
            <p>{props.Rcomment}</p>
        </div>
    </div>


        );
    }
    
export default Section3;
    