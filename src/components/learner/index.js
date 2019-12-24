import React from 'react';
import '../../css/style.css';



const Learner = () => {
  const text = [
    'Good choice for Nutrition. This will be very helpful for your health...',
    'Good choice for Sewing/Knitting. This will be very helpful for your skills...',
    'Good choice for Woodworking/Whittling. This will be very helpful for your health...',
    'Good choice for Visual Art. This will be very helpful for your art skills...',
    'Good choice for Fitness/Health. This will be very helpful for your health...',
    'Good choice for Caligraphy. This will be very helpful for your writing skills...'
  ];
  return(
    <div className = 'gallery' id = 'screenshot'>
      <div className="section-title">
        <h2>Best site for extra learners</h2>
      </div>
    <table id='screen' cellspacing = '65'>
      <tr>
        <td className='imgtable'>
          <a href='#home'><img src={require('../../images/screenshot-img1.jpg')}/></a>
          <p>{text[0]}</p>
        </td>
        <td className='imgtable'>
          <a href='#home'><img src={require('../../images/screenshot-img2.jpg')}/></a>
          <p>{text[1]}</p>
        </td>
        <td className='imgtable'>
          <a href='#home'><img src={require('../../images/screenshot-img3.jpg')}/></a>
          <p>{text[2]}</p>
        </td>
      </tr>
      <tr>
        <td className='imgtable'>
          <a href='#home'><img src={require('../../images/screenshot-img4.jpg')}/></a>
          <p>{text[3]}</p>
        </td>
        <td className='imgtable'>
          <a href='#home'><img src={require('../../images/screenshot-img5.jpg')}/></a>
          <p>{text[4]}</p>
        </td>
        <td className = 'imgtable'>
          <a href='#home'><img src={require('../../images/screenshot-img6.jpg')}/></a>
          <p>{text[5]}</p>
        </td>
      </tr>
    </table>
  </div>
  );
}

export default Learner;