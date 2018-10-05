import React ,{ Component} from 'react';
import '../assets/css/style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import '../assets/css/bootstrap.css';
// import '../assets/css/lightbox.css';
 class Skills extends Component
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

<div className="modal fade modal-skills" id="skill" tabindex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content"> 
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">My Skills</h4>
            </div>
            <div className="modal-body modal-spa">
                <div className="skills"> 
                    <div className="col-md-6 bar-grids">
                        <h4><span className="glyphicon glyphicon-cog"></span> Technical Skills </h4>
                        <h6>web design  <span> 80% </span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" style={{width: '80%'}}>
                            </div>
                        </div>
                        <h6>ui design & developer <span> 70% </span></h6>
                        <div className="progress  w3-agile">
                            <div className="progress-bar progress-bar-striped active" style={{width: '70%'}}>
                            </div>
                        </div>
                        <h6>Javascript<span>90% </span></h6>
                        <div className="progress  w3-agile">
                            <div className="progress-bar progress-bar-striped active" style={{width: '90%'}}>
                            </div>
                        </div>
                        <h6>Photoshop <span> 75% </span></h6>
                        <div className="progress  w3-agile">
                            <div className="progress-bar progress-bar-striped active" style={{width: '75%'}}>
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-6 bar-grids  w3-agile">
                        <h4><span className="glyphicon glyphicon-briefcase"></span> Professional Skills </h4>
                        <h6>Communication<span> 85% </span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" style={{width: '85%'}}>
                            </div>
                        </div>
                        <h6>Social media marketing<span> 95% </span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" style={{width: '95%'}}>
                            </div>
                        </div>
                        <h6>Leadership<span>90% </span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped active" style={{width: '90%'}}>
                            </div>
                        </div>
                        <h6>Confidence<span>86% </span></h6>
                        <div className="progress prgs-w3agile-last">
                            <div className="progress-bar progress-bar-striped active" style={{width: '86%'}}>
                            </div>
                        </div> 
                    </div>
                    <div className="clearfix"> </div>	
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

 export default Skills;