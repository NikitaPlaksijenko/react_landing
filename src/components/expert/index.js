import React from 'react';
import '../../css/style.css';



class Expert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 25,
      hours: 5,
      total: 125
    };
    this.autocalc = this.autocalc.bind(this);
  }

  autocalc = () => {
    const a = this.state.rating;
    const b = this.state.hours;
    const c = a * b;
    if (c !== this.state.total) {
      this.setState({ total: c });
    }
    if (a === '') {
      this.setState({ rating: 25 });
    }
    if (b === '') {
      this.setState({ hours: 5 });
    }
    if (a < 0) {
      this.setState({ rating: 0 });
    }
    if (b < 0) {
      this.setState({ hours: 0 });
    }
  }

  render() {
    this.autocalc();
    return (
      <div id="pricing">
        <div className="section-title">
          <h2>Telanted Experts</h2>
        </div>
        <table cellspacing='65'>
          <tr>
            <td>
              <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.4s">
                <div className="pricing-plan">
                  <div className="pricing-month">
                    <h2>$20/hr</h2>
                  </div>
                  <div className="pricing-title">
                    <h5>Jhonny</h5>
                  </div>
                  <p>40 Learners</p>
                  <p>Woodworking Expert</p>
                  <p>Unlimited Support</p>
                  <p>4K+ earned</p>
                </div>
              </div>
            </td>
            <td>
              <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">
                <div className="pricing-plan">
                  <div className="pricing-month">
                    <h2>$30/hr</h2>
                  </div>
                  <div className="pricing-title">
                    <h5>Steve</h5>
                  </div>
                  <p>50 Learners</p>
                  <p>Sewing Expert</p>
                  <p>30+hrs/week</p>
                  <p>5K+ earned</p>
                </div>
              </div>
            </td>
            <td>
              <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.8s">
                <div className="pricing-plan">
                  <div className="pricing-month">
                    <h2>$25/hr</h2>
                  </div>
                  <div className="pricing-title">
                    <h5>Aurora</h5>
                  </div>
                  <p>200 Learners</p>
                  <p>Fitness Trainer</p>
                  <p>30+hr/week</p>
                  <p>10K+ earned</p>
                </div>
              </div>
            </td>
          </tr>
        </table>
        <table id='info' style={{ width: '50vw', marginTop: '-10px', marginLeft: '10%' }}>
          <tr>
            <td>
              <div >
                <p>Hourly Price:</p><input type="number" className="form-control" placeholder='$ 25' onChange={(e) => this.setState({ rating: e.target.value })} />
              </div>
              <div >
                <p>Hours worked per week:</p><input type="number" className="form-control" placeholder='5 hours' onChange={(e) => this.setState({ hours: e.target.value })} />
              </div>
            </td>
            <td>
              <button name="submit" type="button" id="total">
                <h2>${this.state.total}</h2>
                <h6>Weekly Average</h6></button>
            </td>
          </tr>
          <tr>
            <td>
              <a href='#home'><button id='registerbutton'>Register now</button></a>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}


export default Expert;