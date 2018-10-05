import React ,{ Component} from 'react';
import '../assets/css/style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import '../assets/css/bootstrap.css';
// import '../assets/css/lightbox.css';
 class Experience extends Component
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
<div className="modal fade modal-experience" id="experience" tabindex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content"> 
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">My Experience</h4>
            </div>
            <div className="modal-body modal-spa">
                <div className="experience w3-agileits-info">  
                    <div className="experience-grids">
                        <div className="experience-left">
                            <h3>2014 - Now </h3>
                            <h5>Company Name </h5>
                        </div>
                        <div className="experience-right">
                            <h4>Senior Web Designer</h4>
                            <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at</p>
                        </div>
                        <div className="clearfix"> </div>
                    </div> 
                    <div className="experience-grids experience-grids-btm">
                        <div className="experience-left">
                            <h3>2013 - 2014</h3>
                            <h5>Company Name </h5>
                        </div>
                        <div className="experience-right">
                            <h4>Graphic Designer</h4>
                            <p>Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum iaculis enim, non convallis felis mattis at</p>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="experience-grids w3-agileits">
                        <div className="experience-left">
                            <h3>2011 - 2013</h3>
                            <h5>Company Name </h5>
                        </div>
                        <div className="experience-right">
                            <h4>Web Designer & Developer</h4>
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

 export default Experience;