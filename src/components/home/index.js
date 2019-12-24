import React from 'react';
import '../../css/style.css';


const back=[
            require('../../images/home-bg.jpg'),
            require('../../images/home-bg1.jpg'), 
            require('../../images/home-bg2.jpg'),
            require('../../images/home-bg3.jpg'),
            require('../../images/home-bg4.jpg'),
            require('../../images/home-bg5.jpg'),
            require('../../images/home-bg6.jpg'),
            require('../../images/home-bg7.png')
           ];

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      back: 0,
      i : 'NULL'
    }
    this.autoimage = this.autoimage.bind(this);
    this.updateimage = this.updateimage.bind(this);
  }
  autoimage = () => {
   setTimeout(this.updateimage, 3000);
  }
  updateimage = () => {
    this.setState({ back: this.state.back + 1});
    if(this.state.back === 8) {
      this.setState({ back: 0});
    }
  }
  render() {
    this.autoimage();
    return(
      <>
      <div id="home" className="main" style = { {backgroundImage: `url(${back[this.state.back]})` } }>
       <div className="overlay"></div>
	      <div className="container">
		       <div className="row">
               <div className="wow fadeInUp col-md-6 col-sm-5 col-xs-10 col-xs-offset-1 col-sm-offset-0" data-wow-delay="0.2s">
                    <img src={ require('../../images/home-img.webp') } class="img-responsive" alt="Home" style={{width: '35%', top: '20%'}}/>
                    <img src={ require('../../images/home-img.png') } class="img-responsive" alt="Home" style={{width: '25%', top: '35%'}}/>
               </div>
              <div className="home-thumb">
                <h1 className="wow fadeInUp" data-wow-delay="0.6s">Learners / Experts</h1>
                <p className="wow fadeInUp" data-wow-delay="0.8s">The optimal way to learn various amazing skills for your beautiful life. Let us create amazing things!</p>
                <a href="#pricing"><div class="wow fadeInUp section-btn btn btn-success smoothScroll" data-wow-delay="1s">Get Started</div></a>
              </div>
		      </div>
	     </div>
      </div>
    </>
    );
  }
}


export default Home;