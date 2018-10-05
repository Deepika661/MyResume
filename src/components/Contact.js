import React ,{ Component} from 'react';
import '../assets/css/style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import '../assets/css/bootstrap.css';
// import '../assets/css/lightbox.css';
 class Contact extends Component
 {

render(){
    return(
        <div>
    <div className="top-nav">
    <div className="container">
        <div className="navbar-header logo">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                Menu
            </button>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="menu">
                <ul className="nav navbar"> 
                <li><Link to="/">Home</Link></li>   
                <li>  <Link to="/about">About</Link></li>
                    <li><Link to="/skills"><span data-letters="Skills">Skills</span></Link></li>
                    <li><Link to="/experience"><span data-letters="Skills">Experience</span></Link></li>
                    <li><Link to="/education"><span data-letters="Skills">Education</span></Link></li>
                    <li><Link to="/work"><span data-letters="Skills">Work</span></Link></li>
                    <li><Link to="/contact"><span data-letters="Skills">Contact</span></Link></li>
                    <li><a className="w3ls-icon" href="#"><span className="glyphicon glyphicon-save"></span></a></li> 
                </ul>
                <div className="clearfix"> </div>
            </div>
        </div>
    </div>
</div>	
{/* <div className="modal fade modal-contact" id="contact" tabindex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div classNameName="modal-content"> 
        <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Get In Touch</h4>
            </div>
            <div className="modal-body modal-spa">
                <div className="contact"> 
                    <div className="contact-w3lsrow">
                        <div className="col-md-6 contact-left w3-agileits">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.9940307!3d40.719109700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e2f24131%3A0x64ffc98d24069f02!2sCANADA!5e0!3m2!1sen!2sin!4v1441710758555" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-6 contact-right">
                            <form action="#" method="post">
                                <div className="styled-input agile-styled-input-top">
                                    <input type="text" name="Name" required="">
                                    <label>Name</label>
                                    <span></span>
                                </div>
                                <div className="styled-input">
                                    <input type="text" name="Email" required=""> 
                                    <label>Email</label>
                                    <span></span>
                                </div> 
                                <div className="styled-input">
                                    <input type="text" name="Subject" required="">
                                    <label>Subject</label>
                                    <span></span>
                                </div>
                                <div className="styled-input">
                                    <textarea name="Message" required=""></textarea>
                                    <label>Message</label>
                                    <span></span>
                                </div>	 
                                <input type="submit" value="SEND">
                            </form>
                        </div>
                        <div className="clearfix"> </div>
                    </div>  
                </div>
            </div> 
        </div>
        </div>
    </div>
</div> 


     */}
 
 <div className="footer">
		<div className="container">
			<p><a>deepikasharma5991@gmail.com</a></p>
		</div>
	</div>
 </div>
);
}
 }

 export default Contact;