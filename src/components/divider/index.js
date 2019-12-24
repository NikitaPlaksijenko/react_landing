import React from 'react';
import '../../css/style.css';


const Divider = () => {
  return(
    <div id='divider'>
      <div class="container">
          <div class="row">
               <div class="col-md-offset-2 col-md-8 col-sm-12">
                    <p class="wow fadeInUp" data-wow-delay="0.4s">The best resource for students looking to excel in the college app process, and for counselors to broaden their student base. X-Purt is your one stop shop for college applications!</p>
                    <a href="#pricing"><div  class="wow fadeInUp section-btn btn btn-success smoothScroll" data-wow-delay="0.8s">Learn More</div></a>
               </div>
          </div>
      </div>
    </div>
  );
}

export default Divider;