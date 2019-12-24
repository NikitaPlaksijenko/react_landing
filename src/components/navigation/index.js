import React from 'react';
import '../../css/style.css';
import Modal from 'react-modal';

const customstyle = {
  content : {
    position : 'absolute',
    top : '5%',
    bottom: '20%',
    left: '30%',
    right: '30%',
    backgroundColor: '#535bd4',
    borderRadius: '5px',
    transition : 'all 0.4s ease-in-out'
  }
}


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showmodal : false
    }
    this.modalfunction = this.modalfunction.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
  afterOpenModal = () => {
    this.subtitle.style.color = '#f00';
  } 

  modalfunction = () => {
    this.setState({ showmodal : true});
  }

  closeModal = () => {
    this.setState({ showmodal : false });
  }

  render() {
    return(
      <>
        <div class="navbar navbar-default navbar-fixed-top">
          <div class="container">

            <div className="navbar-header">
              <a href="#" className="navbar-brand"><span>X</span>-purt</a>
            </div>

            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <a href="#home" id='gohome'>Home</a>
                <a href="#about" id='goabout'>Why X-Purt?</a>
                <a href="#screenshot" id='golearners'>Learners</a>
                <a href="#pricing" id='goexpert'>Experts</a>
                <a href="#newsletter" id='gonews'>Contact</a>
                <a href="#" data-toggle="modal" data-target="#modal1" onClick = {this.modalfunction}>Sign In/Up</a>
              </ul>
            </div>

          </div>
        </div>
        <Modal
        isOpen = {this.state.showmodal}
        onRequestClose = {this.closeModal}
        contentLable = 'Contact Form'
        style = {customstyle}
        className = 'contact'
        >
           <div className='contact-title'>
               <button type="button"  onClick={this.closeModal} aria-label="Close"><span aria-hidden="true">&times;</span></button>
               <h2 className="modal-title">Contact Form</h2>
           </div>
               <form action="#" method="post" className='contact-form'>
                    <input name="name" type="text" id="name" placeholder="Your Name" required />
                 	  <input name="email" type="email"  id="email" placeholder="Email Address" required />
                 	  <textarea name="message" rows="3"  id="message" placeholder="Message" required></textarea>
                    <input name="submit" type="submit"  id="submit" value="Send Message"/>
               </form>
        </Modal>
      </>
    );
  }
}


export default Navigation;