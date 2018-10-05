import React ,{ Component} from 'react';
import '../assets/css/style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import '../assets/css/bootstrap.css';
// import '../assets/css/lightbox.css';
 class Work extends Component
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

<div className="modal fade modal-gallery" id="work" tabindex="-1" role="dialog"> */}
     <div className="modal-dialog" role="document">
        <div className="modal-content"> 
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">My Work</h4> 
            </div>
            <div className="modal-body modal-spa">
                <div className="gallery"> 
                    <div className="gallery-row"> 
                        <div className="col-md-4 gallery-grids">
                            <div className="gallery-w3ls-hover">
                                <a href="images/g1.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley">
                                    <img src="images/g1.jpg" className="img-responsive zoom-img" alt=""/>
                                    <div className="view-caption">
                                        <h5>View+</h5> 
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 gallery-grids">
                            <div className="gallery-w3ls-hover">
                                <a href="images/g2.jpg" data-lightbox="example-set" data-title="Sed ut perspiciatis unde omnis iste natus error sit">
                                    <img src="images/g2.jpg" className="img-responsive zoom-img" alt=""/>
                                    <div className="view-caption">
                                        <h5>View+</h5> 
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 gallery-grids">
                            <div className="gallery-w3ls-hover">
                                <a href="images/g3.jpg" data-lightbox="example-set" data-title="Eaque ipsa quae ab illo inventore veritatis et quasi">
                                    <img src="images/g3.jpg" className="img-responsive zoom-img" alt=""/>
                                    <div className="view-caption">
                                        <h5>View+</h5> 
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 gallery-grids">
                            <div className="gallery-w3ls-hover">
                                <a href="images/g4.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley">
                                    <img src="images/g4.jpg" className="img-responsive zoom-img" alt=""/>
                                    <div className="view-caption">
                                        <h5>View+</h5> 
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 gallery-grids">
                            <div className="gallery-w3ls-hover">
                                <a href="images/g5.jpg" data-lightbox="example-set" data-title="Sed ut perspiciatis unde omnis iste natus error sit">
                                    <img src="images/g5.jpg" className="img-responsive zoom-img" alt=""/>
                                    <div className="view-caption">
                                        <h5>View+</h5> 
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 gallery-grids">
                            <div className="gallery-w3ls-hover">
                                <a href="images/g6.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley">
                                    <img src="images/g6.jpg" className="img-responsive zoom-img" alt=""/>
                                    <div className="view-caption">
                                        <h5>View+</h5> 
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 gallery-grids">
                            <div className="gallery-w3ls-hover">
                                <a href="images/g3.jpg" data-lightbox="example-set" data-title="Sed ut perspiciatis unde omnis iste natus error sit">
                                    <img src="images/g3.jpg" className="img-responsive zoom-img" alt=""/>
                                    <div className="view-caption">
                                        <h5>View+</h5> 
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 gallery-grids">
                            <div className="gallery-w3ls-hover">
                                <a href="images/g1.jpg" data-lightbox="example-set" data-title="Eaque ipsa quae ab illo inventore veritatis et quasi">
                                    <img src="images/g1.jpg" className="img-responsive zoom-img" alt=""/>
                                    <div className="view-caption">
                                        <h5>View+</h5> 
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 gallery-grids">
                            <div className="gallery-w3ls-hover">
                                <a href="images/g2.jpg" data-lightbox="example-set" data-title="Lorem Ipsum is simply dummy the when an unknown galley">
                                    <img src="images/g2.jpg" className="img-responsive zoom-img" alt=""/>
                                    <div className="view-caption">
                                        <h5>View+</h5> 
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <script src="js/lightbox-plus-jquery.min.js"> </script> 
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

 export default Work;