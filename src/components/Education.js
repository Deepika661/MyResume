import React ,{ Component} from 'react';
import '../assets/css/style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import '../assets/css/bootstrap.css';
// import '../assets/css/lightbox.css';
 class Education extends Component
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

<div className="modal fade modal-experience" id="education" tabindex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content"> 
            <div className="modal-header w3layouts">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">My Qualification</h4>
            </div>
            <div className="modal-body modal-spa">
                <div className="experience">  
                    <div className="experience-grids">
                        <div className="experience-left">
                            <h3>2011<span>(2 Years Course)</span> </h3>
                            <h5> University Name</h5>
                        </div>
                        <div className="experience-right">
                            <h4>Master of Web Design</h4>
                            <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at</p>
                        </div>
                        <div className="clearfix"> </div>
                    </div> 
                    <div className="experience-grids experience-grids-btm">
                        <div className="experience-left">
                            <h3>2009<span>(3 Years Course)</span></h3>
                            <h5> University Name</h5>
                        </div>
                        <div className="experience-right">
                            <h4>Diploma in Design</h4>
                            <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at</p>
                        </div>
                        <div className="clearfix"> </div>
                    </div> 
                </div>
            </div> 
        </div>
    </div>
</div>
<div className="footer">
		<div className="container">
			<p><a>deepikasharma5991@gmail.com</a></p>
		</div>
	</div>
    
 

 </div>
);
}
 }

 export default Education;