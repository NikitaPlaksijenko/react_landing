import React from 'react';
import ReactPlayer from 'react-player';
import '../../css/style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Mycarousel from './carousel.js';


const headtext = [

]


class About extends React.Component {

  render() {
    return (
      <div id="about">
        <div className="section-title">
          <h2>Why X-Purt?</h2>
        </div>
        <table cellspacing='65'>
          <tr>
            <td >
              <div className = 'what'>
                <p  style={{ fontSize: '24px', color: '#333333' }}>What is X-purt?</p>
                <p  style={{ fontSize: '20px' }}>X-Purt is a mobile and web platform designed to connect high schoolers to the resources and counselors they need to navigate the college applications process. Started by Stanford students passionate about education, and built with input from dozens of Professional Counselors, X-Purt is the platform that we wish that we had in high school.</p>
              </div>
            </td>
            <td>
              <div className = 'what'>
                <ReactPlayer url={require('../../images/schoolbudd.mp4')} playing={false}  controls />
              </div>
            </td>
          </tr>
          <tr >
            <td colspan='2'>
              <div className = 'why'>
              <p  style={{ fontSize: '24px', color: '#333333', textAlign: 'center' }}>What Learn with X-purt?</p>
              <Mycarousel headtext1='"I am so happy I found the website!"' bodytext1='It was really calming to be able to talk to a student. I was really stressed about the process but just talking to someone who had gone through the process really recently was dope. I highly recommend using SchoolBudd!' />
              </div>
            </td>
          </tr>
          <tr >
            <td colspan='2'>
              <div className = 'why'>
              <p  style={{ fontSize: '24px', color: '#333333', textAlign: 'center' }}>Can I be an Expert?</p>
              <Mycarousel headtext1='"I am so happy I found the website!"' bodytext1='It was really calming to be able to talk to a student. I was really stressed about the process but just talking to someone who had gone through the process really recently was dope. I highly recommend using SchoolBudd!' />
              </div>
            </td>
          </tr>
          <tr>
            <td colspan='2'>
              <div className = 'why'>
              <p  style={{ fontSize: '24px', color: '#333333', textAlign: 'center' }}>Why Should I Use X-Purt?</p>
              <Mycarousel headtext1='"I am so happy I found the website!"' bodytext1='It was really calming to be able to talk to a student. I was really stressed about the process but just talking to someone who had gone through the process really recently was dope. I highly recommend using SchoolBudd!' />
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}




export default About;








